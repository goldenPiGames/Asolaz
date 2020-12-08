var characterFocus = null;

function setCharacterFocus(car) {
	if (car) {
		characterFocus = car;
		characterFocusData = CHARACTER_DATA[car];
	}
}

function startConversation(character) {
	setCharacterFocus(character);
	if (hasPlayerMetCharacter(character)) {
		switchScreen(new ConversationScreen(character));
	} else {
		var dia = randomCharDialog("introduction", character);
		setCharacterMemory("met_player", character);
		//if (dia.log[dia.log.length-1].action != startConversation)
			//dia.log.push({action:startConversation});
		startScene(dia);
	}
}

class ConversationScreen extends SceneScreenFull {
	constructor(character = characterFocus) {
		super();
		this.character = character;
		this.charName = CHARACTER_DATA[this.character].name;
		this.turnsStarted = getConversationTurns(this.character);
		this.turns = this.turnsStarted;
		this.startLog([
		{
			charimg:{character:this.character, outfit:data.characters[this.character].outfit, pose:"standing"}},
			...randomCharDialog("greeting", this.character).log,
			{choices:this.getChoices()},
		]);
	}
	draw() {
		super.draw();
		if (this.choiceButtons) {
			ctx.fillStyle = palette.normal;
			drawTextUpperLeft(this.turns + " turns left");
		}
	}
	logEnded() {
		if (this.turns <= 0) {
			this.bye();
		} else {
			this.startLog([
				{choices:this.getChoices()}
			]);
		}
	}
	processText(text) {
		return processText(text, this.character);
	}
	getChoices() {
		return filterCharDialog([
			{text:"(Make small talk)", action:()=>this.doSmalltalk(), reqs:[]},
			{text:"(Ask [cgender|him|her|them] about...)", action:()=>this.doAskChoices(), reqs:[]},
			{text:"(Sexual...)", action:()=>this.doSexChoices(), reqs:[{type:"adult"}, {type:"genconsent", rank:1}]},
			{text:"Goodbye.", action:()=>this.bye()},
		], this.character)
	}
	doAskChoices() {
		this.startLog([
			{choices:[
				...this.getChoicesAsk(),
				{text:"Nevermind.", action:"mainchoices"},
			]}
		]);
	}
	getChoicesAsk() {
		return filterCharDialog("ask", this.character).map(b=>this.processAskChoice(b));
	}
	processAskChoice(bap) {
		var seen = characterRemembers("ask-"+bap.id);
		var blab = {
			text : (seen ? "(Seen) " : "") + bap.text,
			action : ()=>this.doAsk(bap, seen),
		}
		return blab;
	}
	doAsk(bap, seen) {
		this.useTurn();
		if (!seen)
			setCharacterMemory("ask-"+bap.id, this.character);
		this.startLog([
			...bap.log,
			...(seen ? [] : bap.firstUps),
		]);
	}
	doSexChoices() {
		this.startLog([
			{choices:[
				...this.getChoicesSex(),
				{text:"Nevermind.", action:"mainchoices"},
			]}
		]);
	}
	getChoicesSex() {
		return filterCharDialog("sex", this.character).map(b=>this.processSexChoice(b))
	}
	processSexChoice(bap) {
		var blab = {
			text : bap.text || bap.name,
			action : ()=>this.doSex(bap),
		}
		return blab;
	}
	doSex(bap) {
		this.useTurn();
		//setCharacterMemory("ask-"+bap.id, this.character);
		this.startLog([
			...bap.log,
		]);
	}
	doAction(line) {
		if (line.action == "mainchoices") {
			this.startLog([
				{choices:this.getChoices()},
			]);
		} else
			super.doAction(line);
	}
	bye() {
		if (this.turns < this.turnsStarted) {
			advanceTime();
		}
		return super.logEnded();
	}
	doIntroduction() {
		this.useTurn();
		//charParamUp(this.character, {param:"acquaint", by:1, upto:1});
		this.startLog([
			...randomCharDialog("introduction", this.character).log,
		]);
	}
	doSmalltalk() {
		this.useTurn();
		//charParamUp(this.character, {param:"acquaint", by:1, upto:50});
		this.startLog([
			...randomCharDialog("smalltalk", this.character).log,
			{action:"affinityUp", smalltalk:1, by:1, upto:50},
		]);
	}
	useTurn() {
		this.turns--;
	}
}

function getConversationTurns(car) {
	var baseturns = getCharacterStatus(car).status.baseConvo || BASE_CONVO_MEDIUM;
	return baseturns + playerSkillKnown("fast_talker");
}
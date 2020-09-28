function roomSexHubLetIn(character) {
	switchScreen(new RoomSexHub(character));
}

class RoomSexHub extends SceneScreen {
	constructor(character) {
		super();
		if (character)
		setCharacterFocus(character);
		this.character = character || characterFocus;
		this.charName = CHARACTER_DATA[this.character].name;
		this.turnsStarted = getConversationTurns(this.character);
		this.turns = this.turnsStarted;
		this.startLog([
			{text:"[cname] strips naked and looks at you expectantly.", charimg:{character:this.character, outfit:"nude", pose:"standing"}},
			{choices:this.getChoices()},
		]);
		this.didStuff = 0;
	}
	logEnded() {
		this.startLog([
			{choices:this.getChoices()}
		]);
	}
	processText(text) {
		return processText(text, this.character);
	}
	getChoices() {
		return [
			...getAvailableSexScenes(this.character, "room").map(b=>this.processSexChoice(b)),
			{text:this.didStuff?"That's all":"Nevermind", action:()=>this.bye()},
		];
	}
	processSexChoice(bap) {
		var blab = {
			text : bap.name,
			action : ()=>this.doSecks(bap),
		}
		return blab;
	}
	doSecks(bap) {
		this.didStuff++;
		this.startLog([
			...bap.log,
			{action:()=>this.getChoices()},
		]);
	}
	bye() {
		if (this.didStuff) {
			advanceTime();
		}
		return super.logEnded();
	}
}
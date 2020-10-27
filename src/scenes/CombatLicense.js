SCENES.combatlicense_intro = {
	log : [
		"You show up to the combat arena and find a few people getting ready fo a combat excercise.",
		{speaker:"Matzl", text:"I haven't seen you around here. Are you here to get a combat license?"},
		{choices:[
		{text:"Yes, take the combat license exam", log:[
			]},
		{text:"No, nevermind", log:[
			{speaker:"Matzl", text:"I see. Perhaps some other time."},
			{action:"return"},
			]}
		]},
		{speaker:"Matzl", text:"Normally, you'd have to take a written exam, but since the combat system hasn't been finalized, it would be silly to go through all the trouble of writing it."},
		{speaker:"Matzl", text:"All you need to do is defeat a punching bag in open combat. Shouldn't be too hard"},
		{action:startCombatLicensePractical},
	]
}

function startCombatLicensePractical() {
	//returnToLocation();
	enterCombatH2H({
		enemies : [new EnemyPunchingBag(10, false)],
		background:"arena_combat.jpg",
	});
	switchScreen(new CombatLicenseTutorial(runnee));
}

class CombatLicenseTutorial extends Screen {
	constructor(combat) {
		super();
		this.combat = combat;
		this.bag = this.combat.enemies[0];
	}
	resize() {
		this.combat.resize();
	}
	update() {
		this.combat.update();
		if (!this.bag.ai.active && this.bag.hpPortion() < .75) {
			this.bag.ai.active = true;
			startPopupScene({
				log : [
					{text:"You're hitting the sandbag, feeling confident about the basics of combat so far.", music:MUSIC_STOP},
					{text:"Suddenly, two beefy, muscular arms sprout out of the punching bag, flexing at you menacingly.", action:()=>this.bag.armsOut=true, music:"BattleField 4"},
					{speaker:"Matzl", text:"What? You think it's just gonna stand there and take it?"},
					{speaker:"Matzl", text:"Ha! Never gets old, seeing you newbies' reaction. Go on, finish it. It doesn't actually hit that hard."},
				]
			});
		}
	}
	draw() {
		this.combat.draw();
	}
}

/*const COMBAT_LICENSE_QUESTIONS = [
	{
		id : "
		question : "Which of the following factors contribute to the amount of damage dealt with an arcane attack such as Force Dart?",
		options : [
			{id:"", text:"Weapons", correct:true}
		]
	}
]*/
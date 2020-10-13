const CHARACTER_DATA = {
	
}

const CHARACTER_PARAMS_START_ZERO = [
	"acquaint",
	"affection",
	//"obedience",
]

const CHARACTER_PARAMS_INDIVIDUAL = [
	//"morality",
	//"legality",
	//"friendliness",
	//"selfesteem",
	"willpower",
	"psiaware",
	"arcaware",
	//"sluttiness",
]

const CHARACTER_PARAMS = [
	...CHARACTER_PARAMS_START_ZERO,
	...CHARACTER_PARAMS_INDIVIDUAL,
]

const PARAM_DATA = {
	acquaint : {
		name : "Acquaintance",
		read : "read_basic",
		description : "How well this person knows you.",
		expUp : 1,
	},
	affection : {
		name : "Affection",
		read : "read_basic",
		description : "How much this person likes you.",
		expUp : 2,
	},
	obedience : {
		name : "Obedience",
		read : "read_basic",
		description : "How much this character will obey you submissively.",
		expUp : 2,
	},
	morality : {
		name : "Morality",
		//read : "read_basic",
		description : "How much this person follows what they believe is right.",
	},
	legality : {
		name : "Legality",
		//read : "read_basic",
		description : "How much this person follows the law.",
	},
	willpower : {
		name : "Willpower",
		read : "read_defense",
		description : "Ability to resist all kinds of psionics.",
	},
	arcaware : {
		name : "Arcane Awareness",
		read : "read_defense",
		description : "How likely someone is to recognize arcana being used.",
	},
	psiaware : {
		name : "Psionic Awareness",
		read : "read_defense",
		description : "How likely someone is to recognize psionics being used.",
	},
	/*sluttiness : {
		
	}*/
}

const GENDER_MALE = 1;
const GENDER_FEMALE = 2;
const GENDER_NB = 3;

const BASE_CONVO_LONG = 6;
const BASE_CONVO_MEDIUM = 5;
const BASE_CONVO_SHORT = 3;

const SCHEDULE_SLEEPING = {verbing:"sleeping", inRoom:true, asleep:true, available:false};
const SCHEDULE_WORKING = {verbing:"working", baseConvo:BASE_CONVO_SHORT};
const SCHEDULE_EATING = {verbing:"eating", baseConvo:BASE_CONVO_LONG};
const SCHEDULE_WAKING = {verbing:"waking up", inRoom:true};
const SCHEDULE_DROWSING = {verbing:"getting ready for bed", inRoom:true, sleepWith:true};
const SCHEDULE_RELAXING = {verbing:"relaxing", inRoom:false, baseConvo:BASE_CONVO_LONG};
const SCHEDULE_RELAXING_IN_ROOM = {verbing:"relaxing", inRoom:true, baseConvo:BASE_CONVO_LONG};
const SCHEDULE_STUDYING = {verbing:"studying", baseConvo:BASE_CONVO_MEDIUM};
const SCHEDULE_LEARNING = {verbing:"learning", baseConvo:BASE_CONVO_SHORT};
const SCHEDULE_PATROLLING = {verbing:"patrolling", baseConvo:BASE_CONVO_SHORT};
const SCHEDULE_EXERCISING = {verbing:"exercising", baseConvo:BASE_CONVO_LONG};

const ACQUAINT_MET = 1;

function getCharParam(character, param) {
	return data.characters[character].paramsCore[param];
}

function charParamUp(character, args) {
	if (!character)
		character = characterFocus;
	var already = data.characters[character].paramsCore[args.param];
	var upto = args.upto;
	if (already >= upto) {
		if (playerSkillKnown("read_change"))
			return {speaker:"Read Change", text:PARAM_DATA[args.param]+" cannot be raised any higher from this interaction."};
		return;
	}
	data.characters[character].paramsCore[args.param] = Math.min(already + args.by, args.upto);
	var inc = data.characters[character].paramsCore[args.param] - already;
	var overHighest = data.characters[character].paramsCore[args.param] - data.characters[character].paramsCore_highest[args.param];
	var line = {speaker:"Read Change", text:CHARACTER_DATA[character].name+"'s "+PARAM_DATA[args.param].name+" increased by " + inc + "."}
	if (overHighest > 0) {
		data.characters[character].paramsCore_highest[args.param] = data.characters[character].paramsCore[args.param];
		if (PARAM_DATA[args.param].expUp) {
			var gotexp = earnExperience(overHighest * PARAM_DATA[args.param].expUp);
			line.text += " Earned "+ gotexp + " experience.";
		}
	}
	if (playerSkillKnown("read_change"))
		return line;
	else
		return false;
}

function refreshCharStatus() {
	for (car in CHARACTER_DATA) {
		var card = data.characters[car];
		var stadat = getCharacterStatus(car);
		//console.log(stadat);
		card.outfit = stadat.outfit || stadat.status.outfit || "default";
		card.location = stadat.location;
	}
}
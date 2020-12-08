const CHARACTER_DATA = {
	
}

const LIKES_MUCH = 2;
const LIKES_SOME = 1;
const LIKES_NOT = 0;

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

/*function getCharParam(character, param) {
	return data.characters[character].paramsCore[param];
}*/

/*function charParamUp(character, args) {
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
}*/

function affinityUp(character, args) {
	if (!character)
		character = characterFocus;
	var already = data.characters[character].affinity;
	var inc = 0;
	if (args.smalltalk) {
		var likes = CHARACTER_DATA[character].likes.smalltalk
		inc = likes;
	} else {
		throwMaybe("haven't decided how to power this");
		var upto = args.upto;
		data.characters[character].paramsCore[args.param] = Math.min(already + args.by, args.upto);
		var inc = data.characters[character].paramsCore[args.param] - already;
	}
	data.characters[character].affinity += inc;
	earnInspiration(inc);
	/*if (playerSkillKnown("read_change")) {
		if (inc > 0)
			return [{speaker:"Read Change", text:"Affinity increased by "+inc}];
		else (inc > 0)
			return [{speaker:"Read Change", text:"Affinity cannot be raised any higher from this interaction."}];
	} else*/
	return [];
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


function resetCharacterData(id) {
	var stati = CHARACTER_DATA[id];
	data.characters[id] = {
		id : id,
		affinity : 0,
		memory : {
			
		},
		combatExperience : 0,
	}
}
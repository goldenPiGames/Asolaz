SKILL_DATA.read_affinity = {
	name : "Read Affinity",
	flavor : "Know how much affinity a person has with you.",
	costs : [10],
	vnDescs : ["Know the Affinity of people you interact with."],
	category : "psionic",
	subcategory : "reading",
	treex : 1,
	treey : 1,
}
SKILL_DATA.read_hp = {
	name : "Read HP",
	flavor : "Detect the current well-being of enemies in combat.",
	costs : [10],
	vnDescs : ["See enemy HP bars."],
	category : "psionic",
	subcategory : "reading",
	treex : 2,
	treey : 1,
}
/*SKILL_DATA.read_attack = {
	name : "Read Attack",
	flavor : "Something something read.",
	costs : [10],
	vnDescs : ["Something, haven't decided yet."],
	rpgDescs : ["Know the offenses of enemies in combat."],
	prereqs : [[{type:"skill", skill:"read_basic", level:1}]],
	category : "psionic",
	subcategory : "reading",
	treex : 1,
	treey : 2,
}
SKILL_DATA.read_defense = {
	name : "Read Defense",
	flavor : "By searching for the target's confidences and fears, you can get an idea of what they can or can't defend themselves against.",
	costs : [10],
	vnDescs : ["Know the Willpower, Psionic Awareness, and Arcane Awareness of people you interact with."],
	rpgDescs : ["Know the defenses, weaknesses, and resistances of enemies in combat."],
	prereqs : [{type:"skill", skill:"read_basic", level:1}],
	category : "psionic",
	subcategory : "reading",
	treex : 2,
	treey : 2,
}*/
/*SKILL_DATA.read_change = {
	name : "Read Change",
	flavor : "Your constant reading allows you to immediately know when your target's status changes.",
	costs : [5],
	vnDescs : ["Tells you when you change a character's param."],
	rpgDescs : ["Displays exactly how much damage enemies take."],
	prereqs : [{type:"skill", skill:"read_basic", level:1}],
	category : "psionic",
	subcategory : "reading",
	treex : 2,
	treey : 1,
}*/
SKILL_DATA.track = {
	name : "Track",
	flavor : "Once you've met someone, you know where they are the People menu.",
	costs : [2],
	vnDescs : ["Know peoples' current location from the Journal."],
	rpgDescs : ["Know the location of enemies in the dungeon."],
	category : "psionic",
	subcategory : "reading",
	treex : 3,
	treey : 1,
}

function canTrackCharacter(charID) {
	return playerSkillKnown("track");
}

/*function canPlayerReadStat(stat) {
	var skill = ""
	switch (stat) {
		case STAT_HP_MAX: skill = "read_basic"; break;
		case STAT_MP_MAX: skill = "read_basic"; break;
		case STAT_MARTIAL_OFFENSE: skill = "read_attack"; break;
		case STAT_PSIONIC_OFFENSE: skill = "read_attack"; break;
		case STAT_ARCANE_OFFENSE: skill = "read_attack"; break;
		case STAT_MARTIAL_DEFENSE: skill = "read_defense"; break;
		case STAT_PSIONIC_DEFENSE: skill = "read_defense"; break;
		case STAT_ARCANE_DEFENSE: skill = "read_defense"; break;
	}
	return playerSkillKnown(skill);
}*/
SKILL_DATA.read_basic = {
	name : "Read Basic",
	flavor : "Basic reading skill. Allows you to read surface information about the target, such as their impressions of you or their basic status.",
	costs : [10],
	vnDescs : ["Know the Acquaintance and Affection of people you interact with."],
	rpgDescs : ["Know the HP and MP of enemies in combat."],
	category : "psionic",
	subcategory : "reading",
	treex : 1,
	treey : 1,
}
SKILL_DATA.read_attack = {
	name : "Read Defense",
	flavor : "Something something read .",
	costs : [10],
	vnDescs : ["Something, haven't decided yet."],
	rpgDescs : ["Know the offenses of enemies in combat."],
	prereqs : [{skill:"read_basic", level:1}],
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
	prereqs : [{skill:"read_basic", level:1}],
	category : "psionic",
	subcategory : "reading",
	treex : 2,
	treey : 2,
}
SKILL_DATA.read_change = {
	name : "Read Change",
	flavor : "Your constant reading allows you to immediately know when your target's status changes.",
	costs : [5],
	vnDescs : ["Tells you when you change a character's param."],
	rpgDescs : ["Displays exactly how much damage enemies take."],
	prereqs : [{skill:"read_basic", level:1}],
	category : "psionic",
	subcategory : "reading",
	treex : 2,
	treey : 1,
}
SKILL_DATA.track = {
	name : "Tracking",
	flavor : "Once you've met someone, you know where they are the People menu.",
	costs : [30],
	vnDescs : ["Know peoples' current location from the Journal."],
	rpgDescs : ["Know the location of enemies in the dungeon."],
	category : "psionic",
	subcategory : "reading",
	treex : 3,
	treey : 1,
}

function canPlayerReadStat(stat) {
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
}
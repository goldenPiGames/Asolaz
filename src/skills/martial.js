class CABasicAttack extends CombatAction {
	
}
CABasicAttack.prototype.name = "Basic Attack";
CABasicAttack.prototype.category = CATEGORY_MARTIAL;
CABasicAttack.prototype.skillID = "basic_attack";
CABasicAttack.prototype.desc = "Physical attack. No special effects.";
CABasicAttack.prototype.target = TARGET_ENEMY_ONLY;
CABasicAttack.prototype.power = 100;
CABasicAttack.prototype.attribute = ATTR_WEAPON;
CABasicAttack.prototype.cdMax = 0;

class CAPowerChop extends CombatAction {
	
}
CAPowerChop.prototype.name = "Power Chop";
CAPowerChop.prototype.category = CATEGORY_MARTIAL;
CAPowerChop.prototype.desc = "Cut attack. Powerful, but slow and inaccurate";
CAPowerChop.prototype.target = TARGET_ENEMY_ONLY;
CAPowerChop.prototype.initiative = .8;
CAPowerChop.prototype.baseHitrate = .6;
CAPowerChop.prototype.power = 130;
CAPowerChop.prototype.attribute = ATTR_CUT;
CAPowerChop.prototype.cdMax = 2;

SKILL_DATA.power_chop = {
	name : "Power Chop",
	flavor : "A slow but powerful attack.",
	costs : [20],
	category : "mundane",
	subcategory : "martial",
	treex : 1,
	treey : 1,
	combatActions : [
		CAPowerChop,
	]
}

class CARisingBlade extends CombatAction {
	
}
CARisingBlade.prototype.name = "Rising Blade";
CARisingBlade.prototype.category = CATEGORY_MARTIAL;
CARisingBlade.prototype.desc = "Cut attack. 3 hits. Bonus when targetted.";
CARisingBlade.prototype.target = TARGET_ENEMY_ONLY;
CARisingBlade.prototype.numHits = 3;
CARisingBlade.prototype.power = 40;
CARisingBlade.prototype.attribute = ATTR_CUT;
CARisingBlade.prototype.cdMax = 3;
//TODO deal bonus damage when you hit an enemy that's targeting you

SKILL_DATA.rising_blade = {
	name : "Rising Blade",
	flavor : "A slow but powerful attack.",
	costs : [40],
	category : "mundane",
	subcategory : "martial",
	treex : 1,
	treey : 3,
	combatActions : [
		CARisingBlade,
	]
}

class CALunge extends CombatAction {
	
}
CALunge.prototype.name = "Lunge";
CALunge.prototype.category = CATEGORY_MARTIAL;
CALunge.prototype.desc = "Fast and strong pierce attack";
CALunge.prototype.target = TARGET_ENEMY_ONLY;
CALunge.prototype.initiative = 1.25;
CALunge.prototype.power = 120;
CALunge.prototype.attribute = ATTR_PIERCE;
CALunge.prototype.cdMax  = 2;
//TODO lower evasion for rest of turn

SKILL_DATA.lunge = {
	name : "Lunge",
	flavor : "An extremely fast attack.",
	costs : [20],
	category : "mundane",
	subcategory : "martial",
	treex : 3,
	treey : 1,
	combatActions : [
		CALunge,
	]
}

class CASonicRaid extends CombatAction {
	
}
CASonicRaid.prototype.name = "Sonic Raid";
CASonicRaid.prototype.category = CATEGORY_MARTIAL;
CASonicRaid.prototype.desc = "Extremely fast pierce attack.";
CASonicRaid.prototype.target = TARGET_ENEMY_ONLY;
CASonicRaid.prototype.initiative = 10;
CASonicRaid.prototype.baseHitrate = .8;
CASonicRaid.prototype.power = 90;
CASonicRaid.prototype.attribute = ATTR_PIERCE;
CASonicRaid.prototype.cdMax  = 3;

SKILL_DATA.sonic_raid = {
	name : "Sonic Raid",
	flavor : "A blindingly fast attack. Even faster than most guarding skills.",
	costs : [50],
	rpgDescs : ["Unlock an extremely fast attack."],
	category : "mundane",
	subcategory : "martial",
	treex : 3,
	treey : 2,
	prereqs : [
		{type:"skill", skill:"lunge", level:1},
	],
	combatActions : [
		CASonicRaid,
	]
}

class CAVitalStrike extends CombatAction {
	
}
CAVitalStrike.prototype.name = "Vital Strike";
CAVitalStrike.prototype.category = CATEGORY_MARTIAL;
CAVitalStrike.prototype.desc = "Slow, accurate attack";
CAVitalStrike.prototype.target = TARGET_ENEMY_ONLY;
CAVitalStrike.prototype.initiative = 0.5;
CAVitalStrike.prototype.baseHitrate = .80;
CAVitalStrike.prototype.power = 110;
CAVitalStrike.prototype.attribute = ATTR_BLUNT;
CAVitalStrike.prototype.cdMax  = 2;
//TODO lower evasion for rest of turn

SKILL_DATA.vital_strike = {
	name : "Vital Strike",
	flavor : "A patient and measured attack.",
	costs : [20],
	category : "mundane",
	subcategory : "martial",
	treex : 5,
	treey : 1,
	combatActions : [
		CAVitalStrike,
	]
}

/*
class CAVanguard extends CombatAction {
	
}
CAVanguard.prototype.name = "Vanguard";
CAVanguard.prototype.flavor = "Increae turn speed and offense at the cost of defense.";
CAVanguard.prototype.attack = false;
CAVanguard.prototype.range = 0;
CAVanguard.prototype.target = TARGET_SELF_ONLY;
CAVanguard.prototype.attackStat = STAT_MARTIAL_OFFENSE;
CAVanguard.prototype.attackStat = STAT_MARTIAL_DEFENSE;
CAVanguard.prototype.cdMax = 10;

SKILL_DATA.vanguard = {
	name : "Vanguard",
	flavor : "Putting yourself bravely in front, you act faster and take and deal more damage.",
	costs : [50],
	rpgDescs : ["Increases the power of your basic attack."],
	category : "mundane",
	subcategory : "martial",
	treex : 1,
	treey : 1,
	rpgActions : [
		[CAVanguard],
	]
}*/
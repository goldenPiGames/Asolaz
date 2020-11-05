class CABasicAttack extends CombatAction {
	
}
CABasicAttack.prototype.name = "Basic Attack";
CABasicAttack.prototype.category = CATEGORY_MARTIAL;
CABasicAttack.prototype.skillID = "basic_attack";
CABasicAttack.prototype.desc = "Physical attack. No special effects.";
CABasicAttack.prototype.attack = true;
CABasicAttack.prototype.range = 1;
CABasicAttack.prototype.target = TARGET_ENEMY_ONLY;
CABasicAttack.prototype.power = 100;
CABasicAttack.prototype.attribute = ATTR_WEAPON;
CABasicAttack.prototype.attackStat = STAT_MARTIAL_OFFENSE;
CABasicAttack.prototype.defenseStat = STAT_MARTIAL_DEFENSE;
CABasicAttack.prototype.cdMax = 0;

class CAPowerAttack extends CombatAction {
	
}
CAPowerAttack.prototype.name = "Power Attack";
CAPowerAttack.prototype.category = CATEGORY_MARTIAL;
CAPowerAttack.prototype.desc = "Physical attack. Higher damage, slower speed.";
CAPowerAttack.prototype.attack = true;
CAPowerAttack.prototype.range = 1;
CAPowerAttack.prototype.target = TARGET_ENEMY_ONLY;
CAPowerAttack.prototype.initiative = .6;
CAPowerAttack.prototype.power = 70;
CAPowerAttack.prototype.attribute = ATTR_WEAPON;
CAPowerAttack.prototype.attackStat = STAT_MARTIAL_OFFENSE;
CAPowerAttack.prototype.defenseStat = STAT_MARTIAL_DEFENSE;
CAPowerAttack.prototype.cdMax = 2;

SKILL_DATA.power_attack = {
	name : "Power Attack",
	flavor : "A slow but powerful attack.",
	costs : [30],
	rpgDescs : ["Unlock a slow but powerful attack."],
	category : "mundane",
	subcategory : "martial",
	treex : 1,
	treey : 1,
	combatActions : [
		CAPowerAttack,
	]
}

class CASonicRaid extends CombatAction {
	
}
CASonicRaid.prototype.name = "Sonic Raid";
CASonicRaid.prototype.category = CATEGORY_MARTIAL;
CASonicRaid.prototype.desc = "Physical attack. Extremely fast.";
CASonicRaid.prototype.attack = true;
CASonicRaid.prototype.range = 1;
CASonicRaid.prototype.target = TARGET_ENEMY_ONLY;
CASonicRaid.prototype.initiative = 10;
CASonicRaid.prototype.power = 90;
CASonicRaid.prototype.attribute = ATTR_WEAPON;
CASonicRaid.prototype.attackStat = STAT_MARTIAL_OFFENSE;
CASonicRaid.prototype.defenseStat = STAT_MARTIAL_DEFENSE;
CASonicRaid.prototype.cdMax = 3;

SKILL_DATA.sonic_raid = {
	name : "Sonic Raid",
	flavor : "An extremely fast attack.",
	costs : [50],
	rpgDescs : ["Unlock an extremely fast attack."],
	category : "mundane",
	subcategory : "martial",
	treex : 1,
	treey : 2,
	combatActions : [
		CASonicRaid,
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
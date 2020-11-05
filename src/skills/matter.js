class CANeedleGun extends CombatAction {
	
}
CANeedleGun.prototype.name = "Needle Gun";
CANeedleGun.prototype.desc = "Piercing magic. Hits twice.";
CANeedleGun.prototype.attack = true;
CANeedleGun.prototype.cost = 4;
CANeedleGun.prototype.range = 5;
CANeedleGun.prototype.target = TARGET_ENEMY_ONLY;
CANeedleGun.prototype.baseHitrate = .60;
CANeedleGun.prototype.numHits = 2;
CANeedleGun.prototype.power = 60;
CANeedleGun.prototype.attribute = ATTR_PIERCE;
CANeedleGun.prototype.attackStat = STAT_ARCANE_OFFENSE;
CANeedleGun.prototype.defenseStat = STAT_ARCANE_DEFENSE;
CANeedleGun.prototype.cdMax = 2;

SKILL_DATA.needle_gun = {
	name : "Needle Gun",
	flavor : "A simple combat spell that creates and launches two sharp spikes made of a temporary material similar to metal.",
	costs : [10],
	category : "arcane",
	subcategory : "matter",
	treex : 1,
	treey : 1,
	combatActions : [
		CANeedleGun,
	]
}

class CANeedleBurst extends CombatAction {
	
}
CANeedleBurst.prototype.name = "Needle Burst";
CANeedleBurst.prototype.desc = "Piercing magic. Splashes.";
CANeedleBurst.prototype.attack = true;
CANeedleBurst.prototype.cost = 10;
CANeedleBurst.prototype.range = 4;
CANeedleBurst.prototype.target = TARGET_ENEMY_ONLY;
CANeedleBurst.prototype.baseHitrate = .60;
CANeedleBurst.prototype.numHits = 1;
CANeedleBurst.prototype.power = 80;
CANeedleBurst.prototype.splash = .5;
CANeedleBurst.prototype.attribute = ATTR_PIERCE;
CANeedleBurst.prototype.attackStat = STAT_ARCANE_OFFENSE;
CANeedleBurst.prototype.defenseStat = STAT_ARCANE_DEFENSE;
CANeedleBurst.prototype.cdMax = 4;

SKILL_DATA.needle_burst = {
	name : "Needle Burst",
	flavor : "Summon a spray of needles that hits all enemies.",
	costs : [50],
	category : "arcane",
	subcategory : "matter",
	treex : 1,
	treey : 2,
	prereqs : [
		{type:"skill", skill:"needle_gun", level:1},
	],
	combatActions : [
		CANeedleBurst,
	]
}



class CAHyperspike extends CombatAction {
	
}
CAHyperspike.prototype.name = "Hyperspike";
CAHyperspike.prototype.desc = "Piercing magic. Very powerful.";
CAHyperspike.prototype.attack = true;
CAHyperspike.prototype.cost = 10;
CAHyperspike.prototype.range = 4;
CAHyperspike.prototype.target = TARGET_ENEMY_ONLY;
CAHyperspike.prototype.baseHitrate = .50;
CAHyperspike.prototype.numHits = 1;
CAHyperspike.prototype.power = 250;
CAHyperspike.prototype.attribute = ATTR_PIERCE;
CAHyperspike.prototype.attackStat = STAT_ARCANE_OFFENSE;
CAHyperspike.prototype.defenseStat = STAT_ARCANE_DEFENSE;
CAHyperspike.prototype.cdMax = 8;

SKILL_DATA.hyperspike = {
	name : "Hyperspike",
	flavor : "Summon and launch a single massive indestructible spike.",
	costs : [120],
	category : "arcane",
	subcategory : "matter",
	treex : 1,
	treey : 3,
	prereqs : [
		{type:"skill", skill:"needle_burst", level:1},
	],
	combatActions : [
		CAHyperspike,
	]
}
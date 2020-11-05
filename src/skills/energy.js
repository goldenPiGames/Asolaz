class CAForceDart extends CombatAction {
	
}
CAForceDart.prototype.name = "Force Dart";
CAForceDart.prototype.desc = "Accurate magical attack.";
CAForceDart.prototype.attack = true;
CAForceDart.prototype.cost = 4;
CAForceDart.prototype.range = 5;
CAForceDart.prototype.target = TARGET_ENEMY_ONLY;
CAForceDart.prototype.baseHitrate = .90;
CAForceDart.prototype.power = 80;
CAForceDart.prototype.attribute = ATTR_FORCE;
CAForceDart.prototype.attackStat = STAT_ARCANE_OFFENSE;
CAForceDart.prototype.defenseStat = STAT_ARCANE_DEFENSE;
CAForceDart.prototype.cdMax = 2;

SKILL_DATA.force_dart = {
	name : "Force Dart",
	flavor : "Basic magical attack.",
	costs : [10],
	//vnDescs : ["Know the Acquaintance and Affection of people you interact with."],
	rpgDescs : ["Deals force damage to one enemy."],
	category : "arcane",
	subcategory : "energy",
	treex : 1,
	treey : 1,
	combatActions : [
		CAForceDart,
	]
}

class CAFireball extends CombatAction {
	
}
CAFireball.prototype.name = "Fireball";
CAFireball.prototype.desc = "Powerful magical attack.";
CAFireball.prototype.attack = true;
CAFireball.prototype.cost = 20;
CAFireball.prototype.range = 5;
CAFireball.prototype.target = TARGET_ENEMY_ONLY;
CAFireball.prototype.power = 150;
CAFireball.prototype.attribute = ATTR_FIRE;
CAFireball.prototype.attackStat = STAT_ARCANE_OFFENSE;
CAFireball.prototype.defenseStat = STAT_ARCANE_DEFENSE;
CAFireball.prototype.cdMax = 1;

SKILL_DATA.fireball = {
	name : "Fireball",
	flavor : "Powerful fire attack.",
	costs : [50],
	//vnDescs : ["Know the Acquaintance and Affection of people you interact with."],
	rpgDescs : ["Deals explodey fire damage."],
	category : "arcane",
	subcategory : "energy",
	treex : 2,
	treey : 2,
	combatActions : [
		CAFireball,
	]
}
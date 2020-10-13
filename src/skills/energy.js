class CAForceDart extends CombatAction {
	
}
CAForceDart.prototype.name = "Force Dart";
CAForceDart.prototype.flavor = "Basic magical attack.";
CAForceDart.prototype.attack = true;
CAForceDart.prototype.cost = 4;
CAForceDart.prototype.range = 5;
CAForceDart.prototype.target = TARGET_ENEMY_ONLY;
CAForceDart.prototype.power = 50;
CAForceDart.prototype.attribute = ATTR_FORCE;
CAForceDart.prototype.attackStat = STAT_ARCANE_OFFENSE;
CAForceDart.prototype.attackStat = STAT_ARCANE_DEFENSE;
CAForceDart.prototype.maxCD = 1;

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
		[],
		[CAForceDart],
	]
}

class CAFireball extends CombatAction {
	
}
CAFireball.prototype.name = "Fireball";
CAFireball.prototype.flavor = "Powerful magical attack.";
CAFireball.prototype.attack = true;
CAFireball.prototype.cost = 20;
CAFireball.prototype.range = 5;
CAForceDart.prototype.target = TARGET_ENEMY_ONLY;
CAFireball.prototype.power = 150;
CAFireball.prototype.attribute = ATTR_FIRE;
CAFireball.prototype.attackStat = STAT_ARCANE_OFFENSE;
CAFireball.prototype.attackStat = STAT_ARCANE_DEFENSE;
CAFireball.prototype.maxCD = 1;

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
		[],
		[CAFireball],
	]
}
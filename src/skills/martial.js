class CABasicAttack extends CombatAction {
	
}
CABasicAttack.prototype.name = "Basic Attack";
CABasicAttack.prototype.flavor = "Hit an enemy. As simple as that.";
CABasicAttack.prototype.attack = true;
CABasicAttack.prototype.power = 50;
CABasicAttack.prototype.range = 1;
CABasicAttack.prototype.attribute = ATTR_WEAPON;
CABasicAttack.prototype.attackStat = STAT_MARTIAL_OFFENSE;
CABasicAttack.prototype.attackStat = STAT_MARTIAL_DEFENSE;
CABasicAttack.prototype.maxCD = -1;

class CABasicAttackShit extends CABasicAttack {
	
}
CABasicAttack.prototype.name = "Shitty Attack";
CABasicAttack.prototype.flavor = "You don't actually know how to fight in melee.";
CABasicAttack.prototype.power = 30;

SKILL_DATA.basic_melee = {
	name : "Basic Melee Training",
	flavor : "You actually know to handle youself in melee.",
	costs : [20],
	rpgDescs : ["Increases the power of your basic attack."],
	category : "mundane",
	subcategory : "martial",
	treex : 1,
	treey : 1,
	combatActions : [
		[CABasicAttackShit],
		[CABasicAttack],
	]
}
class EnemyAxeBeak extends CombatEnemy {
	
}
EnemyAxeBeak.prototype.name = "Axe Beak";
EnemyAxeBeak.prototype.baseHP = 250;
EnemyAxeBeak.prototype.baseMP = 5;
EnemyAxeBeak.prototype.baseStatMults = checkBaseStatMults({
	mar_atk : 1.3,
	mar_def : 0.9,
	mar_acc : 1.0,
	mar_eva : 1.1,
	psi_atk : 0.5,
	psi_def : 0.7,
	psi_acc : 0.8,
	psi_eva : 0.7,
	arc_atk : 0.5,
	arc_def : 1.0,
	arc_acc : 0.8,
	arc_eva : 1.2,
	init : 1.2,
});
EnemyAxeBeak.prototype.actionCons = [
	CABasicAttack,
	CAPowerChop,
];

class EnemyAxeBeakDrawer extends EnemyDrawerImage {
	
}
EnemyAxeBeakDrawer.prototype.imageFolder = "axebeak";
EnemyAxeBeakDrawer.prototype.imagePoses = ["normal", "attackBefore", "attackAfter"];
EnemyAxeBeak.prototype.drawerCons = EnemyAxeBeakDrawer;
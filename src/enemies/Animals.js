class EnemyGiantWasp extends CombatEnemy {
	
}

//https://sharecg.com/v/90468/view/11/Poser/Mandarine-Wasp

class EnemyChipmunk extends CombatEnemy {
	
}
EnemyChipmunk.prototype.name = "Chipmunk";
EnemyChipmunk.prototype.baseHP = 250;
EnemyChipmunk.prototype.baseMP = 5;
EnemyChipmunk.prototype.baseStatMults = checkBaseStatMults({
	mar_atk : 0.9,
	mar_def : 0.8,
	mar_acc : 1.1,
	mar_eva : 1.2,
	psi_atk : 1.0,
	psi_def : 1.2,
	psi_acc : 0.8,
	psi_eva : 1.2,
	arc_atk : 0.5,
	arc_def : 1.0,
	arc_acc : 0.9,
	arc_eva : 1.2,
	init : 1.0,
});
EnemyChipmunk.prototype.actionCons = [
	CABasicAttack,
	//CAPowerAttack,
];

class EnemyChipmunkDrawer extends EnemyDrawerImage {
	
}
EnemyChipmunkDrawer.prototype.imageFolder = "chipmunk";
EnemyChipmunkDrawer.prototype.imagePoses = ["normal", "attackBefore", "attackAfter"];
EnemyChipmunk.prototype.drawerCons = EnemyChipmunkDrawer;
//https://www.renderosity.com/rr/mod/freestuff/?item_id=62185
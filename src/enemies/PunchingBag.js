class EnemyPunchingBag extends CombatEnemy {
	constructor(level, active=true) {
		super(level);
		this.ai.active = active;
		this.armsOut = active;
	}
	getEvasionFor(...args) {
		//console.log(this.ai.active)
		if (this.ai.active)
			return super.getEvasionFor(...args);
		else
			return 0;
	}
}
EnemyPunchingBag.prototype.name = "Dummy";
EnemyPunchingBag.prototype.baseHP = 400;
EnemyPunchingBag.prototype.baseMP = 5;
EnemyPunchingBag.prototype.baseStatMults = checkBaseStatMults({
	mar_atk : 10,
	mar_def : 12,
	mar_acc : 10,
	mar_eva : 05,
	psi_atk : 05,
	psi_def : 10,
	psi_acc : 05,
	psi_eva : 10,
	arc_atk : 05,
	arc_def : 13,
	arc_acc : 08,
	arc_eva : 05,
	init : 10,
});
EnemyPunchingBag.prototype.actionCons = [
	CABasicAttack,
];

class PunchingBagAI extends RandomAI {
	constructor(...a) {
		super(...a);
	}
	chooseTurn(battle) {
		if (this.active) {
			return super.chooseTurn(battle);
		} else {
			return {
				action : new WaitAction(this.unit),
				target : this.unit,
			}
		}
	}
}
EnemyPunchingBag.prototype.aiCons = PunchingBagAI;

class EnemyPunchingBagDrawer extends EnemyDrawerImage {
	getPose() {
		//console.log(this.unit.ai.active);
		if (this.unit.armsOut) {
			return "flex";
		} else {
			return "noarms";
		}
	}
}
EnemyPunchingBagDrawer.prototype.imageFolder = "punchingbag";
EnemyPunchingBagDrawer.prototype.imagePoses = ["noarms", "flex", "punch"];
EnemyPunchingBag.prototype.drawerCons = EnemyPunchingBagDrawer;
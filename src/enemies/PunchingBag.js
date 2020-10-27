class EnemyPunchingBag extends CombatEnemy {
	constructor(level, active=true) {
		super(level);
		this.ai.active = active;
		this.armsOut = active;
	}
}
EnemyPunchingBag.prototype.name = "Dummy";
EnemyPunchingBag.prototype.baseHP = 200;
EnemyPunchingBag.prototype.baseMP = 5;
EnemyPunchingBag.prototype.baseStatScaling = doStatsMPAI(10, 10, 10, 10, 10, 10, 10);
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
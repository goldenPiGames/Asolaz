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
EnemyPunchingBag.prototype.name = "Punching Bag";
EnemyPunchingBag.prototype.baseHP = 400;
EnemyPunchingBag.prototype.baseMP = 5;
EnemyPunchingBag.prototype.baseStatMults = checkBaseStatMults({
	mar_atk : 1.0,
	mar_def : 1.2,
	mar_acc : 1.0,
	mar_eva : 0.5,
	psi_atk : 0.5,
	psi_def : 1.0,
	psi_acc : 0.5,
	psi_eva : 1.0,
	arc_atk : 0.5,
	arc_def : 1.3,
	arc_acc : 0.8,
	arc_eva : 0.5,
	init : 1.0,
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
	getPose(anim) {
		//console.log(this.unit.ai.active);
		if (!this.unit.armsOut) {
			return "noarms";
		} else {
			return super.getPose(anim);
		}
	}
}
EnemyPunchingBagDrawer.prototype.imageFolder = "punchingbag";
EnemyPunchingBagDrawer.prototype.imagePoses = ["noarms", "normal", "attackBefore", "attackAfter"];
EnemyPunchingBag.prototype.drawerCons = EnemyPunchingBagDrawer;
class CombatUnit {
	constructor() {
		this.actions = [new CABasicAttack(this)];
	}
	chooseTurn(battle) {
		return this.ai.chooseTurn(battle);
	}
	getAvailableActions() {
		return this.actions.filter(a=>a.isReady());
	}
	takeDamage(amount) {
		this.hp -= amount;
		return [];
	}
	turnEnd() {
		this.actions.forEach(a=>a.turnEnd());
	}
	hpPortion() {
		return this.hp / this.hpMax;
	}
	shouldDie() {
		return (this.hp <= 0);
	}
	getCexpYield() {
		return getEnemyCexpYield(this);
	}
	getInitiativeFor(action) {
		return this.getBaseInitiative() * action.initiative;
	}
	getAttackFor(action) {
		return this.getBaseAttackFor(action);
	}
	getDefenseFor(action) {
		return this.getBaseDefenseFor(action);
	}
	getAccuracyFor(action) {
		return this.getBaseAccuracyFor(action);
	}
	getEvasionFor(action) {
		return this.getBaseEvasionFor(action);
	}
}

class CombatPlayer extends CombatUnit {
	constructor() {
		super();
		this.name = data.player.name;
		this.level = data.player.combatLevel;
		this.hpMax = 1000;
		this.mpMax = 100;
		this.hp = this.hpMax;
		this.mp = this.maxMP;
		this.actions = [new CABasicAttack(this)];
		data.player.actionsEquipped.map(t=>this.actions.push(getPlayerSkillAction(t)));
	}
	combatEnd() {
		
	}
	turnField() {
		this.actions.forEach(a=>a.turnEnd());
	}
	getBaseInitiative(action) {
		return 1.0*this.level;
	}
	getBaseAttackFor(action) {
		return 1.0*this.level;
	}
	getBaseDefenseFor(action) {
		return 1.0*this.level;
	}
	getBaseAccuracyFor(action) {
		return 1.0*this.level;
	}
	getBaseEvasionFor(action) {
		return 1.0*this.level;
	}
}

class CombatEnemy extends CombatUnit {
	constructor(level) {
		super();
		this.level = level;
		this.hpMax = this.baseHP;
		this.mpMax = this.baseMP;
		this.hp = this.hpMax;
		this.mp = this.mpMax;
		this.actions = this.actionCons.map(c=>new c(this));
		this.ai = new (this.aiCons)(this);
	}
	getBaseInitiative(action) {
		return this.baseStatMults["init"]*this.level;
	}
	getBaseAttackFor(action) {
		return this.baseStatMults[action.getCat()+"_atk"]*this.level;
	}
	getBaseDefenseFor(action) {
		//console.log(action)
		return this.baseStatMults[action.getCat()+"_def"]*this.level;
	}
	getBaseAccuracyFor(action) {
		return this.baseStatMults[action.getCat()+"_acc"]*this.level;
	}
	getBaseEvasionFor(action) {
		return this.baseStatMults[action.getCat()+"_eva"]*this.level;
	}
}
CombatEnemy.prototype.aiCons = RandomAI;

function checkBaseStatMults(from) {
	var to = {
		mar_atk : 1.0,
		mar_def : 1.0,
		mar_acc : 1.0,
		mar_eva : 1.0,
		psi_atk : 1.0,
		psi_def : 1.0,
		psi_acc : 1.0,
		psi_eva : 1.0,
		arc_atk : 1.0,
		arc_def : 1.0,
		arc_acc : 1.0,
		arc_eva : 1.0,
		init : 1.0,
	}
	for (var nom in from) {
		if (!to[nom])
			throwMaybe(nom + " is not a stat ID");
		to[nom] = from[nom];
	}
	return to;
}
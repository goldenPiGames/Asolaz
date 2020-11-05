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
	getInitiative(action) {
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
	getBaseInitiative(action) {
		return 10*this.level;
	}
	getBaseAttackFor(action) {
		return 10*this.level;
	}
	getBaseDefenseFor(action) {
		return 10*this.level;
	}
	getBaseAccuracyFor(action) {
		return 10*this.level;
	}
	getBaseEvasionFor(action) {
		return 10*this.level;
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
		return 10*this.level;
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

function doStatsMPAI(mar_atk, mar_def, psi_atk, psi_def, arc_atk, arc_def, init) {
	return {
		hp_end : 10,
		mp_end : 10,
		mar_atk : mar_atk,
		mar_def : mar_def,
		psi_atk : psi_atk,
		psi_def : psi_def,
		arc_atk : arc_atk,
		arc_def : arc_def,
		init : init,
	}
}

function checkBaseStatMults(from) {
	var to = {
		mar_atk : 10,
		mar_def : 10,
		mar_acc : 10,
		mar_eva : 10,
		psi_atk : 10,
		psi_def : 10,
		psi_acc : 10,
		psi_eva : 10,
		arc_atk : 10,
		arc_def : 10,
		arc_acc : 10,
		arc_eva : 10,
		init : 10,
	}
	for (var nom in from) {
		if (!to[nom])
			throwMaybe(nom + " is not a stat ID");
		to[nom] = from[nom];
	}
	return to;
}
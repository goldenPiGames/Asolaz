class CombatUnit {
	constructor() {
		this.baseStats = {};
		this.actions = [new CABasicAttack(this)];
	}
	getStat(name) {
		return this.baseStats[name];
	}
	getInitiative(action) {
		return this.getStat(STAT_INITIATIVE) * action.initiative;
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
		return (this.hp < 0);
	}
	getCexpYield() {
		return getEnemyCexpYield(this);
	}
}

class CombatPlayer extends CombatUnit {
	constructor() {
		super();
		this.name = data.player.name;
		this.level = data.player.combatLevel;
		this.baseStats[STAT_HP_MAX] = 1000;
		this.baseStats[STAT_MP_MAX] = 100;
		LEVEL_STAT_LIST.forEach(s => this.baseStats[s] = AVG_STAT_PER_LEVEL * this.level);
		this.hpMax = this.baseStats[STAT_HP_MAX];
		this.maxMP = this.baseStats[STAT_MP_MAX];
		this.hp = this.hpMax;
		this.mp = this.maxMP;
		SKILL_ID_LIST.forEach(id => {
			if (SKILL_DATA[id].rpgActions && playerSkillKnown(id))
				this.actions.push(...SKILL_DATA[id].rpgActions[playerSkillKnown(id)-1].map(c=>new c(this)));
		});
	}
}

class CombatEnemy extends CombatUnit {
	constructor(level) {
		super();
		this.level = level;
		this.baseStats[STAT_HP_MAX] = this.baseHP;
		this.baseStats[STAT_MP_MAX] = this.baseMP;
		this.hpMax = this.baseStats[STAT_HP_MAX];
		this.maxMP = this.baseStats[STAT_MP_MAX];
		this.hp = this.hpMax;
		this.mp = this.maxMP;
		this.actions = this.actionCons.map(c=>new c(this));
		LEVEL_STAT_LIST.forEach(s => this.baseStats[s] = this.baseStatScaling[s] * this.level);
		this.ai = new (this.aiCons)(this);
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
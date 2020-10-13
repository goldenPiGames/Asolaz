class CombatUnit {
	constructor() {
		this.baseStats = {};
		this.actions = [];
	}
}

class CombatPlayer extends CombatUnit {
	constructor() {
		super();
		this.level = data.player.cl;
		this.baseStats[STAT_HP_MAX] = 1000;
		this.baseStats[STAT_MP_MAX] = 100;
		LEVEL_STAT_LIST.forEach(s => this.baseStats[s] = AVG_STAT_PER_LEVEL * this.level);
		SKILL_ID_LIST.forEach(id => this.actions.push(
	}
}

class CombatEnemy extends CombatUnit {
	constructor(level) {
		super();
		this.level = level;
		LEVEL_STAT_LIST.forEach(s => this.baseStats[s] = this.baseStatScaling[s] * this.level);
	}
}

function doStatsMPA(mar_atk, mar_def, psi_atk, psi_def, arc_atk, arc_def) {
	return {
		hp_end : 10,
		mp_end : 10,
		mar_atk : mar_atk,
		mar_def : mar_def,
		psi_atk : psi_atk,
		psi_def : psi_def,
		arc_atk : arc_atk,
		arc_def : arc_def,
	}
}

class EnemyDummy extends CombatEnemy {
	
}
EnemyDummy.prototype.baseHP = 200;
EnemyDummy.prototype.baseMP = 0;
EnemyDummy.prototype.baseStatScaling = doStatsMPA(10, 10, 10, 10, 10, 10);
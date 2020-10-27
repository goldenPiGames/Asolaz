const ATTR_WEAPON = "weapon";
const ATTR_FIRE = "fire";
const ATTR_FORCE = "force";

const TARGET_ENEMY_ONLY = {
	enemy : true,
	self : false,
	ally : false,
};

const TARGET_SELF_ONLY = {
	enemy : false,
	self : true,
	ally : false,
};

const TARGET_ALLY_ONLY = {
	enemy : false,
	self : false,
	ally : true,
};

const TARGET_ANY_ALLY = {
	enemy : false,
	self : true,
	ally : true,
};

const TARGET_ANY = {
	enemy : true,
	self : true,
	ally : true,
};

class CombatHitTicket {
	constructor(target, hitrate) {
		this.target = target;
		this.hitrate = hitrate;
	}
	
}

class CombatAction {
	constructor(user) {
		this.user = user;
	}
	isReady() {
		return this.cd <= 0;
	}
	getAnimation(hits, battle, user, target) {
		return new (this.animCons)(this, hits, battle, user, target);
	}
	/*getH2HAnimation(battle, user, target) {
		return new (this.animCons)(this, user, target);
	}*/
	getHits(battle, user, target) {
		var hits = [];
		if (this.power) {
			hits.push({
				target:target,
				hitrate:this.calculateHitrate(battle, user.unit, target.unit),
				damage:this.calculateDamage(battle, user.unit, target.unit)
			});
		}
		return hits;
		//this.expend();
	}
	/*addHit(user, target) {
		return this.doDamage(user, target);
	}*/
	doDamage(user, target) {
		var damage = this.calculateDamage(user, target);
		return target.takeDamage(damage, this, user);
	}
	calculateHitrate(battle, user, target) {
		var base = this.baseHitrate;
		var atk = user.getStat(this.attackStat);
		var def = target.getStat(this.defenseStat);
		var hit = base*atk / (base*atk + (1-base)*def);
		return hit;
	}
	calculateDamage(battle, user, target) {
		var pow = this.power;
		var atk = user.getStat(this.attackStat);
		var def = target.getStat(this.defenseStat);
		var dmg = Math.ceil(pow * atk / (atk + def));
		return dmg;
	}
	expend() {
		this.cd = this.cdMax;
	}
	turnEnd() {
		this.cd--;
		if (!(this.cd > 0))
			this.cd = 0;
	}
}
CombatAction.prototype.cd = 0;
CombatAction.prototype.cdMax = 0;
CombatAction.prototype.mpCost = 0;
CombatAction.prototype.baseHitrate = .70;
CombatAction.prototype.initiative = 1.0;

class WaitAction extends CombatAction {
	
}
WaitAction.prototype.name = "Wait";
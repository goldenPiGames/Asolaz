class ActionAnimation {
	constructor(action, hits, battle, user, target) {
		this.time = 0;
		//console.log(hits);
		this.hits = hits;
		this.action = action;
		this.user = user;
		this.target = target;
	}
	update() {
		this.time++;
	}
	doneYet() {
		return this.time > this.totalDuration;
	}
}

class PlaceholderAttackAnimation extends ActionAnimation {
	constructor(...a) {
		super(...a);
		this.hits.forEach((h, i) => h.time = 30 + 5*i);
		this.totalDuration = 40 + 5*this.hits.length;
	}
	update(...a) {
		super.update(...a);
	}
	draw() {
		ctx.strokeStyle = "#FF0000";
		this.hits.forEach(h=>{
			//console.log(h.time, this.time);
			if (this.time <= h.time && this.time + 30 >= h.time) {
				//console.log(h.target.x+h.target.width/2, h.target.y+h.target.height/2, (h.time-this.time)*20);
				ctx.beginPath();
				ctx.arc(h.target.x+h.target.width/2, h.target.y+h.target.height/2, (h.time-this.time)*20, 0, 2*Math.PI);
				ctx.stroke();
			}
		});
	}
	doneYet() {
		return this.time >= this.totalDuration;
	}
}
CombatAction.prototype.animCons = PlaceholderAttackAnimation;
PlaceholderAttackAnimation.prototype.totalDuration = 90;

class UnseeableAnimation extends ActionAnimation {
	draw() {
		
	}
}
WaitAction.prototype.animCons = UnseeableAnimation;
UnseeableAnimation.prototype.totalDuration = 20;
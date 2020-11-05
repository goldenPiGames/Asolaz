const TEAM_ENEMIES = false;
const TEAM_PLAYERS = true;
const COMBAT_RNG_BUFFER_SIZE = 16;

function enterCombatH2H(args) {
	switchScreen(new CombatScreen(args));
}

class CombatScreen extends Screen {
	constructor(args) {
		super();
		this.enemies = args.enemies;
		this.after = args.after || returnToLocation;
		this.player = new CombatPlayer();
		this.players = [this.player];
		this.enemyPanels = this.enemies.map(e=>new CombatEnemyPanel(e));
		this.playerPanels = this.players.map(p=>new CombatPlayerPanel(p));
		this.allUnitPanels = [...this.enemyPanels, ...this.playerPanels];
		this.setInitialRNG();
		this.onWin = args.onWin || returnToLocation;
		if (typeof args.background == "string" || typeof args.bg == "string")
			setTempBG(args.background || args.bg);
		this.startSelecting();
	}
	startSelecting() {
		this.enemyPanels.forEach(e=>e.chooseTurn(this));
		this.selecting = new CombatScreenSelecting(this);
		this.resize();
	}
	resize() {
		var playerHeight = 150;
		this.teamGapHeight = 150;
		this.teamGapY = canvas.height-playerHeight-this.teamGapHeight;
		var playerWidth = Math.min(canvas.width/this.playerPanels.length, Math.max(canvas.width/3, 300));
		this.playerPanels.forEach((p, i) => p.resize(canvas.width/2 - (i+1/2)*playerWidth, canvas.height-playerHeight, playerWidth, playerHeight));
		var enemyWidth = Math.min(canvas.width/this.enemyPanels.length, Math.max(canvas.width/3, 300));
		this.enemyPanels.forEach((e, i) => e.resize(canvas.width/2 - (i+1/2)*enemyWidth, 0, enemyWidth, canvas.height-playerHeight-this.teamGapHeight));
		if (this.selecting)
			this.selecting.resize();
	}
	update() {
		if (this.selecting) {
			this.selecting.update();
		} else if (this.currentAnimation) {
			this.currentAnimation.update();
			var tod = this.currentAnimation.hits.find(h=>!h.done);
			if (tod && this.currentAnimation.time>=tod.time) {
				tod.done = true;
				if (tod.hit)
					tod.target.getHit(tod);
			} else if (!tod && this.currentAnimation.doneYet()) {
				this.currentAnimation = null;
			}
		} else {
			this.nextAction();
		}
	}
	draw() {
		drawBG();
		this.allUnitPanels.forEach(d=>d.draw());
		for (var i = 0; i < 10 && i < this.rngSequence.length; i++) {
			drawTextInRect(asPercent(this.rngSequence[i]), canvas.width-50, 50+20*i, 50, 50, 20, {stroke:palette.normal, fill:palette.background});
		}
		if (this.selecting) {
			this.selecting.draw();
		} else {
			if (this.currentAnimation) {
				this.currentAnimation.draw();
				drawTextInRect(this.currentTaker.unit.name + " uses " + this.currentAction.name, 0, this.teamGapY, canvas.width, this.teamGapHeight/3);
			}
		}
	}
	finishSelecting() {
		this.startActing();
	}
	startActing() {
		this.selecting = null;
		this.animationQ = [];
		this.notActedYet = this.allUnitPanels.slice();
		this.nextAction();
	}
	nextAction() {
		this.notActedYet = this.notActedYet.filter(e=>!e.unit.shouldDie());
		if (this.notActedYet.length < 1) {
			this.endActing();
			return;
		}
		this.notActedYet.sort((a,b)=>b.getInitiative()-a.getInitiative());
		this.currentTaker = this.notActedYet.shift();
		this.currentAction = this.currentTaker.selectedAction;
		this.currentHits = this.currentAction.getHits(this, this.currentTaker, this.currentTaker.selectedTarget);
		this.currentHits.forEach(h=>{
			h.rng = this.nextRNG();
			h.hit = h.rng <= h.hitrate;
		});
		//console.log(this.currentHits);
		this.currentAnimation = this.currentAction.getAnimation(this.currentHits, this, this.currentTaker, this.currentTaker.selectedTarget);
		//this.executeAction(taking.selectedAction, taking, taking.selectedTarget);
		//this.nextAction();
	}
	setInitialRNG() {
		this.rngSequence = [];
		while (this.rngSequence.length < COMBAT_RNG_BUFFER_SIZE) {
			this.rngSequence.push(Math.random());
		}
	}
	nextRNG() {//TODO sequence
		this.rngSequence.push(Math.random());
		return this.rngSequence.shift();
	}
	endActing() {
		this.getAllUnits().forEach(u=>u.turnEnd());
		this.filterAlive();
		if (this.enemyPanels.length <= 0) {
			this.win();
		} else {
			this.startSelecting();
		}
	}
	getAllUnits() {
		return [...this.players, ...this.enemies];
	}
	executeAction(action, user, target) {
		if (!action || !user || !target) {
			throwMaybe(action, user, target);
			return;
		}
		console.log(action, user.unit.name, target.unit.name);
		action.execute(this, user.unit, target.unit);
	}
	getPanelFor(unit) {
		if (unit instanceof CombatUnitPanel)
			return unit;
		return (this.allUnitPanels.find(d=>d.unit==unit));
	}
	getAllTargetable(action, user) {
		if (user instanceof CombatUnit) {
			user = this.getPanelFor(user);
		}
		var toTarget = [];
		//console.log(user.team);
		if (user.team) {
			if (action.target.enemy)
				toTarget.push(...this.enemyPanels);
			if (action.target.self)
				toTarget.unitTargeters.push(user);
			if (action.target.ally)
				toTarget.unitTargeters.push(...this.playerPanels.filter(d=>d!=user));
		} else {
			if (action.target.enemy)
				toTarget.push(...this.playerPanels);
			if (action.target.self)
				toTarget.unitTargeters.push(user);
			if (action.target.ally)
				toTarget.unitTargeters.push(...this.enemyPanels.filter(d=>d!=user));
		}
		return toTarget;
	}
	filterAlive() {
		var len = this.enemyPanels.length;
		this.enemyPanels = this.enemyPanels.filter(e=>!e.unit.shouldDie());
		if (this.enemyPanels.length < len)
			this.resize();
	}
	win() {
		switchScreen(new CombatSpoilsScreen(this));
	}
}

class CombatScreenSelecting {
	constructor(parent) {
		this.parent = parent;
		this.actionPalette = new CombatActionPalette(this);
		this.unitTargeters = [];
		//console.log(this.parent.player.actions);
		if (this.parent.players.length == 1)
			this.taker = this.parent.playerPanels[0];
		this.setTakerActions();
	}
	resize() {
		this.actionPalette.resize(0, this.parent.teamGapY, canvas.width, this.parent.teamGapHeight);
		this.unitTargeters.forEach(t=>t.resize());
	}
	update() {
		this.actionPalette.update();
		this.unitTargeters.forEach(t=>t.update());
	}
	draw() {
		this.actionPalette.draw();
		this.unitTargeters.forEach(t=>t.draw());
	}
	setTakerActions() {
		this.unitTargeters = [];
		this.actionPalette.setActions(this.taker.unit.actions);
	}
	actionClicked(action) {
		if (action.isReady()) {
			this.unitTargeters = [];
			this.taker.selectedAction = action;
			this.setTargets(this.taker.selectedAction);
			return true;
		}
	}
	setTargets() {
		//console.log(this.taker.selectedAction.target);
		this.unitTargeters = this.parent.getAllTargetable(this.taker.selectedAction, this.taker).map(u=>new CombatUnitTargeter(u, this, this.taker));
	}
	targetClicked(panel) {
		this.taker.selectedTarget = panel;
		this.parent.finishSelecting();
	}
}

class ActionPalette extends UIObject {
	constructor(whatdo) {
		super();
		this.buttons = [];
		if (whatdo)
			this.whatdo = whatdo;
	}
	resize(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.textHeight = 30;
		this.resizeButtons();
	}
	setActions(actions) {
		//console.log(actions)
		this.buttons = actions.map((a, i)=> new CombatActionPaletteButton(a, i, this));
		this.resizeButtons();
	}
	resizeButtons() {
		var size = this.height-this.textHeight;
		this.buttons.forEach((b, i, l)=>b.resize(this.x+this.width*(i+1)/(l.length+1)-size/2, this.y+this.textHeight, size, size));
	}
	update() {
		this.hovered = null;
		this.buttons.forEach(b=>b.update());
	}
	draw() {
		this.buttons.forEach(b=>b.draw());
	}
	actionHovered(butt) {
		this.hovered = butt;
	}
	actionClicked(butt) {
		if (this.whatdo(butt)) {
			this.selected = butt;
			this.buttons.forEach(b=>b.selected=b==butt);
		}
	}
}
ActionPalette.prototype.textHeight = 0;

class CombatActionPalette extends ActionPalette {
	constructor(parent) {
		super();
		this.parent = parent;
	}
	draw() {
		var toTip = this.hovered || this.selected;
		if (toTip) {
			drawTextInRect(toTip.action.name, this.x, this.y, .2*this.width, this.textHeight, {stroke:palette.normal, fill:palette.background});
			drawTextInRect(toTip.action.desc, this.x+.2*this.width, this.y, .6*this.width, this.textHeight, {stroke:palette.normal, fill:palette.background});
			drawTextInRect(toTip.action.cdMax+"CD", this.x+.8*this.width, this.y, .2*this.width, this.textHeight, {stroke:palette.normal, fill:palette.background});
		}
		super.draw();
	}
	actionClicked(butt) {
		if (this.parent.actionClicked(butt.action)) {
			this.selected = butt;
			this.buttons.forEach(b=>b.selected=b==butt);
		}
	}
	whatdo(butt) {
		this.parent.actionClicked(butt.action)
	}
}

class CombatActionPaletteButton extends UIObject {
	constructor(action, index, parent) {
		super();
		this.action = action;
		this.index = index;
		this.parent = parent;
		this.image = getSkillImage(this.action.skillID);
	}
	resize(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
	update() {
		super.update();
		if (this.hovered) {
			hovered = true;
			this.parent.actionHovered(this);
		}
		if (this.clicked) {
			this.parent.actionClicked(this);
		}
	}
	draw() {
		drawImageInRect(this.image, this.x, this.y, this.width, this.height);
		if (this.action.isReady()) {
			
		} else {
			ctx.globalAlpha = .5;
			this.fill(palette.disabled);
			ctx.globalAlpha = 1;
			if (this.action.cd) {
				drawTextInRect(this.action.cd, this.x, this.y, this.width, this.height, {stroke:palette.normal, fill:palette.background});
			}
		}
		this.stroke(this.selected ? palette.click : this.hovered ? palette.hover : palette.normal);
		//console.log(this.x, this.y, this.width, this.height);
	}
}

function testCombat() {
	enterCombatH2H({
		enemies : [new EnemyPunchingBag(10)],
	});
}

class CombatUnitPanel extends UIObject {
	constructor(unit) {
		super();
		this.unit = unit;
	}
	update() {
		
	}
	draw() {
		
	}
	getInitiative() {
		return this.unit.getInitiative(this.selectedAction);
	}
	getHit(hit) {
		this.unit.takeDamage(hit.damage);
	}
}

class CombatEnemyPanel extends CombatUnitPanel {
	constructor(unit) {
		super(unit);
		this.drawer = new (this.unit.drawerCons)(this);
		this.hpBar = new CombatHPBar(this.unit)
	}
	resize(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.hpBar.resize(this.x, this.y+this.height-35, this.width, 35);
	}
	update() {
		
	}
	draw() {
		this.drawer.draw();
		this.hpBar.draw(canPlayerReadStat(STAT_HP_MAX));
		//this.stroke(palette.normal);
	}
	chooseTurn(battle) {
		var blut = this.unit.chooseTurn(battle);
		this.selectedAction = blut.action;
		this.selectedTarget = battle.getPanelFor(blut.target) || this;
	}
}
CombatEnemyPanel.prototype.team = TEAM_ENEMIES;

class CombatPlayerPanel extends CombatUnitPanel {
	constructor(unit) {
		super(unit);
		this.hpBar = new CombatHPBar(this.unit);
	}			
	resize(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.hpBar.resize(this.x, this.y+this.height/3, this.width, this.height/3);
	}
	update() {
		
	}
	draw() {
		this.stroke(palette.normal);
		drawTextInRect(this.unit.name, this.x, this.y, this.width, this.height/3, {fill:palette.normal});
		//ctx.fillRect(this.x, this.y+this.height/3, this.width*this.unit.hpPortion(), this.height/3);
		this.hpBar.draw();
	}
}
CombatPlayerPanel.prototype.team = TEAM_PLAYERS;

class CombatHPBar {
	constructor(unit) {
		this.unit = unit;
	}
	resize(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
	draw(numbers = true) {
		ctx.fillStyle = "#000000";
		ctx.fillRect(this.x, this.y, this.width, this.height);
		ctx.fillStyle = "#FF0000";
		if (this.unit.hp > 0)
			ctx.fillRect(this.x, this.y, this.width*this.unit.hpPortion(), this.height);
		if (numbers)
			drawTextInRect(this.unit.hp+"/"+this.unit.hpMax, this.x, this.y, this.width, this.height, {fill:"#FFFFFF"});
	}
}


class CombatUnitTargeter extends UIObject {
	constructor(panel, parent, user) {
		super();
		this.panel = panel;
		this.parent = parent;
		if (user.selectedAction) {
			this.predictedDamage = user.selectedAction.calculateDamage(this.parent, user.unit, this.panel.unit);
			this.predictedHitrate = user.selectedAction.calculateHitrate(this.parent, user.unit, this.panel.unit);
		}
		this.hitrate = 
		this.resize();
	}
	resize() {
		this.x = this.panel.x;
		this.y = this.panel.y;
		this.width = this.panel.width;
		this.height = this.panel.height;
	}
	update() {
		super.update();
		if (this.hovered)
			hovered = true;
		if (this.clicked)
			this.parent.targetClicked(this.panel);
	}
	draw() {
		this.fill("#FF000040");
		this.stroke("#FF0000");
		drawTextInRect(asPercent(this.predictedHitrate), this.x, this.y+this.height/2-40, this.width, 40, {fill:palette.background});
		drawTextInRect(this.predictedDamage, this.x, this.y+this.height/2, this.width, 40, {fill:palette.background});
	}
}
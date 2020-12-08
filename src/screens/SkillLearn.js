class SkillMenu extends GameMenu {
	constructor(rightMenu) {
		super(rightMenu);
		this.submenu = new SkillTreeMenu(this);
		this.tabs = new Tabs([
			{cons:SkillTreeMenu, id:"tree", name:"Learn"},
			{cons:SkillEquipMenu, id:"equip", name:"Equip"},
			//{cons:SkillequipMenu, id:"equip", name:"Equip"},
		], dat=>this.tabClicked(dat), dat=>this.tabHighlight(dat));
		this.changeSubmenu(SkillTreeMenu);
		//this.resize();
	}
	resize() {
		this.mainWidth = super.resize();
		this.tabHeight = 64;
		this.tabs.resize(0, 0, this.mainWidth, this.tabHeight);
		this.submenu.resize(this.mainWidth, this.tabHeight);
	}
	update() {
		super.update();
		this.tabs.update();
		this.submenu.update();
	}
	draw() {
		super.draw();
		this.tabs.draw();
		this.submenu.draw();
	}
	tabClicked(dat) {
		this.changeSubmenu(dat.cons);
	}
	tabHighlight(dat) {
		return (this.submenu instanceof dat.cons || dat.id == "tree" && this.submenu instanceof SkillLearnMenu);
	}
	changeSubmenu(cons, ...a) {
		this.submenu = new (cons)(this, ...a);
		this.resize();
	}
	goToLearn(skillID) {
		this.changeSubmenu(SkillLearnMenu, skillID);
	}
}

class SkillLearnMenu extends UIObject {
	constructor(parent, skillID) {
		super();
		this.parent = parent;
		this.skillID = skillID;
		this.skillData = SKILL_DATA[this.skillID];
		this.known = playerSkillKnown(this.skillID);
		this.maxed = this.known >= this.skillData.maxLevel;
		this.cost = this.skillData.costs[this.known];
		this.prereqsMet = playerSkillPrereqsMet(this.skillID);
		this.learnButton = new Button(this.known ? "Upgrade Skill" : "Learn Skill", ()=>this.tryLearn());
		this.learnButton.active = !this.maxed && this.prereqsMet && data.player.inspiration >= this.cost;
		if (this.skillData.combatActions) {
			if (this.skillData.combatActions[this.known-1]) {
				this.actionNow = new (this.skillData.combatActions[this.known-1])();
				this.actionDetailsNow = new CombatActionDetails(this.actionNow);
			}
			if (this.skillData.combatActions[this.known]) {
				this.actionNext = new (this.skillData.combatActions[this.known])();
				this.actionDetailsNext = new CombatActionDetails(this.actionNext);
			}
		}
		this.prereqCells = this.maxed ? [] : this.skillData.prereqs[this.known].map(rekt=>new SkillLearnPrereqCell(rekt, this));
	}
	resize(mainWidth, y) {
		/**
		title: 10%
		flavor: 20%
		utility: 20%
		combat: 30%
		cost: 20%
		*/
		this.width = mainWidth;
		this.y = y;
		this.height = canvas.height-y;
		this.x = 0;
		var prereqHeightEach = Math.min(40, this.height*.2/this.prereqCells.length);
		this.prereqCells.forEach((pr, i)=>pr.resize(this.x, this.y+this.width*.8+prereqHeightEach*i, this.width/3, prereqHeightEach));
		if (this.actionDetailsNow)
			this.actionDetailsNow.resize(this.x, this.y+this.height*.5, this.width/2, this.height*.3);
		if (this.actionDetailsNext)
			this.actionDetailsNext.resize(this.x+this.width/2, this.y+this.height*.5, this.width/2, this.height*.3);
		this.costX = this.x+this.width*3/4;
		this.costY = this.y+this.height*.85;
		this.costWidth = this.width/4;
		this.costHeight = this.height*.05;
		this.learnButton.resize(this.costX+10, this.y + this.height*.9+10, this.costWidth-20, this.height*.1-20);
	}
	update() {
		super.update();
		this.prereqCells.forEach(pr=>pr.update());
		this.learnButton.update();
		if (this.clicked && !this.learnButton.clicked && !this.prereqCells.find(c=>c.clicked)) {
			this.parent.changeSubmenu(SkillTreeMenu, this.skillData.subcategory);
		}
	}
	draw() {
		drawTextInRect(this.skillData.name, this.x, this.y, this.width, this.height*.1, {fill:palette.normal});
		drawParagraphInRect(this.skillData.flavor, this.x+5, this.y+this.height*.1, this.width-10, this.height*.2, 28);
		//drawParagraphInRect(this.skillData.
		this.prereqCells.forEach(pr=>pr.draw());
		this.learnButton.draw();
		if (this.actionDetailsNow)
			this.actionDetailsNow.draw();
		if (this.actionDetailsNext)
			this.actionDetailsNext.draw();
		if (this.cost) {
			drawTextInRect(data.player.inspiration, this.costX, this.costY, this.costWidth/2, this.costHeight);
			drawTextInRect("/", this.costX, this.costY, this.costWidth, this.costHeight);
			drawTextInRect(this.cost, this.costX+this.costWidth/2, this.costY, this.costWidth/2, this.costHeight);
		}
		/*if (this.known < this.skillData.maxLevel) {
			drawTextInRect("Level "+(this.known+1), this.x+this.width/2, this.y + this.height/3 - 50, this.width/2, 45);
			drawParagraphInRect(this.skillData.vnDescs[this.known], this.x+this.width/2+5, this.y + this.height/3, this.width/2-10, this.height/6, 24);
			drawParagraphInRect(this.skillData.rpgDescs[this.known], this.x+this.width/2+5, this.y + this.height/2, this.width/2-10, this.height/6, 24);
			drawTextInRect("Cost: "+this.skillData.costs[this.known]+" Inspiration", this.x, this.y + this.height - 50, this.width/2, 40, {align:"left"});
		} else {
			drawTextInRect("Max Level", this.x+this.width/2, this.y + this.height/3 - 50, this.width/2, 45);
			drawParagraphInRect("You have reached the maximum level in this skill.", this.x+this.width/2+5, this.y + this.height/3, this.width/2-10, this.height/3, 24);
		}*/
		this.learnButton.draw();
	}
	tryLearn() {
		console.log(this.skillID);
		data.player.inspiration -= this.cost;
		playerLearnSkill(this.skillID);
		this.parent.goToLearn(this.skillID);
	}
}

class SkillLearnPrereqCell extends UIObject {
	constructor(prereq, parent) {
		super();
		this.prereq = prereq;
		this.parent = parent;
		this.met = playerSkillPrereqMet(this.prereq, this.parent.skillID);
		switch (this.prereq.type) {
			case "skill":
				this.text = SKILL_DATA[this.prereq.skill].name + " " + (this.prereq.level || 0);
				this.clickable = true;
				break;
		}
	}
	resize(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
	update() {
		super.update();
		if (this.clickable) {
			if (this.hovered)
				hovered = true;
			if (this.clicked) {
				this.parent.parent.goToLearn(this.prereq.skill);
			}
		}
	}
	draw() {
		drawTextInRect(this.text, this.x, this.y, this.width, this.height, {fill:(this.clickable&&this.hovered)?palette.hover:palette.normal});
	}
}

class CombatActionDetails extends UIObject {
	constructor(action) {
		super();
		if (action)
			this.setAction(action);
	}
	setAction(action) {
		this.action = action;
		this.lines = [];
		//if (this.action.initiative) {
			this.lines.push({label:"Initiative", value:asPercent(this.action.initiative)});
		//}
		if (this.action.baseHitrate && this.action.baseHitrate < 1.0) {
			this.lines.push({label:"Hitrate", value:asPercent(this.action.baseHitrate)});
		}
		if (this.action.attribute) {
			this.lines.push({label:"Attribute", value:this.action.attribute});
		}
		if (this.action.power) {
			this.lines.push({label:"Power", value:this.action.power});
		}
		this.paragraph = this.lines.map(l=>l.label+": "+l.value).join(" <br> ");
	}
	resize(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
	update() {
		
	}
	draw() {
		if (!this.action)
			return;
		ctx.fillStyle = palette.normal;
		drawTextInRect(this.action.name, this.x, this.y, this.width, this.height/5);
		drawParagraphInRect(this.paragraph, this.x, this.y+this.height/5, this.width, this.height, 24);
	}
}
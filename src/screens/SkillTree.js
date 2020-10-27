class SkillTreeMenu extends GameMenu {
	constructor(rightMenu) {
		super(rightMenu);
		this.tabsSubcategory = new SkillTreeTabs(this);
		this.skillPanels = [];
		this.learnButton = new Button("Learn Skill", ()=>this.tryLearn());
		this.resize();
	}
	resize() {
		this.mainWidth = super.resize();
		this.tabHeight = Math.max(Math.min(128, this.mainWidth/SKILL_SUBCATEGORIES.length), 64);
		this.tabsSubcategory.resize(0, 0, this.mainWidth, this.tabHeight);
		var maxX = Math.max(...this.skillPanels.map(s=>s.data.treex));
		var maxY = Math.max(...this.skillPanels.map(s=>s.data.treey));
		this.skillPanels.forEach(s=>s.resize(this, maxX, maxY));
		this.popupX = 50;
		this.popupY = this.tabHeight*2+50;
		this.popupWidth = this.mainWidth-100;
		this.popupHeight = canvas.height - this.popupY - 50;
		this.learnButton.resize(this.popupX + this.popupWidth - 180, this.popupY + this.popupHeight - 60, 170, 50);
	}
	update() {
		super.update();
		if (this.selected) {
			this.learnButton.update();
			if (!this.learnButton.clicked && mouse.clicked) {
				this.selected = null;
			}
		} else {
			this.tabsSubcategory.update();
			this.skillPanels.forEach(s=>s.update());
		}
	}
	draw() {
		super.draw();
		this.tabsSubcategory.draw();
		this.skillPanels.forEach(s=>s.draw());
		if (this.selected) {
			ctx.fillStyle = "#20202080";
			ctx.fillRect(0, this.tabHeight, this.mainWidth, canvas.height-this.tabHeight);
			ctx.fillStyle = palette.background;
			ctx.fillRect(this.popupX, this.popupY, this.popupWidth, this.popupHeight);
			ctx.fillStyle = palette.normal;
			drawTextInRect(this.selected.name, this.popupX, this.popupY, this.popupWidth, 50);
			drawParagraphInRect(this.selected.flavor, this.popupX+5, this.popupY+55, this.popupWidth-10, this.popupHeight/3 - 55, 28);
			if (this.known) {
				drawTextInRect("Level "+this.known, this.popupX, this.popupY + this.popupHeight/3 - 50, this.popupWidth/2, 45);
				drawParagraphInRect(this.selected.vnDescs[this.known-1], this.popupX+5, this.popupY + this.popupHeight/3, this.popupWidth/2-10, this.popupHeight/6, 24);
				drawParagraphInRect(this.selected.rpgDescs[this.known-1], this.popupX+5, this.popupY + this.popupHeight/2, this.popupWidth/2-10, this.popupHeight/6, 24);
			} else {
				drawTextInRect("Not Learned", this.popupX, this.popupY + this.popupHeight/3 - 50, this.popupWidth/2, 45);
				drawParagraphInRect("Prerequisites: <br> "+(this.selected.prereqs?this.selected.prereqs.map(pr=>SKILL_DATA[pr.skill].name+" "+pr.level).join(" <br> "):"None"), this.popupX, this.popupY + this.popupHeight/3, this.popupWidth/2-5, this.popupHeight/3, 24);
			}
			if (this.known < this.selected.maxLevel) {
				drawTextInRect("Level "+(this.known+1), this.popupX+this.popupWidth/2, this.popupY + this.popupHeight/3 - 50, this.popupWidth/2, 45);
				drawParagraphInRect(this.selected.vnDescs[this.known], this.popupX+this.popupWidth/2+5, this.popupY + this.popupHeight/3, this.popupWidth/2-10, this.popupHeight/6, 24);
				drawParagraphInRect(this.selected.rpgDescs[this.known], this.popupX+this.popupWidth/2+5, this.popupY + this.popupHeight/2, this.popupWidth/2-10, this.popupHeight/6, 24);
				drawTextInRect("Cost: "+this.selected.costs[this.known]+" Inspiration", this.popupX, this.popupY + this.popupHeight - 50, this.popupWidth/2, 40, {align:"left"});
			} else {
				drawTextInRect("Max Level", this.popupX+this.popupWidth/2, this.popupY + this.popupHeight/3 - 50, this.popupWidth/2, 45);
				drawParagraphInRect("You have reached the maximum level in this skill.", this.popupX+this.popupWidth/2+5, this.popupY + this.popupHeight/3, this.popupWidth/2-10, this.popupHeight/3, 24);
			}
			this.learnButton.draw();
		}
		drawTextInRect("Inspiration: " + data.player.inspiration, 0, this.tabHeight, this.mainWidth*3/8, 50, {align:"left", fill:palette.background, stroke:palette.normal});
		if (this.subcat) {
			drawTextInRect(this.subcat.name, this.mainWidth*3/8, this.tabHeight, this.mainWidth/4, 50, {fill:palette.background, stroke:palette.normal});
		}
	}
	setSubcategory(dat) {
		this.subcat = dat;
		this.refreshSkillPanels();
	}
	refreshSkillPanels() {
		this.skillPanels = SKILLS_BY_SUBCATEGORY[this.subcat.id].map(dap=>new SkillTreePanel(dap,this));
		this.skillPanels.forEach(s=>s.findOthers(this.skillPanels));
		this.resize();
	}
	skillClicked(dat) {
		this.selected = dat;
		this.known = playerSkillKnown(this.selected.id);
		this.learnButton.text = this.known ? "Upgrade Skill" : "Learn Skill";
		this.prereqsMet = this.known || playerSkillPrereqsMet(this.selected.id);
		this.learnButton.active = this.prereqsMet && data.player.inspiration >= this.selected.costs[this.known];
	}
	tryLearn() {
		data.player.inspiration -= this.selected.costs[this.known];
		data.player.skills[this.selected.id] = this.known + 1;
		this.selected = null;
		this.refreshSkillPanels();
	}
}

class SkillLearnSubmenu {
	constructor() {
		
	}
	update() {
		
	}
	draw() {
		
	}
}

class SkillTreePanel extends UIObject {
	constructor(data, parent) {
		super();
		this.id = data.id;
		this.data = data;
		this.parent = parent;
		this.known = playerSkillKnown(this.id);
		this.image = makeImage("src/images/skills/"+this.id+".png");
	}
	findOthers(list) {
		this.others = list;
	}
	resize(parent, maxX, maxY) {
		this.x = parent.mainWidth * this.data.treex / (maxX+1) - 50;
		this.y = parent.tabHeight*2 + 50 + (canvas.height - parent.tabHeight * 2 - 100) * this.data.treey / (maxY+1) - 50;
		this.width = 100;
		this.height = 100;
	}
	update() {
		this.updateMouse();
		if (this.hovered)
			hovered = true;
		if (this.clicked) {
			this.parent.skillClicked(this.data);
		}
	}
	draw() {
		this.fill(this.known ? "#FFFFFF" : "#404040");
		drawImageInRect(this.image, this.x, this.y, this.width, this.height);
		ctx.strokeStyle = this.clicked ? palette.click : this.hovered ? palette.hover : palette.normal;
		this.stroke();
	}
}

class SkillTreeTabs extends UIObject {
	constructor(parent) {
		super();
		this.tabs = SKILL_SUBCATEGORIES.map(subcat=>new SkillTreeTab(subcat, this));
		this.parent = parent;
	}
	resize(x, y, width, height) {
		var widthEach = width / this.tabs.length;
		this.tabs.forEach((t, i) => t.resize(x+i*widthEach, y, widthEach, height));
	}
	tabClicked(tab) {
		this.parent.setSubcategory(tab.subcat);
	}
	update() {
		this.tabs.forEach(t=>t.update());
	}
	draw() {
		this.tabs.forEach(t=>t.draw());
	}
}

class SkillTreeTab extends UIObject {
	constructor(subcat, parent) {
		super();
		this.subcat = subcat;
		this.image = makeImage("src/images/learn/"+subcat.id+".png");
		this.parent = parent;
	}
	resize(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
	update() {
		super.update();
		if (this.hovered)
			hovered = true;
		if (this.clicked) {
			this.parent.tabClicked(this);
		}
	}
	draw() {
		drawImageInRect(this.image, this.x, this.y, this.width, this.height);
		if (this.parent.parent.subcat && this.parent.parent.subcat.id == this.subcat.id) {
			ctx.strokeStyle = palette.click;
			this.stroke();
		}
	}
}
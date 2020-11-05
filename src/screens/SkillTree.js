class SkillTreeMenu {
	constructor(parent, subcat) {
		//super();
		this.parent = parent;
		this.tabsSubcategory = new SkillTreeTabs(this);
		this.skillPanels = [];
		this.learnButton = new Button("Learn Skill", ()=>this.tryLearn());
		if (subcat)
			this.setSubcategory(subcat);
		//this.resize();
	}
	resize(mainWidth, y) {
		this.width = mainWidth;
		this.y = y;
		this.height = canvas.height-y;
		this.tabHeight = Math.max(Math.min(128, this.width/SKILL_SUBCATEGORIES.length), 64);
		this.fieldY = y + this.tabHeight;
		this.fieldHeight = canvas.height-this.fieldY;
		this.x = 0;
		this.tabsSubcategory.resize(0, this.y, this.width, this.tabHeight);
		this.resizeSkillPanels();
	}
	resizeSkillPanels() {
		var maxX = Math.max(...this.skillPanels.map(s=>s.data.treex));
		var maxY = Math.max(...this.skillPanels.map(s=>s.data.treey));
		this.skillPanels.forEach(s=>s.resize(this.x + this.width * s.data.treex / (maxX+1), this.fieldY + this.fieldHeight * s.data.treey / (maxY+1)));
		
	}
	update() {
		//super.update();
		this.tabsSubcategory.update();
		this.skillPanels.forEach(s=>s.update());
	}
	draw() {
		//super.draw();
		this.tabsSubcategory.draw();
		this.skillPanels.forEach(s=>s.draw());
		drawTextInRect("Inspiration: " + data.player.inspiration, 0, this.tabHeight, this.mainWidth*3/8, 50, {align:"left", fill:palette.background, stroke:palette.normal});
		if (this.subcat) {
			drawTextInRect(this.subcat.name, this.mainWidth*3/8, this.tabHeight, this.mainWidth/4, 50, {fill:palette.background, stroke:palette.normal});
		}
	}
	setSubcategory(dat) {
		if (typeof dat == "string")
			this.subcat = SKILL_SUBCATEGORY_DATA[dat];
		else
			this.subcat = dat;
		this.refreshSkillPanels();
	}
	refreshSkillPanels() {
		this.skillPanels = this.subcat.skills.map(dap=>new SkillTreePanel(dap,this));
		this.skillPanels.forEach(s=>s.findOthers(this.skillPanels));
		this.resizeSkillPanels();
	}
	skillClicked(dat) {
		this.parent.goToLearn(dat.id);
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
		this.maxed = this.known >= this.data.maxLevel;
		this.prereqsMet = playerSkillPrereqsMet(this.id);
		this.image = getSkillImage(this.id);
	}
	findOthers(list) {
		this.others = list;
	}
	resize(midX, midY) {
		this.width = 100;
		this.height = 100;
		this.x = midX - this.width/2;
		this.y = midY - this.height/2;
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
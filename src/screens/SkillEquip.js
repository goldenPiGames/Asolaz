const SKILL_SCROLL_SIZE = 128;

class SkillEquipMenu extends UIObject {
	constructor(parent) {
		super();
		this.parent = parent;
		this.scrollMenu = new SkillScrollMenu("player", t=>this.setFrom(t));
		this.detailsFrom = new CombatActionDetails();
		this.detailsReplace = new CombatActionDetails();
		this.palette = new ActionPalette(butt=>this.setReplace(butt));
		this.palette.setActions(data.player.actionsEquipped.map(t=>getPlayerSkillAction(t)));
	}
	resize(mainWidth, y) {
		this.width = mainWidth;
		this.y = y;
		this.height = canvas.height-y;
		this.x = 0;
		var paletteHeight = 128;
		var menuWidth = Math.floor(this.width/SKILL_SCROLL_SIZE*.4)*SKILL_SCROLL_SIZE+SCROLL_BAR_WIDTH;
		var menuHeight = Math.floor(this.height/SKILL_SCROLL_SIZE*2/3)*SKILL_SCROLL_SIZE;
		var detailsWidth = (this.width-menuWidth)/2;
		this.scrollMenu.resize(this.x, this.y, menuWidth, menuHeight);
		this.detailsFrom.resize(this.x+menuWidth, this.y, detailsWidth, menuHeight-100);
		this.detailsReplace.resize(this.x+menuWidth+detailsWidth, this.y, detailsWidth, menuHeight-100);
		this.palette.resize(this.x, this.y+this.height-paletteHeight, this.width, paletteHeight);
	}
	update() {
		this.scrollMenu.update();
		this.detailsFrom.update();
		this.detailsReplace.update();
		this.palette.update();
		//this.palette.
	}
	draw() {
		this.scrollMenu.draw();
		this.detailsFrom.draw();
		this.detailsReplace.draw();
		this.palette.draw();
	}
	setFrom(thing) {
		this.thingFrom = thing;
		this.detailsFrom.setAction(this.thingFrom.action);
	}
	setReplace(butt) {
		this.thingReplace = butt;
		this.detailsReplace.setAction(butt.action);
	}
}

function getAllPlayerCombatSkills() {
	return SKILL_ID_LIST.filter(id=>SKILL_DATA[id].combatActions&&playerSkillKnown(id));
}

class SkillScrollMenu extends UIObject {
	constructor(owner, whatdo) {
		super();
		this.owner = owner;
		this.whatdo = whatdo;
		this.elements = getAllPlayerCombatSkills().map(s=>new SkillScrollMenuElement(s, this));
		this.currentScroll = 0;
	}
	resize(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.sizeEach = SKILL_SCROLL_SIZE;
		this.numColumns = Math.floor(this.width/this.sizeEach);
		this.numRows = Math.floor(this.height/this.sizeEach);
		this.placeElements();
	}
	placeElements() {
		this.activeElements = this.elements.slice(this.currentScroll*this.numColumns, this.numColumns*this.numRows);
		this.activeElements.forEach((e, i)=>e.resize(this.x+this.sizeEach*(i%this.numColumns), this.y+this.sizeEach*Math.floor(i/this.numColumns), this.sizeEach));
	}
	update() {
		super.update();
		this.activeElements.forEach(e=>e.update());
	}
	draw() {
		this.activeElements.forEach(e=>e.draw());
	}
	thingClicked(thing) {
		this.whatdo(thing);
	}
}

class SkillScrollMenuElement extends UIObject {
	constructor(skillID, parent) {
		super();
		this.parent = parent;
		this.skillID = skillID;
		this.skillData = SKILL_DATA[this.skillID];
		this.known = playerSkillKnown(this.skillID);
		this.action = new (this.skillData.combatActions[this.known-1])();
		this.image = getSkillImage(this.skillID);
	}
	resize(x, y, size) {
		this.x = x;
		this.y = y;
		this.width = size;
		this.height = size;
	}
	update() {
		super.update();
		//console.log(this.hovered);
		if (this.hovered)
			hovered = true;
		if (this.clicked)
			this.parent.thingClicked(this);
	}
	draw() {
		drawImageInRect(this.image, this.x, this.y, this.width, this.height);
		this.stroke(this.hovered?palette.hover:palette.normal);
	}
}
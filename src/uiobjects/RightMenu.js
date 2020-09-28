const RIGHTMENU_LOCATION = [
	//{id:"wait", name:"Wait", func:manualAdvanceTime},
	//{id:"move", name:"Move", cons:MapMenu}
	{id:"people", name:"People", cons:PeopleMenu},
	{id:"learn", name:"Learn", cons:SkillTreeMenu},
	{id:"save", name:"Save", cons:SaveMenu},
	{id:"load", name:"Load", cons:LoadMenu},
	//{id:"settings", name:"Settings", cons:SettingsMenu},
];

const RIGHTMENU_VN = [
	{id:"people", name:"People", cons:PeopleMenu},
	{id:"load", name:"Load", cons:LoadMenu},
	//{id:"settings", name:"Settings", cons:SettingsSubscreen},
]
/*
Pass Time
Move
People
Learn
Items
Music
Save
Load
Settings
Return


People
Load
Settings
*/

class RightMenu {
	constructor(returnTo, list) {
		this.returnTo = returnTo;
		this.buttons = list.map((l, i)=>new RightMenuButton(l, i));
	}
	resize() {
		var heightEach = Math.min(canvas.height/this.buttons.length, 128);
		this.buttons.forEach((b, i) => b.resize(canvas.height - heightEach * (this.buttons.length - i), heightEach));
		this.x = canvas.width - heightEach;
	}
	update(from) {
		this.buttons.forEach(b=>b.update());
		var c = this.buttons.find(b=>b.clicked);
		if (c) {
			switchScreen(new (c.dat.cons)(this));
		} else if (mouse.rightClicked) {
			if (from == this.returnTo) {
				switchScreen(new PeopleMenu(this));
			} else {
				switchScreen(this.returnTo);
			}
		}
	}
	draw(from) {
		this.buttons.forEach(b=>b.draw());
	}
}

class RightMenuButton extends UIObject {
	constructor(dat) {
		super();
		this.dat = dat;
		this.image = makeImage("src/images/rightmenu/"+dat.id+".png");
	}
	resize(y, height) {
		this.x = canvas.width - height;
		this.y = y;
		this.width = height;
		this.height = height;
	}
	update() {
		super.update();
		if (this.hovered)
			hovered = true;
	}
	draw() {
		ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
		/*this.fill(palette.background);
		ctx.strokeStyle = this.hovered ? palette.hover : palette.normal;
		this.stroke();
		ctx.fillStyle = palette.normal;
		drawTextInRect(this.dat.name, this.x, this.y, this.width, this.height);*/
	}
}

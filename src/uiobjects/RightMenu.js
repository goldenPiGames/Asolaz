var rightMenuLastOpened = "load";

const RIGHTMENU_MAINMENU = {
	last : LoadMenu,
	list : [
		{id:"load", name:"Load", cons:LoadMenu},
		{id:"jukebox", name:"Jukebox", cons:JukeboxSubscreen},
		{id:"settings", name:"Settings", cons:SettingsMenu},
	],
}

const RIGHTMENU_LOCATION = {
	last : MapMenu,
	list : [
		//{id:"wait", name:"Wait", func:manualAdvanceTime},
		//{id:"move", name:"Move", cons:MapMenu}
		{id:"map", name:"Map", cons:MapMenu},
		{id:"people", name:"People", cons:PeopleMenu},
		{id:"learn", name:"Learn", cons:SkillMenu},
		//{id:"jukebox", name:"Jukebox", cons:JukeboxSubscreen},
		{id:"settings", name:"Settings", cons:SettingsMenu},
		{id:"saveload", name:"Save", cons:SaveLoadMenu},
	],
}

const RIGHTMENU_VN = {
	last : PeopleMenu,
	list : [
		{id:"people", name:"People", cons:PeopleMenu},
		{id:"load", name:"Load", cons:LoadMenu},
		//{id:"settings", name:"Settings", cons:SettingsSubscreen},
	],
}

const RIGHTMENU_LABYRINTH = {
	last : PeopleMenu,
	list : [
		//{id:"people", name:"People", cons:PeopleMenu},
		{id:"learn", name:"Learn", cons:SkillMenu},
		{id:"settings", name:"Settings", cons:SettingsMenu},
		{id:"load", name:"Load", cons:LoadMenu},
		//{id:"settings", name:"Settings", cons:SettingsSubscreen},
	],
}
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
	constructor(returnTo, dap) {
		this.returnTo = returnTo;
		this.dap = dap;
		this.buttons = dap.list.map((l, i)=>new RightMenuButton(l, i));
		this.returnButton = new RightMenuButton({id:"return"}, -1);
	}
	resize() {
		var heightEach = Math.min(canvas.height/(this.buttons.length+1), 128);
		this.returnButton.resize(0, heightEach);
		this.buttons.forEach((b, i) => b.resize(canvas.height - heightEach * (this.buttons.length - i), heightEach));
		this.x = canvas.width - heightEach;
		return (this.x);
	}
	update(from) {
		this.buttons.forEach(b=>b.update());
		var c = this.buttons.find(b=>b.clicked);
		if (c) {
			this.dap.last = c.dat.cons
			switchScreen(new (c.dat.cons)(this));
			return true;
		} else if (from == this.returnTo) {
			if (mouse.rightClicked) {
				switchScreen(new (this.dap.last)(this));
				return true;
			}
		} else {
			this.returnButton.update();
			if (mouse.rightClicked || this.returnButton.clicked) {
				switchScreen(this.returnTo);
				return true;
			}
		}
	}
	draw(from) {
		if (from != this.returnTo) {
			this.returnButton.draw(from);
		}
		this.buttons.forEach(b=>b.draw(from));
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
	draw(from) {
		ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
		/*this.fill(palette.background);
		ctx.strokeStyle = this.hovered ? palette.hover : palette.normal;
		this.stroke();
		ctx.fillStyle = palette.normal;
		drawTextInRect(this.dat.name, this.x, this.y, this.width, this.height);*/
		if (this.dat.cons && (from instanceof this.dat.cons)) {
			ctx.strokeStyle = palette.click;
			this.stroke();
		}
	}
}

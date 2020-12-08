class PeopleMenu extends GameMenu {
	constructor(rightMenu) {
		super(rightMenu);
		this.charMenu = new ScrollMenu(thing=>this.changePerson(thing.id), [
			{id:"player", name:data.player.name},
			...CHARACTER_LIST.map(id=>{return{
				id:id,
				name:CHARACTER_DATA[id].name,
			}}),
		]);
		this.charMenu.highlightProperty = val=>val.id==this.charID;
		this.resize();
		this.changePerson("player");
	}
	resize() {
		this.mainWidth = super.resize();
		this.swidth = 200;
		this.charMenu.resize(0, 0, this.swidth, canvas.height);
		//this.menuButton.resize(canvas.width - 200, canvas.height - 60, 190, 50);
	}
	update() {
		super.update();
		this.charMenu.update();
	}
	draw() {
		super.draw();
		this.charMenu.draw();
		drawParagraphInRect(this.paragraph, this.swidth, 0, canvas.width-this.swidth, canvas.height-this.swidth, 28);
	}
	changePerson(id) {
		this.charID = id;
		if (this.charID == "player") {
			this.charData = data.player;
			this.paragraph = processText("[pname] <br> Gender: [pgender|Male|Female|Non-binary] <br> Wake time: "+getWakeTimeLeft());
		} else {
			this.charData = data.characters[this.charID];
			this.paragraph = processText("[cname] <br> Gender: [cgender|Male|Female|Non-binary]", this.charID);
			//TODO block reading
			if (canTrackCharacter(this.charID)) {
				this.paragraph += " <br> Location: " + LOCATION_DATA[data.characters[this.charID].location].name;
			}
			if (playerSkillKnown(PARAM_DATA[parm].read))
				this.paragraph += " <br> " + PARAM_DATA[parm].name + ": " + getCharParam(this.charID, parm);
		}
	}
}
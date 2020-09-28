class MapScreen extends GameMenu {
	constructor(rightMenu) {
		super(rightMenu);
		this.menu = new ScrollMenu(thing=>this.thingClicked(thing), getLocationMenuList());
		this.resize();
	}
	update() {
		super.update();
		this.menu.update();
	}
	draw() {
		super.draw();
		this.menu.draw();
		drawTextUpperRight(getCornerTime(), getLocationName());
	}
	resize() {
		super.resize();
		var swidth = Math.max(300, canvas.width/4);
		this.menu.resize(0, 0, swidth, canvas.height);
	}
	thingClicked(thing) {
		changeLocation(thing.id);
		switchScreen(new LocationScreen());
	}
}
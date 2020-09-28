function returnToLocation() {
	//var tolog = getNotifications();
	//if (tolog.length > 0)
	//	switchScreen(new NotificationsScene(tolog));
	//else
		switchScreen(new LocationScreen());
}

class LocationScreen extends Screen {
	constructor() {
		super();
		this.location = data.location;
		this.people = whoIsAtLocation(this.location);
		this.menu = new ScrollMenu(thing=>this.thingClicked(thing), [
			...this.people.map(personTalkScroll),
			...getLocationPOIsScroll(),
			...getLocationRoomDoors(),
			//{name:"Go elsewhere", what:"leave"},
		]);
		this.rightMenu = new RightMenu(this, RIGHTMENU_LOCATION);
		//this.menuButton = new Button("Menu", ()=>this.openMenu());
		this.resize();
	}
	resize() {
		var swidth = Math.max(300, canvas.width/4);
		this.menu.resize(0, 0, swidth, canvas.height);
		this.rightMenu.resize();
		//this.menuButton.resize(canvas.width - 200, canvas.height - 60, 190, 50);
	}
	update() {
		this.rightMenu.update();
		this.menu.update();
	}
	draw() {
		this.rightMenu.draw();
		this.menu.draw();
		drawTextUpperRight(getCornerTime(), getLocationName());
	}
	thingClicked(thing) {
		switch (thing.what) {
			//case "leave": switchScreen(new MapScreen()); break;
			case "person": startConversation(thing.id); break;
			case "roomdoor": checkRoomDoor(thing.id); break;
			case "sleep": goToSleep(); break;
		}
	}
}

function personTalkScroll(dat) {
	//console.log(dat);
	/*if (dat.status.inRoom) {
		return {
			id : dat.id,
			what : "persondoor",
			name : "" + dat.name + "'s door",
		}
	} else {*/
	return {
		id : dat.id,
		what : "person",
		name : "Talk to " + dat.name,
	}
}
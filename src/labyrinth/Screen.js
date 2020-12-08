class LabyrinthScreen extends Screen {
	constructor(labyrinthID) {
		super();
		requireSFX("encounter");
		this.rightMenu = new RightMenu(this, RIGHTMENU_LABYRINTH);
		this.party = [new CombatPlayer()];
		this.labyrinthID = labyrinthID;
		this.labyrinthData = LABYRINTH_DATA[this.labyrinthID];
		this.resize();
		this.goToFloor(this.labyrinthData.startDepth, this.labyrinthData.startFloorType);
		//this.fightButton = new Button("fight", ()=>this.doRandomEncounter());
	}
	resize() {
		this.rightMenu.resize();
		//this.fightButton.resize(canvas.width-300, 200, 200, 40);
		if (this.floor)
			this.floor.resize();
		//this.
	}
	update() {
		if (!this.rightMenu.update(this)) {
			this.floor.update();
		}
		//this.fightButton.update();
	}
	draw() {
		this.floor.draw();
		this.rightMenu.draw(this);
		drawTextInRect(this.labyrinthData.name, 0, 0, 200, 40, {stroke:palette.normal, fill:palette.background});
		drawTextInRect(this.floor.name, 0, 40, 200, 40, {stroke:palette.normal, fill:palette.background});
		drawTextInRect(this.depth, 0, 80, 200, 40, {stroke:palette.normal, fill:palette.background});
		//this.fightButton.draw(this);
	}
	useStairs(poi) {
		this.goToFloor(this.depth+poi.depth, poi.floorType);
	}
	goToFloor(depth, floorType) {
		this.depth = depth;
		var floorData = this.labyrinthData.floorTypeData[floorType];
		var stairs = floorData.next.filter(s=>Math.random()<s.baseChance).map(d=>new LabyrinthStairs(d));
		this.floor = new (floorData.cons)(this.depth, this, this.floor, stairs);
		playMusicFromStart(this.floor.music);
		this.floor.resize();
	}
	doTurn() {
		this.party.forEach(p=>p.turnField());
		this.floor.doTurn();
	}
	doEncounter(coun) {
		enterCombatH2H({
			afterWin : ()=>this.returnFromEncounter(),
			afterLose : escapeDungeon,
			players : this.party,
			enemies : coun.enemies,
			music : coun.music,
		});
	}
	returnFromEncounter() {
		switchScreen(this);
		playMusicFromLeftOff(this.floor.music);
	}
}

class LabyrinthStairs {
	constructor(dats) {
		for (var nyo in dats) {
			this[nyo] = dats[nyo];
		}
	}
	setPlace(a0, a1) {
		if (a0 == undefined) {
			throw ("invalid location set?");
		} if (typeof a0 == "number") {
			this.gridX = a0;
			this.gridY = a1;
		} else {
			this.gridX = a0.gridX;
			this.gridY = a0.gridY;
		}
	}
}
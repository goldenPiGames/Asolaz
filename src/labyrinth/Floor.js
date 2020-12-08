class LabyrinthFloor {
	constructor(depth, screen, previous, stairs) {
		this.depth = depth;
		this.screen = screen;
		this.previous = previous;
		if (this.previous)
			this.previous.previous = null;
		this.stairs = stairs;
		this.justMoved = true;
		this.totalRandomEncounters = 0;
		//this.tilifyGrid();
	}
	resize() {
		this.mainWidth = this.screen.rightMenu.x;
		this.mainHeight = canvas.height;
		this.adjustCamera();
	}
	adjustCamera() {
		this.scale = 60;
		this.offsetX = this.scale*this.party.gridX-this.mainWidth/2;
		this.offsetY = this.scale*this.party.gridY-this.mainHeight/2;
		//this.scale = Math.max(120, Math.min(100, this.mainWidth/this.grid.length, canvas.height/this.grid[0].length));
		this.grid.forEach2d((tile, i, j)=>tile.resize((i-.5)*this.scale-this.offsetX, (j-.5)*this.scale-this.offsetY, this.scale));
	}
	update() {
		this.grid.forEach2d((tile, i, j)=>tile.update(mouse.x < this.mainWidth));
		if (!this.justMoved) {
			if (isHotkeyPressed("interact"))
				this.tryPOI(this.party.tile);
			else if (isHotkeyPressed("up"))
				this.tryMoveTo(this.party.gridX, this.party.gridY-1);
			else if (isHotkeyPressed("down"))
				this.tryMoveTo(this.party.gridX, this.party.gridY+1);
			else if (isHotkeyPressed("left"))
				this.tryMoveTo(this.party.gridX-1, this.party.gridY);
			else if (isHotkeyPressed("right"))
				this.tryMoveTo(this.party.gridX+1, this.party.gridY);
		}
		if (this.justMoved) {
			this.updateFogOfWar();
			this.adjustCamera();
			this.justMoved = false;
		}
	}
	getTile(i, j) {
		if (i < 0 || i >= this.grid.length || j < 0 || j >= this.grid[i].length)
			return undefined;
		return this.grid[i][j];
	}
	draw() {
		ctx.imageSmoothingEnabled = false;
		this.grid.forEach((col, i)=>col.forEach((tile, j)=>tile.draw()));
		ctx.imageSmoothingEnabled = true;
		ctx.globalAlpha = 1;
		this.party.draw();
	}
	tileClicked(tile) {
		if (tile == this.party.tile)
			this.tryPOI(tile);
		else
			this.tryMoveTo(tile)
	}
	tryMoveTo(tile, y) {
		if (this.justMoved)
			return;
		if (typeof tile == "number") {
			if (!this.grid[tile])
				return false;
			tile = this.grid[tile][y];
		}
		if (!tile)
			return false;
		//console.log(tile);
		if (!tile.isWalkable())
			return false;
		var xdif = tile.gridX-this.party.gridX;
		var ydif = tile.gridY-this.party.gridY;
		if (Math.abs(xdif) <= 1 && Math.abs(ydif) <= 1) {
			if (!xdif || !ydif || this.grid[tile.gridX][this.party.gridY].isCuttable() && this.grid[this.party.gridX][tile.gridY].isCuttable()) {
				this.party.moveTo(tile);
				this.justMoved = true;
				this.screen.doTurn();
				return true;
			}
		}
	}
	tryPOI(tile) {
		if (!tile.poi)
			return false;
		switch (tile.poi.type) {
			case "stairs": this.screen.useStairs(tile.poi);
		}
	}
	doTurn() {
		this.checkRandomEncounter();
	}
	checkRandomEncounter() {
		this.encounterTimer--;
		if (this.encounterTimer <= 0) {
			this.totalRandomEncounters++;
			this.screen.doEncounter(this.getRandomEncounter());
			this.setEncounterTimer();
		}
	}
	setEncounterTimer() {
		this.encounterTimer = this.baseEncounterTimer + this.totalRandomEncounters*2;
		//console.log(this.encounterTimer, this.baseEncounterTimer);
	}
	getRandomEncounter() {
		var coun = this.baseEncounterTable.filter(a=>{
				if (a.minDepth)
					return false;
				return true;
			}).randomTerm();
		return  {
			enemies : coun.enemies.map(e=>new (e.cons)(Math.floor(this.depth*(e.levelMult||1)))),
			music : coun.music,
		}
	}
	numberGrid() {
		this.grid.forEach((col, i)=>col.forEach((tile, j)=>{
			tile.gridX = i;
			tile.gridY = j;
		}));
	}
}
LabyrinthFloor.prototype.tileset = "test";

class LabyrinthPartyLocation {
	constructor(tile) {
		this.moveTo(tile);
		this.meeple = makeImage("src/images/characters/player/meeple/normal.png");
	}
	draw() {
		drawImageInRect(this.meeple, this.tile.x, this.tile.y, this.tile.width, this.tile.height);
	}
	moveTo(tile) {
		this.tile = tile;
		this.gridX = tile.gridX;
		this.gridY = tile.gridY;
	}
}

class LabyrinthTile extends UIObject {
	constructor(gridX, gridY, yargs, parent) {
		super();
		for (var pew in yargs) {
			this[pew] = yargs[pew];
		}
		this.gridX = gridX;
		this.gridY = gridY;
		this.parent = parent;
	}
	setNeighbors() {
		if (!this.tileset)
			this.tileset = this.parent.tileset;
		this.sprites = getSpriteSheet("tilesets/"+this.tileset);
		this.neighborUp = this.parent.getTile(this.gridX, this.gridY-1);
		this.neighborDown = this.parent.getTile(this.gridX, this.gridY+1);
		this.neighborLeft = this.parent.getTile(this.gridX-1, this.gridY);
		this.neighborRight = this.parent.getTile(this.gridX+1, this.gridY);
		this.neighborUpLeft = this.parent.getTile(this.gridX-1, this.gridY-1);
		this.neighborUpRight = this.parent.getTile(this.gridX+1, this.gridY-1);
		this.neighborDownLeft = this.parent.getTile(this.gridX-1, this.gridY+1);
		this.neighborDownRight = this.parent.getTile(this.gridX+1, this.gridY+1);
		this.solidUp = !this.neighborUp || this.neighborUp.wall;
		this.solidDown = !this.neighborDown || this.neighborDown.wall;
		this.solidLeft = !this.neighborLeft || this.neighborLeft.wall;
		this.solidRight = !this.neighborRight || this.neighborRight.wall;
		this.solidUpLeft = !this.neighborUpLeft || this.neighborUpLeft.wall;
		this.solidUpRight = !this.neighborUpRight || this.neighborUpRight.wall;
		this.solidDownLeft = !this.neighborDownLeft || this.neighborDownLeft.wall;
		this.solidDownRight = !this.neighborDownRight || this.neighborDownRight.wall;
		if (this.wall) {
			this.cornerUL = this.solidLeft ? this.solidUp ? this.solidUpLeft ? "full" : "both" : "horz" : this.solidUp ? "vert" : "corn";
			this.cornerUR = this.solidRight ? this.solidUp ? this.solidUpRight ? "full" : "both" : "horz" : this.solidUp ? "vert" : "corn";
			this.cornerDL = this.solidLeft ? this.solidDown ? this.solidDownLeft ? "full" : "both" : "horz" : this.solidDown ? "vert" : "corn";
			this.cornerDR = this.solidRight ? this.solidDown ? this.solidDownRight ? "full" : "both" : "horz" : this.solidDown ? "vert" : "corn";
		}
	}
	resize(x, y, size) {
		this.x = x;
		this.y = y;
		this.width = size;
		this.height = size;
	}
	update(inPane) {
		super.update();
		if (!inPane) {
			this.hovered = false;
			this.clicked = false;
			this.held = false;
		}
		if (this.hovered && this.fowEver)
			hovered = true;
		if (this.clicked) {
			this.parent.tileClicked(this);
		}
	}
	draw() {
		if (!this.fowEver)
			return true;
		this.setFowAlpha();
		if (!this.wall) {
			this.sprites.drawSprite("floor", this.x, this.y, this.width, this.height);
		} else {
			if (this.fowUL)
				this.sprites.drawSprite("wall_ul_"+this.cornerUL, this.x, this.y, this.width/2, this.height/2);
			if (this.fowUR)
				this.sprites.drawSprite("wall_ur_"+this.cornerUR, this.x+this.width/2, this.y, this.width/2, this.height/2);
			if (this.fowDL)
				this.sprites.drawSprite("wall_dl_"+this.cornerDL, this.x, this.y+this.height/2, this.width/2, this.height/2);
			if (this.fowDR)
				this.sprites.drawSprite("wall_dr_"+this.cornerDR, this.x+this.width/2, this.y+this.height/2, this.width/2, this.height/2);
		}
		if (this.stairs)
			this.fill("#F0F0F0");
	}
	setFowAlpha() {
		ctx.globalAlpha = this.fowNow ? 1 : this.fowEver ? 0.5 : 0.05;
	}
	isWalkable() {
		return !this.wall;
	}
	isCuttable() {
		return !this.wall;
	}
	blocksLight() {
		return this.wall;
	}
	fowPre() {
		this.fowNow = 0;
	}
	fowSee() {
		this.fowNow = 1;
		this.fowEver = Math.max(this.fowEver, 1);
		//console.log(this.fowEver);
	}
	fowStand() {
		this.fowNow = 2;
		this.fowEver = 2;
	}
	fowPost() {
		this.visibleUp = this.neighborUp && this.neighborUp.fowEver;
		this.visibleDown = this.neighborDown && this.neighborDown.fowEver;
		this.visibleLeft = this.neighborLeft && this.neighborLeft.fowEver;
		this.visibleRight = this.neighborRight && this.neighborRight.fowEver;
		this.visibleUpLeft = this.neighborUpLeft && this.neighborUpLeft.fowEver;
		this.visibleUpRight = this.neighborUpRight && this.neighborUpRight.fowEver;
		this.visibleDownLeft = this.neighborDownLeft && this.neighborDownLeft.fowEver;
		this.visibleDownRight = this.neighborDownRight && this.neighborDownRight.fowEver;
		this.fowUL = this.visibleUp && this.visibleLeft && this.visibleUpLeft || this.visibleUp && !this.solidUp && this.visibleLeft && !this.solidLeft;
		this.fowUR = this.visibleUp && this.visibleRight && this.visibleUpRight || this.visibleUp && !this.solidUp && this.visibleRight && !this.solidRight;
		this.fowDL = this.visibleDown && this.visibleLeft && this.visibleDownLeft || this.visibleDown && !this.solidDown && this.visibleLeft && !this.solidLeft;
		this.fowDR = this.visibleDown && this.visibleRight && this.visibleDownRight || this.visibleDown && !this.solidDown && this.visibleRight && !this.solidRight;
	}
	putStairs(dap) {
		this.poi = {type:"stairs"}
		for (var nom in dap) {
			this.poi[nom] = dap[nom];
		}
		this.stairs = this.poi;
	}
}
LabyrinthTile.prototype.fowEver = 0;
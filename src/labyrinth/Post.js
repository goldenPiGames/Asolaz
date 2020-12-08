LabyrinthFloor.prototype.finalize = function() {
	this.finalizeGrid();
	this.finalizeTerminals();
	this.party = new LabyrinthPartyLocation(this.startTile);
	this.setEncounterTimer();
}
LabyrinthFloor.prototype.finalizeGrid = function() {
	this.grid = this.grid.map2d((tile, i, j)=>(tile instanceof LabyrinthTile)?tile:new LabyrinthTile(i, j, tile, this));
	this.grid.forEach2d(tile=>tile.setNeighbors());
}
LabyrinthFloor.prototype.finalizeTerminals = function() {
	//var things = this.recommendedTerminals.map(a=>this.grid[a.gridX][a.gridY]).shuffle();
	this.startTile = this.grid[this.startTile.gridX][this.startTile.gridY];
	//console.log(this.stairs);
	for (var i = 0; i < this.stairs.length; i++) {
		this.grid[this.stairs[i].gridX][this.stairs[i].gridY].putStairs(this.stairs[i]);
	}
}
LabyrinthFloor.prototype.removeSomeDeadEnds = function(rate=1) {
	for (var i = 1; i < this.grid.length-1; i++) {
		for (var j = 1; j < this.grid[i].length-1; j++) {
			if (Math.random()<=rate && !this.grid[i][j].wall) {
				var walls = [];
				var removable = [];
				if (i > 0)
					walls.push(this.grid[i-1][j]);
				if (i > 1)
					removable.push(this.grid[i-1][j]);
				if (j > 0)
					walls.push(this.grid[i][j-1]);
				if (j > 1)
					removable.push(this.grid[i][j-1]);
				if (i < this.grid.length-1)
					walls.push(this.grid[i+1][j]);
				if (i < this.grid.length-2)
					removable.push(this.grid[i+1][j]);
				if (j < this.grid[0].length-1)
					walls.push(this.grid[i][j+1]);
				if (j < this.grid[0].length-2)
					removable.push(this.grid[i][j+1]);
				if (walls.filter(v=>v.wall).length == 3)
					removable.filter(v=>v.wall).randomTerm().wall = false;
			}
		}
	}
}
LabyrinthFloor.prototype.generateSteps = 0;
LabyrinthFloor.prototype.checkGenerateKillsafe = function() {
	this.generateSteps ++;
	if (this.generateSteps > 42069) {
		runnee = this;
		throw "that's a lot of fucking steps";
	}
}
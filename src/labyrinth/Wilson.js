LabyrinthFloor.prototype.generateBaseGridWilson = function(width, height) {
	this.grid = newArray2dLambda(width*2+1, height*2+1, ()=>({wall:true}));
	this.numberGrid();
	this.grid[1][1].wall = false;
	while (true) {
		this.checkGenerateKillsafe();
		var todo = this.wilsonNotFinished();
		//console.log(todo);
		if (!todo) {
			//console.log("Finished in " + this.generateSteps);
			this.wilsonPlaceTerminals(width, height);
			return;
		}
		this.wilsonDoPath(todo);
	}
}
LabyrinthFloor.prototype.wilsonNotFinished = function() {
	for (var i = 1; i < this.grid.length-1; i+=2) {
		for (var j = 1; j < this.grid[i].length-1; j+=2) {
			//console.log("Checking "+i+", "+j);
			if (this.grid[i][j].wall) {
				return this.grid[i][j];
			}
		}
	}
	return false;
}
LabyrinthFloor.prototype.wilsonDoPath = function(from) {
	this.wilsonLerw = [from];
	from.lerwMark = true;
	while (true) {
		this.checkGenerateKillsafe();
		var next = this.wilsonPathNext();
		if (!next) {
			console.log("no");
		} else if (!next.wall) {
			this.wilsonLerw.push(next);
			//console.log(this.grid.mapString2dInv(tile=>!tile.wall?"_":tile.lerwMark?"m":"X"));
			for (var i = 0; i < this.wilsonLerw.length-1; i++) {
				this.wilsonLerw[i].wall = false;
				//console.log((this.wilsonLerw[i].gridX+this.wilsonLerw[i+1].gridX)/2, (this.wilsonLerw[i].gridY+this.wilsonLerw[i+1].gridY)/2);
				this.grid[(this.wilsonLerw[i].gridX+this.wilsonLerw[i+1].gridX)/2][(this.wilsonLerw[i].gridY+this.wilsonLerw[i+1].gridY)/2].wall = false;
			}
			//console.log(this.grid.mapString2dInv(tile=>!tile.wall?"_":tile.lerwMark?"m":"X"));
			return true;
		} else if (next.lerwMark) {
			//console.log(this.grid.mapString2dInv(tile=>!tile.wall?"_":tile.lerwMark?"m":"X"));
			while (this.wilsonLerw[this.wilsonLerw.length-1] != next) {
				this.wilsonLerw.pop().lerwMark = false;
			}
		} else {
			this.wilsonLerw.push(next);
			next.lerwMark = true;
		}
	}
}
LabyrinthFloor.prototype.wilsonPathNext = function() {
	var posses = [];
	var head = this.wilsonLerw[this.wilsonLerw.length-1];
	var prev = this.wilsonLerw[this.wilsonLerw.length-2];
	if (head.gridX > 1) {
		posses.push(this.grid[head.gridX-2][head.gridY]);
	}
	if (head.gridY > 1) {
		posses.push(this.grid[head.gridX][head.gridY-2]);
	}
	if (head.gridX < this.grid.length-2) {
		//console.log(head.gridX+2, this.grid.length);
		posses.push(this.grid[head.gridX+2][head.gridY]);
	}
	if (head.gridY < this.grid[0].length-2) {
		posses.push(this.grid[head.gridX][head.gridY+2]);
	}
	posses = posses.filter(p=>p!=prev);
	return posses.randomTerm();
}

LabyrinthFloor.prototype.wilsonPlaceTerminals = function(width, height) {
	var lisp = [this.grid[5][5], this.grid[width*2-5][5], this.grid[5][height*2-5], this.grid[width*2-5][height*2-5]];
	//TODO account for more than 3 of stairs
	lisp = lisp.shuffle();
	this.startTile = lisp.pop();
	for (var i = 0; i < this.stairs.length; i++) {
		this.stairs[i].setPlace(lisp.pop());
		lisp = lisp.shuffle();
	}
}
const STAMP_TRANSFORMS = [
	//{i_x:1, i_y:0, j_x:0, j_y:1, width_x:0, height_y:0, transpose:false},//normal
	//{i_x:-1, i_y:0, j_x:0, j_y:1, width_x:1, height_y:0, transpose:false},//flipped vertically
	{i_x:0, i_y:1, j_x:1, j_y:0, width_x:0, height_y:0, transpose:true},//transpose
	//TODO allow all 8 transforms
]

LabyrinthFloor.prototype.generateBaseGridOpen = function(width, height) {
	this.grid = newArray2dLambda(width+1, height+1, (i,j)=>({wall:i<1||j<1||i>=width||j>=height}));
	this.numberGrid();
	this.startTile = this.grid[1][1];
	//this.stairs.forEach((s,i)=>s.setPlace(i+3, 2));
}
LabyrinthFloor.prototype.openPlaceStairStamps = function() {
	var stairsPlaced = 0;
	while (stairsPlaced < this.stairs.length) {
		this.checkGenerateKillsafe();
		var stamp = this.stamps.filter(o=>o.stairs).randomTerm();
		var placed = this.openPlaceStamp(stamp, 10);
		if (placed) {
			stairsPlaced++;
		}
	}
	this.openPlaceTerminals();
}
LabyrinthFloor.prototype.openPlaceUselessStamps = function() {
	var stampsTried = 0;
	while (stampsTried < 50) {
		this.checkGenerateKillsafe();
		var stamp = this.stamps.filter(o=>!o.stairs).randomTerm();
		var placed = this.openPlaceStamp(stamp, 3);
		stampsTried++;
	}
}
LabyrinthFloor.prototype.openPlaceStamp = function(stamp, maxTries = 1) {
	var width, height;
	var trans = STAMP_TRANSFORMS.randomTerm();
	if (trans.transpose) {
		width = stamp.grid.length;
		height = stamp.grid[0].length;
	} else {
		width = stamp.grid[0].length;
		height = stamp.grid.length;
	}
	var rect = this.openFindUnstampedRect(width, height, maxTries);
	if (!rect)
		return false;
	for (var i = 0; i < stamp.grid.length; i++) {
		for (var j = 0; j < stamp.grid[0].length; j++) {
			let tx = rect.x + (rect.width-1)*trans.width_x + i*trans.i_x + j*trans.j_x;
			let ty = rect.y + (rect.height-1)*trans.height_y + i*trans.i_y + j*trans.j_y;
			//console.log(rect.x, rect.y, i, j, tx, ty);
			for (var prop in stamp.grid[i][j])
				this.grid[tx][ty][prop] = stamp.grid[i][j][prop]
			
		}
	}
	for (var x = rect.x-1; x < rect.x+rect.width+1; x++) {
		for (var y = rect.y-1; y < rect.y+rect.height+1; y++) {
			this.grid[x][y].stamped = true;
		}
	}
	console.log(this.grid.mapString2dInv(t=>t.wall?"W ":t.stamped?"s ":"_ "))
	return rect;
}
LabyrinthFloor.prototype.openFindUnstampedRect = function(width, height, triesLeft) {
	var unblocked = false;
	var x, y;
	while (!unblocked) {
		if (triesLeft <= 0)
			return false;
		triesLeft --;
		this.checkGenerateKillsafe();
		x = Math.floor(2+Math.random()*(this.grid.length-4-width));
		y = Math.floor(2+Math.random()*(this.grid[0].length-4-height));
		if (this.openCheckUnstampedRect(x, y, width, height))
			unblocked = true;
	}
	return {
		x : x,
		y : y,
		width : width,
		height : height,
	};
}
LabyrinthFloor.prototype.openCheckUnstampedRect = function(x, y, width, height) {
	for (var i = 0; i < width; i++) {
		for (var j = 0; j < height; j++) {
			if (this.grid[x+i][y+j].stamped) {
				//console.log(x, y, i, j)
				return false;
			}
		}			
	}
	return true;
}
LabyrinthFloor.prototype.openPlaceTerminals = function(width, height) {
	var lisp = this.grid.filter2d(t=>t.stairs);
	//TODO account for more than 3 of stairs
	lisp = lisp.shuffle();
	//this.startTile = lisp.pop();
	for (var i = 0; i < this.stairs.length; i++) {
		this.stairs[i].setPlace(lisp[i]);
		lisp = lisp.shuffle();
	}
}
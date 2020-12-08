const DIR4_NORTH = {
	x : 0,
	y : -1,
	cw : DIR4_EAST,
	ccw : DIR4_WEST,
}
const DIR4_EAST = {
	x : 1,
	y : 0,
	cw : DIR4_SOUTH,
	ccw : DIR4_NORTH,
}

const DIR4_SOUTH = {
	x : 0,
	y : 1,
	cw : DIR4_WEST,
	ccw : DIR4_EAST,
}

const DIR4_WEST = {
	x : -1,
	y : 0,
	cw : DIR4_NORTH,
	ccw : DIR4_SOUTH,
}

function directionDX(direction) {
	switch (direction) {
		case UP: return 0;
		case RIGHT: return +1;
		case DOWN: return 0;
		case LEFT: return -1;
	}
}
function directionDY(direction) {
	switch (direction) {
		case UP: return -1;
		case RIGHT: return 0;
		case DOWN: return +1;
		case LEFT: return 0;
	}
}
function directionTheta(direction) {
	switch (direction) {
		case UP: return -Math.PI/2;
		case RIGHT: return 0;
		case DOWN: return Math.PI/2;
		case LEFT: return Math.PI;
	}
}

function directionFromXY(dx, dy) {
	if (dx > Math.abs(dy))
		return RIGHT;
	else if (dx < -Math.abs(dy))
		return LEFT;
	else if (dy > 0)
		return DOWN;
	else
		return UP;
}

function directionLeft(direction) {
	switch (direction) {
		case UP: return LEFT;
		case RIGHT: return UP;
		case DOWN: return RIGHT;
		case LEFT: return DOWN;
	}
}
function directionRight(direction) {
	switch (direction) {
		case UP: return RIGHT;
		case RIGHT: return DOWN;
		case DOWN: return LEFT;
		case LEFT: return UP;
	}
}
function directionOpposite(direction) {
	switch (direction) {
		case UP: return DOWN;
		case RIGHT: return LEFT;
		case DOWN: return UP;
		case LEFT: return RIGHT;
	}
}

function directionRandom(determ) {
	var ring = determ ? rng.get() : Math.random();
	return Math.floor(ring*4);
}
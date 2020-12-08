const LABYRINTH_DATA = {};
const LABYRINTH_BASE_SIGHT_RANGE = 4;

function enterLabyrinthFromLocation(id) {
	//console.log(id);
	switchScreen(new LabyrinthScreen(id));
}

function escapeDungeon() {
	changeLocation("clinic");
	advanceTime();
	returnToLocation();
}
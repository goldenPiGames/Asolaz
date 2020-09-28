LOCATION_DATA_LIST.forEach(dat => {
	dat.rooms = [];
});

CHARACTER_DATA_LIST.forEach(car => {
	if (car.roomLocation)
		LOCATION_DATA[car.roomLocation].rooms.push(car.id);
});

function getLocationRoomDoors() {
	return LOCATION_DATA[data.location].rooms.map(getCharRoomScroll);
}

function getCharRoomScroll(car) {
	return {
		id : car,
		what : "roomdoor",
		name : CHARACTER_DATA[car].name + "'s Door",
	}
}
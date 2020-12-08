

const LOCATION_DATA_LIST = [];

for (id in LOCATION_DATA) {
	LOCATION_DATA[id].id = id;
	LOCATION_DATA_LIST.push(LOCATION_DATA[id]);
}

function getLocationMenuList() {
	return LOCATION_DATA_LIST;
}

function getLocationPOIsScroll() {
	return LOCATION_DATA[data.location].pois.filter(p=>evalCharReqs(p)).map(getLocationPOIScroll);
}

function getLocationPOIScroll(bap) {
	return bap;
}

function whoIsAtLocation(location) {
	return CHARACTER_LIST.filter(car=>data.characters[car].location == location);
}

function getCharacterStatus(car) {
	return CHARACTER_DATA[car].weeklySchedule[data.time%BLOCKS_PER_WEEK];
}

function changeLocation(to) {
	data.location = to;
	refreshBG();
}

function getLocationName() {
	return LOCATION_DATA[data.location].name;
}
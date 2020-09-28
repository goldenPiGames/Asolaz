const LOCATION_DATA = {
	"dorms-player" : {
		name : "Your Room",
		area : "campusmain",
		pois : [
			{
				name:"Your bed",
				what:"sleep",
			},
		],
	},
	"dorms" : {
		name : "Dormitories",
		area : "campusmain",
		pois : [],
	},
	"quad" : {
		name : "Quad",
		area : "campusmain",
		pois : [],
	},
	"library" : {
		name : "Library",
		area : "campusmain",
		pois : [],
	},
	"cafeteria" : {
		name : "Cafeteria",
		area : "campusmain",
		pois : [],
	},
	"infirmary" : {
		name : "Infirmary",
		area : "campusmain",
		pois : [],
	},
	"gym" : {
		name : "Gym",
		area : "campusmain",
		pois : [],
	},
	"arena" : {
		name : "Arena",
		area : "campusmain",
		pois : [],
	},
	"stadium" : {
		name : "Stadium",
		area : "campusmain",
		pois : [],
	},
	"pool" : {
		name : "Pool",
		area : "campusmain",
		pois : [],
	},
	"beach" : {
		name : "Beach",
		area : "campusmain",
		pois : [],
	},
}

const LOCATION_DATA_LIST = [];

for (id in LOCATION_DATA) {
	LOCATION_DATA[id].id = id;
	LOCATION_DATA_LIST.push(LOCATION_DATA[id]);
}

function getLocationMenuList() {
	return LOCATION_DATA_LIST;
}

function getLocationPOIsScroll() {
	return LOCATION_DATA[data.location].pois.map(getLocationPOIScroll);
}

function getLocationPOIScroll(bap) {
	return bap;
}

function whoIsAtLocation(location) {
	return getAllCharacterStatus().filter(p => p.location == location && !p.status.inRoom);
}

function getAllCharacterStatus() {
	return CHARACTER_LIST.map(getCharacterStatus);
}

function getCharacterStatus(car) {
	var dat = CHARACTER_DATA[car].weeklySchedule[data.time%BLOCKS_PER_WEEK];
	return {
		id : car,
		name : CHARACTER_DATA[car].name,
		location : dat.location,
		status : dat.status,
	}
}

function changeLocation(to) {
	data.location = to;
	//TODO update background graphic
}

function getLocationName() {
	return LOCATION_DATA[data.location].name;
}
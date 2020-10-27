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
		images : {
			"all" : "dorms-room.jpg",
		}
	},
	"dorms" : {
		name : "Dormitories",
		area : "campusmain",
		pois : [],
		images : {
			"all" : "dorms.jpg",
		}
	},
	"quad" : {
		name : "Quad",
		area : "campusmain",
		pois : [],
		images : {
			"all" : "quad.jpg",
		}
	},
	"library" : {
		name : "Library",
		area : "campusmain",
		pois : [
			{
				name:"Spend time reading",
				what:"readbooks",
			}
		],
		images : {
			"all" : "library.jpg", //TODO
		}
	},
	"cafeteria" : {
		name : "Cafeteria",
		area : "campusmain",
		pois : [],
		images : {
			"all" : "cafeteria.jpg",
		}
	},
	"bureau" : {
		name : "Bureau",
		area : "campusmain",
		pois : [],
		images : {
			"all" : "bureau.jpg",
		}
	},
	"clinic" : {
		name : "Clinic",
		area : "campusmain",
		pois : [],
		images : {
			"all" : "clinic.jpg",
		}
	},
	"gym" : {
		name : "Gym",
		area : "campusmain",
		pois : [],
		images : {
			"all" : "gym.jpg",//TODO
		}
	},
	"arena" : {
		name : "Arena",
		area : "campusmain",
		pois : [
			{
				name:"Combat license",
				what:"scene",
				id:"combatlicense_intro",
				reqs:[{type:"license", license:"combat", has:false}],
			}
		],
		images : {
			"all" : "arena.png",
		}
	},
	"stadium" : {
		name : "Stadium",
		area : "campusmain",
		pois : [],
		images : {
			"all" : "stadium.jpg",//TODO
		}
	},
	"tailory" : {
		name : "Tailory",
		area : "campusmain",
		pois : [],
		images : {
			"all" : "tailory.jpg",
		}
	},
	"pool" : {
		name : "Pool",
		area : "campusmain",
		pois : [],
		images : {
			"all" : "pool.jpg",
		}
	},
	"beach" : {
		name : "Beach",
		area : "campusmain",
		pois : [],
		images : {
			"all" : "beach.jpg",
		}
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
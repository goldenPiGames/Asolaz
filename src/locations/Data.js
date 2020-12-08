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
			"all" : "library.jpg",
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
	"lab_energy" : {
		name : "Energy Lab",
		area : "campusmain",
		pois : [],
		images : {
			"all" : "",
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
	"forest" : {
		name : "Forest",
		area : "outskirts",
		pois : [],
		images : {
			"all" : "forest.jpg",
		}
	}
}
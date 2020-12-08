CHARACTER_DATA.chumug = {
	name : "Chumug",
	gender : GENDER_FEMALE,
	wegender : GENDER_MALE,
	age : 21,
	colors : {
		light : "#FF8040",
	},
	body : {
		penis : false,
		vagina : true,
	},
	likes : {
		smalltalk : LIKES_SOME,
		labyrinth : LIKES_SOME,
	},
	stats : {
		mar_atk : 1.3,
		mar_def : 1.1,
		mar_acc : 0.8,
		mar_eva : 0.7,
		psi_atk : 0.9,
		psi_def : 1.1,
		psi_acc : 0.9,
		psi_eva : 0.8,
		arc_atk : 1.2,
		arc_def : 1.0,
		arc_acc : 0.8,
		arc_eva : 0.8,
		init : 1.2,
	},
	skills : {
		healing : 1,
	},
	roomLocation : "dorms",
	dialog : {
		introduction : [
			{log : [
				{speakerID:"chumug", text:"You can call me Chumug."},
			]},
		],
		greeting : [
			{log : [
				{speakerID:"chumug", text:"Hello, [pname]. How fare you?"},
			]},
			{log : [
				{speakerID:"chumug", text:"Oh hey, [playername]. How's it going?"},
			]},
		],
		/*knock_drowsing_goway : [
			{log : [
				{text:"Chumug opens the door ajar. She has a toothbrush in her mouth and a grumpy expression."},
				{speakerID:"chumug", text:"What?"},
				{text:"She hardly waits for an answer before closing the door in your face."},
			]},
		],
		knock_drowsing_in : [
			{log : [
				{speakerID:"chumug", text:"Oh, hey, [playername]. I was just getting ready for bed."},
			]},
		],*/
		smalltalk : [
			{log : [
				{speakerID:"chumug", text:"The labyrinths offer such a bounty of adventure!"},
			]},
			/*{log : [
				{speakerID:"chumug", text:"Have you been to the library? There are plenty of interesting books there, and it's a great place to study."},
				{speakerID:"chumug", text:"I don't have the time to go there often, but I'm usually there between classes on Tuesday and Thursday."},
			]},*/
		],
		ask : [
			{id:"whyhere", text:"What brings you to Asolaz?", reqs:{type:"affinity", compare:"min", amount:10}, log:[
				{speakerID:"chumug", text:"I'm here to better myself and to seek the thrill of exploration and combat!"},
			], firstUps:[
				{action:"charParamUp", param:"acquaint", by:5, upto:50},
			]},
		],
		knock_offersleep : [
			{log : [
				{speakerID:"chumug", text:"Hey, [pname]! I was just going to embrace darkness and solitude."},
				{speakerID:"chumug", text:"Though I need not embrace solitude, if you'd be so inclined?"},
			]},
		],
		room_late_leave : [
			{log : [
				{speakerID:"chumug", text:"As much as I enjoy your company, the hour grows large and I must bid you farewell."},
			]},
			
		],
		/*room_late_offersleep : [
			{log : [
				{speakerID:"chumug", text:"Oh, it's getting late. I'll be going to bed soon."},
				{speakerID:"chumug", text:"...Would you like to go to bed with me?"},
			]},
		],*/
	},
	weeklySchedule : [
		//sunday
		{location:"dorms", status:SCHEDULE_SLEEPING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_WAKING},//6am
		{location:"gym", status:SCHEDULE_EXERCISING},//8am
		{location:"cafeteria", status:SCHEDULE_EATING},//10am
		{location:"arena", status:SCHEDULE_WORKING},//noon
		{location:"arena", status:SCHEDULE_WORKING},//2pm
		{location:"arena", status:SCHEDULE_WORKING},//4pm
		{location:"arena", status:SCHEDULE_WORKING},//6pm
		{location:"pool", status:SCHEDULE_RELAXING},//8pm
		{location:"dorms", status:SCHEDULE_DROWSING},//10pm
		//monday
		{location:"dorms", status:SCHEDULE_SLEEPING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_WAKING},//6am
		{location:"gym", status:SCHEDULE_EXERCISING},//8am
		{location:"cafeteria", status:SCHEDULE_EATING},//10am
		{location:"lab_energy", status:SCHEDULE_LEARNING},//noon
		{location:"lab_energy", status:SCHEDULE_LEARNING},//2pm
		{location:"lab_energy", status:SCHEDULE_LEARNING},//4pm
		{location:"gym", status:SCHEDULE_EXERCISING},//6pm
		{location:"pool", status:SCHEDULE_RELAXING},//8pm
		{location:"dorms", status:SCHEDULE_DROWSING},//10pm
		//tuesday
		{location:"dorms", status:SCHEDULE_SLEEPING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_WAKING},//6am
		{location:"gym", status:SCHEDULE_EXERCISING},//8am
		{location:"cafeteria", status:SCHEDULE_EATING},//10am
		{location:"arena", status:SCHEDULE_WORKING},//noon
		{location:"arena", status:SCHEDULE_WORKING},//2pm
		{location:"arena", status:SCHEDULE_WORKING},//4pm
		{location:"arena", status:SCHEDULE_WORKING},//6pm
		{location:"pool", status:SCHEDULE_RELAXING},//8pm
		{location:"dorms", status:SCHEDULE_DROWSING},//10pm
		//wednesday
		{location:"dorms", status:SCHEDULE_SLEEPING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_WAKING},//6am
		{location:"gym", status:SCHEDULE_EXERCISING},//8am
		{location:"cafeteria", status:SCHEDULE_EATING},//10am
		{location:"lab_energy", status:SCHEDULE_LEARNING},//noon
		{location:"lab_energy", status:SCHEDULE_LEARNING},//2pm
		{location:"lab_energy", status:SCHEDULE_LEARNING},//4pm
		{location:"gym", status:SCHEDULE_EXERCISING},//6pm
		{location:"pool", status:SCHEDULE_RELAXING},//8pm
		{location:"dorms", status:SCHEDULE_DROWSING},//10pm
		//thursday
		{location:"dorms", status:SCHEDULE_SLEEPING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_WAKING},//6am
		{location:"gym", status:SCHEDULE_EXERCISING},//8am
		{location:"cafeteria", status:SCHEDULE_EATING},//10am
		{location:"arena", status:SCHEDULE_WORKING},//noon
		{location:"arena", status:SCHEDULE_WORKING},//2pm
		{location:"arena", status:SCHEDULE_WORKING},//4pm
		{location:"arena", status:SCHEDULE_WORKING},//6pm
		{location:"pool", status:SCHEDULE_RELAXING},//8pm
		{location:"dorms", status:SCHEDULE_DROWSING},//10pm
		//friday
		{location:"dorms", status:SCHEDULE_SLEEPING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_WAKING},//6am
		{location:"gym", status:SCHEDULE_EXERCISING},//8am
		{location:"cafeteria", status:SCHEDULE_EATING},//10am
		{location:"lab_energy", status:SCHEDULE_LEARNING},//noon
		{location:"lab_energy", status:SCHEDULE_LEARNING},//2pm
		{location:"lab_energy", status:SCHEDULE_LEARNING},//4pm
		{location:"gym", status:SCHEDULE_EXERCISING},//6pm
		{location:"pool", status:SCHEDULE_RELAXING},//8pm
		{location:"dorms", status:SCHEDULE_DROWSING},//10pm
		//saturday
		{location:"dorms", status:SCHEDULE_SLEEPING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_WAKING},//6am
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8am
		{location:"gym", status:SCHEDULE_EXERCISING},//10am
		{location:"cafeteria", status:SCHEDULE_EATING},//noon
		{location:"beach", status:SCHEDULE_RELAXING},//2pm
		{location:"beach", status:SCHEDULE_RELAXING},//4pm
		{location:"beach", status:SCHEDULE_RELAXING},//6pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8pm
		{location:"dorms", status:SCHEDULE_DROWSING},//10pm
	],
	credits3d : [
		{what:"Base Model", name:"Genesis 8 Female", by:"DAZ 3D", daz:"genesis-8-starter-essentials"},
		{what:"Morphs", name:"Heavy Hitters", by:"squarepeg3d", renderosity:82812},
		{what:"Clothes", name:"Shorts and Hoody", by:"Adam Thwaites", mostdigitalcreations:"g8f_shorts_and_hoody"},
		{what:"Standing Pose", name:"Original", by:"goldenPiGames"},
		{what:"Footwear", name:"chevillere", by:"guy91600", sharecg:83485},
		{what:"Genitalia", name:"Golden Palace", by:"meipe", sites:[{name:"Renderotica", href:"https://www.renderotica.com/store/sku/57311_Golden-Palace-For-Genesis-8-Female"}], adult:true, paid:true},
	]
}
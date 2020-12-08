CHARACTER_DATA.praeto = {
	name : "Praeto",
	gender : GENDER_MALE,
	wegender : GENDER_NB,
	age : 24,
	colors : {
		light : "#FF8040",
	},
	body : {
		penis : true,
		vagina : false,
	},
	likes : {
		smalltalk : LIKES_MUCH,
		labyrinth : LIKES_SOME,
	},
	skills : {
		sleep_body : 1,
	},
	roomLocation : "dorms",
	dialog : {
		introduction : [
			{log : [
				{charimg:{character:"praeto", outfit:"default", pose:"standing"}},
				{speakerID:"praeto", text:"It's nice to meet you. My name is Praeto. I'm a student and guard here at Asolaz."},
			]},
		],
		greeting : [
			{log : [
				{speakerID:"cora", text:"Hello, [playername]. Anything wrong?"},
			]},
			{log : [
				{speakerID:"cora", text:"Hello, [playername]. I hope everything's alright."},
			]},
		],
		smalltalk : [
			{log : [
				{speakerID:"praeto", text:"Asolaz is a fairly peaceful and orderly place, all things considered."},
				{speakerID:"praeto", text:"I'm doing my part to ensure it stays that way."},
			]},
			/*{log : [
				{speakerID:"praeto", text:"I fully agree with Asolaz's strict no-weapons policy."},
			]},*/
		],
		ask : [
			{id:"whyhere", text:"What brings you to Asolaz?", reqs:{type:"affinity", compare:"min", amount:10}, log:[
				{speakerID:"praeto", text:"I'm here to become a police officer."},
			]},
		]
	},
	weeklySchedule : [
		//sunday
		{location:"dorms", status:SCHEDULE_DROWSING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_WAKING},//6am
		{location:"quad", status:SCHEDULE_PATROLLING},//8am
		{location:"quad", status:SCHEDULE_PATROLLING},//10am
		{location:"quad", status:SCHEDULE_PATROLLING},//noon
		{location:"cafeteria", status:SCHEDULE_EATING},//2pm
		{location:"gym", status:SCHEDULE_EXERCISING},//4pm
		{location:"quad", status:SCHEDULE_RELAXING},//6pm
		{location:"dorms", status:SCHEDULE_EATING},//8pm
		{location:"dorms", status:SCHEDULE_RELAXING},//10pm
		//monday
		{location:"dorms", status:SCHEDULE_DROWSING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_WAKING},//6am
		{location:"quad", status:SCHEDULE_PATROLLING},//8am
		{location:"quad", status:SCHEDULE_PATROLLING},//10am
		{location:"quad", status:SCHEDULE_PATROLLING},//noon
		{location:"cafeteria", status:SCHEDULE_EATING},//2pm
		{location:"gym", status:SCHEDULE_EXERCISING},//4pm
		{location:"quad", status:SCHEDULE_RELAXING},//6pm
		{location:"dorms", status:SCHEDULE_EATING},//8pm
		{location:"dorms", status:SCHEDULE_RELAXING},//10pm
		//tuesday
		{location:"dorms", status:SCHEDULE_DROWSING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_WAKING},//6am
		{location:"quad", status:SCHEDULE_PATROLLING},//8am
		{location:"quad", status:SCHEDULE_PATROLLING},//10am
		{location:"quad", status:SCHEDULE_PATROLLING},//noon
		{location:"cafeteria", status:SCHEDULE_EATING},//2pm
		{location:"gym", status:SCHEDULE_EXERCISING},//4pm
		{location:"quad", status:SCHEDULE_RELAXING},//6pm
		{location:"dorms", status:SCHEDULE_EATING},//8pm
		{location:"dorms", status:SCHEDULE_RELAXING},//10pm
		//wednesday
		{location:"dorms", status:SCHEDULE_DROWSING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_WAKING},//6am
		{location:"quad", status:SCHEDULE_PATROLLING},//8am
		{location:"quad", status:SCHEDULE_PATROLLING},//10am
		{location:"quad", status:SCHEDULE_PATROLLING},//noon
		{location:"cafeteria", status:SCHEDULE_EATING},//2pm
		{location:"gym", status:SCHEDULE_EXERCISING},//4pm
		{location:"quad", status:SCHEDULE_RELAXING},//6pm
		{location:"dorms", status:SCHEDULE_EATING},//8pm
		{location:"dorms", status:SCHEDULE_RELAXING},//10pm
		//thursday
		{location:"dorms", status:SCHEDULE_DROWSING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_WAKING},//6am
		{location:"quad", status:SCHEDULE_PATROLLING},//8am
		{location:"quad", status:SCHEDULE_PATROLLING},//10am
		{location:"quad", status:SCHEDULE_PATROLLING},//noon
		{location:"cafeteria", status:SCHEDULE_EATING},//2pm
		{location:"gym", status:SCHEDULE_EXERCISING},//4pm
		{location:"quad", status:SCHEDULE_RELAXING},//6pm
		{location:"dorms", status:SCHEDULE_EATING},//8pm
		{location:"dorms", status:SCHEDULE_RELAXING},//10pm
		//friday
		{location:"dorms", status:SCHEDULE_DROWSING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_WAKING},//6am
		{location:"quad", status:SCHEDULE_PATROLLING},//8am
		{location:"quad", status:SCHEDULE_PATROLLING},//10am
		{location:"quad", status:SCHEDULE_PATROLLING},//noon
		{location:"cafeteria", status:SCHEDULE_EATING},//2pm
		{location:"gym", status:SCHEDULE_EXERCISING},//4pm
		{location:"quad", status:SCHEDULE_RELAXING},//6pm
		{location:"dorms", status:SCHEDULE_EATING},//8pm
		{location:"dorms", status:SCHEDULE_RELAXING},//10pm
		//saturday
		{location:"dorms", status:SCHEDULE_DROWSING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_WAKING},//6am
		{location:"quad", status:SCHEDULE_PATROLLING},//8am
		{location:"quad", status:SCHEDULE_PATROLLING},//10am
		{location:"quad", status:SCHEDULE_PATROLLING},//noon
		{location:"cafeteria", status:SCHEDULE_EATING},//2pm
		{location:"gym", status:SCHEDULE_EXERCISING},//4pm
		{location:"quad", status:SCHEDULE_RELAXING},//6pm
		{location:"dorms", status:SCHEDULE_EATING},//8pm
		{location:"dorms", status:SCHEDULE_RELAXING},//10pm
	],
	credits3d : [
		{what:"Base Model", name:"Genesis 8 Male", by:"DAZ 3D", daz:"genesis-8-starter-essentials"},
		{what:"Morphs", name:"SY 200 Morphs", by:"SickleYield", sharecg:91888},
		{what:"Hair", name:"Testing Hair", by:"emosludge", renderosity:85638},
		{what:"Armor", name:"Sci-Fi Armor", by:"falcontruth", sharecg:92455, renderosity:80267},
		{what:"Underwear", name:"Basic Wear", by:"Daz 3D", daz:"genesis-3-starter-essentials"},
		{what:"Standing Pose", name:"Base Poses", by:"Daz 3D", daz:"genesis-8-starter-essentials"},
		{what:"Genitalia", name:"Dicktator", by:"meipe", sites:[{name:"Renderotica", href:"https://www.renderotica.com/store/sku/57748_Dicktator-For-Genesis-8-Male"}], adult:true, paid:true},
	]
}
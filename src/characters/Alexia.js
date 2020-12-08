CHARACTER_DATA.alexia = {
	name : "Alexia",
	gender : GENDER_FEMALE,
	wegender : GENDER_MALE,
	age : 21,
	colors : {
		light : "#FFFF00",
	},
	music : "Lab Rats Theme",
	body : {
		penis : false,
		vagina : true,
	},
	likes : {
		smalltalk : LIKES_NOT,
		labyrinth : LIKES_NOT,
	},
	skills : {
		online_shopper : 1,
	},
	roomLocation : "dorms",
	dialog : {
		introduction : [
			{log : [
				{charimg:{character:"alexia", outfit:"default", pose:"standing"}},
				{speakerID:"alexia", text:"Hey, I'm Alexia."},
			]},
		],
		greeting : [
			{log : [
				{speakerID:"alexia", text:"Hey [pname]!"},
			]},
		],
		smalltalk : [
			{log : [
				{speakerID:"alexia", text:"All this magic is so weird and cool."},
				{speakerID:"alexia", text:"There's nothing like it where I'm from."},
			]},
			{log : [
				{speakerID:"alexia", text:"I go to the beach every Saturday."},
			]},
		],
		ask : [
			{id:"whyhere", text:"What brings you to Asolaz?", reqs:{type:"affinity", compare:"min", amount:10}, log:[
				{speakerID:"alexia", text:"I have no idea why I'm here."},
				{speakerID:"alexia", text:"I'm a biology major. I literally don't know anything about magic."},
			]},
		],
	},
	weeklySchedule : [
		//sunday
		{location:"dorms", status:SCHEDULE_DROWSING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_SLEEPING},//6am
		{location:"dorms", status:SCHEDULE_WAKING},//8am
		{location:"quad", status:SCHEDULE_RELAXING},//10am
		{location:"cafeteria", status:SCHEDULE_EATING},//noon
		{location:"quad", status:SCHEDULE_RELAXING},//2pm
		{location:"quad", status:SCHEDULE_RELAXING},//4pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//6pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//10pm
		//monday
		{location:"dorms", status:SCHEDULE_DROWSING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_SLEEPING},//6am
		{location:"dorms", status:SCHEDULE_WAKING},//8am
		{location:"quad", status:SCHEDULE_RELAXING},//10am
		{location:"cafeteria", status:SCHEDULE_EATING},//noon
		{location:"quad", status:SCHEDULE_RELAXING},//2pm
		{location:"quad", status:SCHEDULE_RELAXING},//4pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//6pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//10pm
		//tuesday
		{location:"dorms", status:SCHEDULE_DROWSING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_SLEEPING},//6am
		{location:"dorms", status:SCHEDULE_WAKING},//8am
		{location:"quad", status:SCHEDULE_RELAXING},//10am
		{location:"cafeteria", status:SCHEDULE_EATING},//noon
		{location:"quad", status:SCHEDULE_RELAXING},//2pm
		{location:"quad", status:SCHEDULE_RELAXING},//4pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//6pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//10pm
		//wednesday
		{location:"dorms", status:SCHEDULE_DROWSING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_SLEEPING},//6am
		{location:"dorms", status:SCHEDULE_WAKING},//8am
		{location:"quad", status:SCHEDULE_RELAXING},//10am
		{location:"cafeteria", status:SCHEDULE_EATING},//noon
		{location:"quad", status:SCHEDULE_RELAXING},//2pm
		{location:"quad", status:SCHEDULE_RELAXING},//4pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//6pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//10pm
		//thursday
		{location:"dorms", status:SCHEDULE_DROWSING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_SLEEPING},//6am
		{location:"dorms", status:SCHEDULE_WAKING},//8am
		{location:"quad", status:SCHEDULE_RELAXING},//10am
		{location:"cafeteria", status:SCHEDULE_EATING},//noon
		{location:"quad", status:SCHEDULE_RELAXING},//2pm
		{location:"quad", status:SCHEDULE_RELAXING},//4pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//6pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//10pm
		//friday
		{location:"dorms", status:SCHEDULE_DROWSING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_SLEEPING},//6am
		{location:"dorms", status:SCHEDULE_WAKING},//8am
		{location:"quad", status:SCHEDULE_RELAXING},//10am
		{location:"cafeteria", status:SCHEDULE_EATING},//noon
		{location:"quad", status:SCHEDULE_RELAXING},//2pm
		{location:"quad", status:SCHEDULE_RELAXING},//4pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//6pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//10pm
		//saturday
		{location:"dorms", status:SCHEDULE_DROWSING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_SLEEPING},//6am
		{location:"dorms", status:SCHEDULE_WAKING},//8am
		{location:"beach", status:SCHEDULE_RELAXING, outfit:"swim"},//10am
		{location:"beach", status:SCHEDULE_RELAXING, outfit:"swim"},//noon
		{location:"beach", status:SCHEDULE_RELAXING, outfit:"swim"},//2pm
		{location:"beach", status:SCHEDULE_RELAXING, outfit:"swim"},//4pm
		{location:"beach", status:SCHEDULE_RELAXING, outfit:"swim"},//6pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//10pm
	],
	credits3d : [
		{what:"All Renders", name:"Lab Rats", by:"Vren", patreon:"vrengames"},
	]
}
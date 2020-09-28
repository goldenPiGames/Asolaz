CHARACTER_DATA.alexia = {
	name : "Alexia",
	gender : GENDER_FEMALE,
	wegender : GENDER_MALE,
	age : 21,
	paramsBase : {
		morality : 40,
		legality : 70,
		friendliness : 50,
		selfesteem : 70,
		willpower : 20,
		psiaware : 0,
		arcaware : 40,
		sluttiness : 40,
	},
	body : {
		penis : false,
		vagina : true,
	},
	likes : {
		smalltalk : .5,
	},
	skills : {
		online_shopper : 1,
	},
	roomLocation : "dorms",
	dialog : {
		greeting : [
			{text : "Hey there.", reqs:[{type:"cparam", param:"acquaint", compare:"max", amount:ACQUAINT_MET}]},
			{text : "Hey [pname]!", reqs:[{type:"cparam", param:"acquaint", compare:"min", amount:ACQUAINT_MET}]},
		],
		introduction : [
			{log : [
				{speaker:"Alexia", text:"Hey, I'm Alexia."},
			]},
		],
		smalltalk : [
			{log : [
				{speaker:"Alexia", text:"All this magic is so weird and cool."},
				{speaker:"Alexia", text:"There's nothing like it where I'm from."},
			]},
			{log : [
				{speaker:"Alexia", text:"I'm always at the beach on Saturdays."},
			]},
		],
		ask : [
			{id:"whyhere", text:"What brings you to Asolaz?", reqs:{type:"cparam", param:"acquaint", compare:"min", amount:10}, log:[
				{speaker:"Alexia", text:"I have no idea why I got accepted here."},
				{speaker:"Alexia", text:"I'm a biology major. I literally don't know anything about magic."},
			], firstUps:[
				{action:"charParamUp", param:"acquaint", by:5, upto:50},
			]},
		]
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
		{location:"beach", status:SCHEDULE_RELAXING},//10am
		{location:"beach", status:SCHEDULE_RELAXING},//noon
		{location:"beach", status:SCHEDULE_RELAXING},//2pm
		{location:"beach", status:SCHEDULE_RELAXING},//4pm
		{location:"beach", status:SCHEDULE_RELAXING},//6pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//10pm
	],
}
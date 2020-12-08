CHARACTER_DATA.nokolm = {
	name : "Nokolm",
	gender : GENDER_MALE,
	wegender : GENDER_MALE,
	age : 21,
	colors : {
		light : "#B04040",
	},
	paramsBase : {
		morality : 30,
		legality : 80,
		friendliness : 30,
		selfesteem : 60,
		willpower : 70,
		psiaware : 60,
		arcaware : 50,
		sluttiness : 60,
	},
	body : {
		penis : true,
		vagina : false,
	},
	likes : {
		smalltalk : .5,
	},
	skills : {
		//healing : 1,
		//sleep+ psionic
	},
	roomLocation : "dorms",
	dialog : {
		greeting : [
			{text : "What do you want?", reqs:[{type:"affinity", compare:"max", amount:ACQUAINT_MET}]},
			{text : "Good to see you, [playername].", reqs:[{type:"affinity", compare:"min", amount:ACQUAINT_MET}]},
		],
		introduction : [
			{log : [
				{speaker:"Ammette", text:"Yeah, I know you're name. I signed off your papers to let you in here."},
				{speaker:"Ammette", text:"...Wait, was that an attempt at conversation?"},
			]},
		],
		/*knock_drowsing_goway : [
			{log : [
				{text:"Ammette opens the door ajar. She has a toothbrush in her mouth and a grumpy expression."},
				{speaker:"Ammette", text:"What?"},
				{text:"She hardly waits for an answer before closing the door in your face."},
			]},
		],
		knock_drowsing_in : [
			{log : [
				{speaker:"Ammette", text:"Oh, hey, [playername]. I was just getting ready for bed."},
			]},
		],*/
		smalltalk : [
			{log : [
				{speaker:"Ammette", text:"There's a lot to do as a secretary."},
			]},
		],
		ask : [
			/*{id:"whyhere", text:"What brings you to Asolaz?", reqs:{type:"affinity", compare:"min", amount:10}, log:[
				{speaker:"Ammette", text:"I'm here to practice healing arcana."},
			], firstUps:[
				{action:"charParamUp", param:"acquaint", by:5, upto:50},
			]},*/
		],
		knock_offersleep : [
			{log : [
				{speaker:"Ammette", text:"I'm just getting ready for my much-needed sleep."},
				{speaker:"Ammette", text:"I wouldn't mind sharing it with you, though."},
			]},
		],
		room_late_leave : [
			{log : [
				{speaker:"Ammette", text:"It's late. I'm tired. Not to be rude, but go away."},
			]},
			
		],
		room_late_offersleep : [
			{log : [
				{speaker:"Ammette", text:"It's late. I'm tired. Please, go away. Unless you want to sleep with me, in which case by all means stay. No pressure."},
			]},
		],
	},
	weeklySchedule : [
		//sunday
		{location:"dorms", status:SCHEDULE_SLEEPING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_WAKING},//4am
		{location:"cafeteria", status:SCHEDULE_EATING},//6am
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8am
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//10am
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//noon
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//2pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//4pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//6pm
		{location:"cafeteria", status:SCHEDULE_EATING},//8pm
		{location:"dorms", status:SCHEDULE_DROWSING},//10pm
		//monday
		{location:"dorms", status:SCHEDULE_SLEEPING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_WAKING},//4am
		{location:"cafeteria", status:SCHEDULE_EATING},//6am
		{location:"bureau", status:SCHEDULE_WORKING},//8am
		{location:"bureau", status:SCHEDULE_WORKING},//10am
		{location:"bureau", status:SCHEDULE_WORKING},//noon
		{location:"bureau", status:SCHEDULE_WORKING},//2pm
		{location:"bureau", status:SCHEDULE_WORKING},//4pm
		{location:"bureau", status:SCHEDULE_WORKING},//6pm
		{location:"cafeteria", status:SCHEDULE_EATING},//8pm
		{location:"dorms", status:SCHEDULE_DROWSING},//10pm
		//tuesday
		{location:"dorms", status:SCHEDULE_SLEEPING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_WAKING},//4am
		{location:"cafeteria", status:SCHEDULE_EATING},//6am
		{location:"bureau", status:SCHEDULE_WORKING},//8am
		{location:"bureau", status:SCHEDULE_WORKING},//10am
		{location:"bureau", status:SCHEDULE_WORKING},//noon
		{location:"bureau", status:SCHEDULE_WORKING},//2pm
		{location:"bureau", status:SCHEDULE_WORKING},//4pm
		{location:"bureau", status:SCHEDULE_WORKING},//6pm
		{location:"cafeteria", status:SCHEDULE_EATING},//8pm
		{location:"dorms", status:SCHEDULE_DROWSING},//10pm
		//wednesday
		{location:"dorms", status:SCHEDULE_SLEEPING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_WAKING},//4am
		{location:"cafeteria", status:SCHEDULE_EATING},//6am
		{location:"bureau", status:SCHEDULE_WORKING},//8am
		{location:"bureau", status:SCHEDULE_WORKING},//10am
		{location:"bureau", status:SCHEDULE_WORKING},//noon
		{location:"bureau", status:SCHEDULE_WORKING},//2pm
		{location:"bureau", status:SCHEDULE_WORKING},//4pm
		{location:"bureau", status:SCHEDULE_WORKING},//6pm
		{location:"cafeteria", status:SCHEDULE_EATING},//8pm
		{location:"dorms", status:SCHEDULE_DROWSING},//10pm
		//thursday
		{location:"dorms", status:SCHEDULE_SLEEPING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_WAKING},//4am
		{location:"cafeteria", status:SCHEDULE_EATING},//6am
		{location:"bureau", status:SCHEDULE_WORKING},//8am
		{location:"bureau", status:SCHEDULE_WORKING},//10am
		{location:"bureau", status:SCHEDULE_WORKING},//noon
		{location:"bureau", status:SCHEDULE_WORKING},//2pm
		{location:"bureau", status:SCHEDULE_WORKING},//4pm
		{location:"bureau", status:SCHEDULE_WORKING},//6pm
		{location:"cafeteria", status:SCHEDULE_EATING},//8pm
		{location:"dorms", status:SCHEDULE_DROWSING},//10pm
		//friday
		{location:"dorms", status:SCHEDULE_SLEEPING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_WAKING},//4am
		{location:"cafeteria", status:SCHEDULE_EATING},//6am
		{location:"bureau", status:SCHEDULE_WORKING},//8am
		{location:"bureau", status:SCHEDULE_WORKING},//10am
		{location:"bureau", status:SCHEDULE_WORKING},//noon
		{location:"bureau", status:SCHEDULE_WORKING},//2pm
		{location:"bureau", status:SCHEDULE_WORKING},//4pm
		{location:"bureau", status:SCHEDULE_WORKING},//6pm
		{location:"cafeteria", status:SCHEDULE_EATING},//8pm
		{location:"dorms", status:SCHEDULE_DROWSING},//10pm
		//saturday
		{location:"dorms", status:SCHEDULE_SLEEPING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_WAKING},//4am
		{location:"cafeteria", status:SCHEDULE_EATING},//6am
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8am
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//10am
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//noon
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//2pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//4pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//6pm
		{location:"cafeteria", status:SCHEDULE_EATING},//8pm
		{location:"dorms", status:SCHEDULE_DROWSING},//10pm
	],
}
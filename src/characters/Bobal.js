CHARACTER_DATA.bobal = {
	name : "Bobal",
	gender : GENDER_FEMALE,
	wegender : GENDER_MALE,
	age : 20,
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
		smalltalk : .8,
	},
	skills : {
		fast_talker : 1,
		online_shopper : 1,
		online_investor : 1,
		acquatic : 1,
	},
	roomLocation : "dorms",
	dialog : {
		greeting : [
			{text : "Hello.", reqs:[{type:"cparam", param:"acquaint", compare:"max", amount:ACQUAINT_MET}]},
			{text : "Hello, [playername].", reqs:[{type:"cparam", param:"acquaint", compare:"min", amount:ACQUAINT_MET}]},
		],
		introduction : [
			{log : [
				{speaker:"Bobal", text:"Hello. My name is Bobal."},
			]},
		],
		smalltalk : [
			{log : [
				{speaker:"Bobal", text:"Asolaz is in quite a nice location, and I'm not just talking about the consistently pleasant weather and the lovely white-sand beaches."},
				{speaker:"Bobal", text:"Its location in international waters provides quite a number of interesting business opportunities..."},
			]},
		],
		ask : [
			{id:"whyhere", text:"What brings you to Asolaz?", reqs:{type:"cparam", param:"acquaint", compare:"min", amount:10}, log:[
				{speaker:"Bobal", text:"Well, I was planning on going to the Oshton Institute to learn business..."},
				{speaker:"Bobal", text:"But a few years ago, it turned out I had some natural affinity for magic, and so I matriculated here at Asolaz instead."},
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
		{location:"cafeteria", status:SCHEDULE_EATING},//10am
		{location:"beach", status:SCHEDULE_RELAXING},//noon
		{location:"beach", status:SCHEDULE_RELAXING},//2pm
		{location:"beach", status:SCHEDULE_RELAXING},//4pm
		{location:"beach", status:SCHEDULE_RELAXING},//6pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//10pm
		//monday
		{location:"dorms", status:SCHEDULE_DROWSING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_SLEEPING},//6am
		{location:"dorms", status:SCHEDULE_WAKING},//8am
		{location:"cafeteria", status:SCHEDULE_EATING},//10am
		{location:"beach", status:SCHEDULE_RELAXING},//noon
		{location:"beach", status:SCHEDULE_RELAXING},//2pm
		{location:"beach", status:SCHEDULE_RELAXING},//4pm
		{location:"beach", status:SCHEDULE_RELAXING},//6pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//10pm
		//tuesday
		{location:"dorms", status:SCHEDULE_DROWSING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_SLEEPING},//6am
		{location:"dorms", status:SCHEDULE_WAKING},//8am
		{location:"cafeteria", status:SCHEDULE_EATING},//10am
		{location:"beach", status:SCHEDULE_RELAXING},//noon
		{location:"beach", status:SCHEDULE_RELAXING},//2pm
		{location:"beach", status:SCHEDULE_RELAXING},//4pm
		{location:"beach", status:SCHEDULE_RELAXING},//6pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//10pm
		//wednesday
		{location:"dorms", status:SCHEDULE_DROWSING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_SLEEPING},//6am
		{location:"dorms", status:SCHEDULE_WAKING},//8am
		{location:"cafeteria", status:SCHEDULE_EATING},//10am
		{location:"beach", status:SCHEDULE_RELAXING},//noon
		{location:"beach", status:SCHEDULE_RELAXING},//2pm
		{location:"beach", status:SCHEDULE_RELAXING},//4pm
		{location:"beach", status:SCHEDULE_RELAXING},//6pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//10pm
		//thursday
		{location:"dorms", status:SCHEDULE_DROWSING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_SLEEPING},//6am
		{location:"dorms", status:SCHEDULE_WAKING},//8am
		{location:"cafeteria", status:SCHEDULE_EATING},//10am
		{location:"beach", status:SCHEDULE_RELAXING},//noon
		{location:"beach", status:SCHEDULE_RELAXING},//2pm
		{location:"beach", status:SCHEDULE_RELAXING},//4pm
		{location:"beach", status:SCHEDULE_RELAXING},//6pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//10pm
		//friday
		{location:"dorms", status:SCHEDULE_DROWSING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_SLEEPING},//6am
		{location:"dorms", status:SCHEDULE_WAKING},//8am
		{location:"cafeteria", status:SCHEDULE_EATING},//10am
		{location:"beach", status:SCHEDULE_RELAXING},//noon
		{location:"beach", status:SCHEDULE_RELAXING},//2pm
		{location:"beach", status:SCHEDULE_RELAXING},//4pm
		{location:"beach", status:SCHEDULE_RELAXING},//6pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//10pm
		//saturday
		{location:"dorms", status:SCHEDULE_DROWSING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_SLEEPING},//6am
		{location:"dorms", status:SCHEDULE_WAKING},//8am
		{location:"cafeteria", status:SCHEDULE_EATING},//10am
		{location:"beach", status:SCHEDULE_RELAXING},//noon
		{location:"beach", status:SCHEDULE_RELAXING},//2pm
		{location:"beach", status:SCHEDULE_RELAXING},//4pm
		{location:"beach", status:SCHEDULE_RELAXING},//6pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//10pm
	],
}
CHARACTER_DATA.amvei = {
	name : "Amvei",
	gender : GENDER_NB,
	wegender : GENDER_NB,
	age : 21,
	paramsBase : {
		morality : 60,
		legality : 50,
		friendliness : 60,
		selfesteem : 40,
		willpower : 60,
		psiaware : 20,
		arcaware : 80,
		sluttiness : 50,
	},
	body : {
		penis : true,
		vagina : true,
	},
	likes : {
		smalltalk : .8,
	},
	skills : {
		healing : 1,
	},
	roomLocation : "dorms",
	dialog : {
		greeting : [
			{text : "...Um, hi.", reqs:[{type:"affinity", compare:"max", amount:ACQUAINT_MET}]},
			{text : "Hi, [playername]. What's going on?", reqs:[{type:"affinity", compare:"min", amount:ACQUAINT_MET}]},
			{text : "Hi, [playername]. How have you been?", reqs:[{type:"affinity", compare:"min", amount:ACQUAINT_MET}]},
		],
		introduction : [
			{log : [
				{speaker:"Amvei", text:"...Um, hi."},
			]},
		],
		/*knock_drowsing_goway : [
			{log : [
				{text:"Amvei opens the door ajar. She has a toothbrush in her mouth and a grumpy expression."},
				{speaker:"Amvei", text:"What?"},
				{text:"She hardly waits for an answer before closing the door in your face."},
			]},
		],
		knock_drowsing_in : [
			{log : [
				{speaker:"Amvei", text:"Oh, hey, [playername]. I was just getting ready for bed."},
			]},
		],*/
		smalltalk : [
			{log : [
				{speaker:"Amvei", text:"I love the library. It's so peaceful and quiet."},
			]},
		],
		ask : [
			{id:"whyhere", text:"What brings you to Asolaz?", reqs:{type:"affinity", compare:"min", amount:10}, log:[
				{speaker:"Amvei", text:"I've wantet to  come here as long as I've known I had the potential for magic."},
			], firstUps:[
				{action:"charParamUp", param:"acquaint", by:5, upto:50},
			]},
		],
		knock_offersleep : [
			{log : [
				{speaker:"Amvei", text:"Oh hey, [pname]. I was just getting ready for bed."},
				{speaker:"Amvei", text:"...Would you like to... go to bed with me?"},
			]},
		],
		room_late_leave : [
			{log : [
				{speaker:"Amvei", text:"Sorry, I shouldn't stay up much longer. Talk to you later?"},
			]},
			
		],
		room_late_offersleep : [
			{log : [
				{speaker:"Amvei", text:"Oh, it's getting late. I'll be going to bed soon."},
				{speaker:"Amvei", text:"...Would you like to... go to bed with me?"},
			]},
		],
	},
	weeklySchedule : [
		//sunday
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//midnight
		{location:"dorms", status:SCHEDULE_DROWSING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_SLEEPING},//6am
		{location:"dorms", status:SCHEDULE_SLEEPING},//8am
		{location:"dorms", status:SCHEDULE_WAKING},//10am
		{location:"cafeteria", status:SCHEDULE_EATING},//noon
		{location:"library", status:SCHEDULE_STUDYING},//2pm
		{location:"library", status:SCHEDULE_STUDYING},//4pm
		{location:"library", status:SCHEDULE_STUDYING},//6pm
		{location:"library", status:SCHEDULE_RELAXING},//8pm
		{location:"library", status:SCHEDULE_RELAXING},//10pm
		//monday
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//midnight
		{location:"dorms", status:SCHEDULE_DROWSING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_SLEEPING},//6am
		{location:"dorms", status:SCHEDULE_SLEEPING},//8am
		{location:"dorms", status:SCHEDULE_WAKING},//10am
		{location:"cafeteria", status:SCHEDULE_EATING},//noon
		{location:"library", status:SCHEDULE_STUDYING},//2pm
		{location:"library", status:SCHEDULE_STUDYING},//4pm
		{location:"library", status:SCHEDULE_STUDYING},//6pm
		{location:"library", status:SCHEDULE_RELAXING},//8pm
		{location:"library", status:SCHEDULE_RELAXING},//10pm
		//tuesday
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//midnight
		{location:"dorms", status:SCHEDULE_DROWSING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_SLEEPING},//6am
		{location:"dorms", status:SCHEDULE_SLEEPING},//8am
		{location:"dorms", status:SCHEDULE_WAKING},//10am
		{location:"cafeteria", status:SCHEDULE_EATING},//noon
		{location:"library", status:SCHEDULE_STUDYING},//2pm
		{location:"library", status:SCHEDULE_STUDYING},//4pm
		{location:"library", status:SCHEDULE_STUDYING},//6pm
		{location:"library", status:SCHEDULE_RELAXING},//8pm
		{location:"library", status:SCHEDULE_RELAXING},//10pm
		//wednesday
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//midnight
		{location:"dorms", status:SCHEDULE_DROWSING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_SLEEPING},//6am
		{location:"dorms", status:SCHEDULE_SLEEPING},//8am
		{location:"dorms", status:SCHEDULE_WAKING},//10am
		{location:"cafeteria", status:SCHEDULE_EATING},//noon
		{location:"library", status:SCHEDULE_STUDYING},//2pm
		{location:"library", status:SCHEDULE_STUDYING},//4pm
		{location:"library", status:SCHEDULE_STUDYING},//6pm
		{location:"library", status:SCHEDULE_RELAXING},//8pm
		{location:"library", status:SCHEDULE_RELAXING},//10pm
		//thursday
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//midnight
		{location:"dorms", status:SCHEDULE_DROWSING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_SLEEPING},//6am
		{location:"dorms", status:SCHEDULE_SLEEPING},//8am
		{location:"dorms", status:SCHEDULE_WAKING},//10am
		{location:"cafeteria", status:SCHEDULE_EATING},//noon
		{location:"library", status:SCHEDULE_STUDYING},//2pm
		{location:"library", status:SCHEDULE_STUDYING},//4pm
		{location:"library", status:SCHEDULE_STUDYING},//6pm
		{location:"library", status:SCHEDULE_RELAXING},//8pm
		{location:"library", status:SCHEDULE_RELAXING},//10pm
		//friday
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//midnight
		{location:"dorms", status:SCHEDULE_DROWSING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_SLEEPING},//6am
		{location:"dorms", status:SCHEDULE_SLEEPING},//8am
		{location:"dorms", status:SCHEDULE_WAKING},//10am
		{location:"cafeteria", status:SCHEDULE_EATING},//noon
		{location:"library", status:SCHEDULE_STUDYING},//2pm
		{location:"library", status:SCHEDULE_STUDYING},//4pm
		{location:"library", status:SCHEDULE_STUDYING},//6pm
		{location:"library", status:SCHEDULE_RELAXING},//8pm
		{location:"library", status:SCHEDULE_RELAXING},//10pm
		//saturday
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//midnight
		{location:"dorms", status:SCHEDULE_DROWSING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_SLEEPING},//6am
		{location:"dorms", status:SCHEDULE_SLEEPING},//8am
		{location:"dorms", status:SCHEDULE_WAKING},//10am
		{location:"cafeteria", status:SCHEDULE_EATING},//noon
		{location:"library", status:SCHEDULE_STUDYING},//2pm
		{location:"library", status:SCHEDULE_STUDYING},//4pm
		{location:"library", status:SCHEDULE_STUDYING},//6pm
		{location:"library", status:SCHEDULE_RELAXING},//8pm
		{location:"library", status:SCHEDULE_RELAXING},//10pm
	],
}
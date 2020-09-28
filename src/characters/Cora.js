CHARACTER_DATA.cora = {
	name : "Cora",
	gender : GENDER_FEMALE,
	wegender : GENDER_MALE,
	age : 22,
	paramsBase : {
		morality : 70,
		legality : 60,
		friendliness : 80,
		selfesteem : 50,
		willpower : 60,
		psiaware : 10,
		arcaware : 70,
		sluttiness : 50,
	},
	body : {
		penis : false,
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
			{text : "Oh, hey.", reqs:[{type:"cparam", param:"acquaint", compare:"max", amount:ACQUAINT_MET}]},
			{text : "Oh hey, [playername]. What's up?", reqs:[{type:"cparam", param:"acquaint", compare:"min", amount:ACQUAINT_MET}]},
			{text : "Oh hey, [playername]. How's it going?", reqs:[{type:"cparam", param:"acquaint", compare:"min", amount:ACQUAINT_MET}]},
		],
		introduction : [
			{log : [
				{speaker:"Cora", text:"Oh, it's nice to meet you. I'm Cora, I specialize in healing arcana and I work in the infirmary."},
			]},
		],
		/*knock_drowsing_goway : [
			{log : [
				{text:"Cora opens the door ajar. She has a toothbrush in her mouth and a grumpy expression."},
				{speaker:"Cora", text:"What?"},
				{text:"She hardly waits for an answer before closing the door in your face."},
			]},
		],
		knock_drowsing_in : [
			{log : [
				{speaker:"Cora", text:"Oh, hey, [playername]. I was just getting ready for bed."},
			]},
		],*/
		smalltalk : [
			{log : [
				{speaker:"Cora", text:"I work in the infirmary on Sunday, Monday, Wednesday, Thursday, and Friday."},
				{speaker:"Cora", text:"It's not too hard, and the patients are always happy to see me. Oh, and I can practice my healing arcana, too."},
			]},
			{log : [
				{speaker:"Cora", text:"Have you been to the library? There are plenty of interesting books there, and it's a great place to study."},
				{speaker:"Cora", text:"I don't have the time to go there often, but I'm usually there between classes on Tuesday and Thursday."},
			]},
			/*{log : [
				{speaker:"Cora", text:""},
				{speaker:"Cora", text:"I don't have the time to go there often."},
			]},*/
		],
		ask : [
			{id:"whyhere", text:"What brings you to Asolaz?", reqs:{type:"cparam", param:"acquaint", compare:"min", amount:10}, log:[
				{speaker:"Cora", text:"I'm here to practice healing arcana."},
			], firstUps:[
				{action:"charParamUp", param:"acquaint", by:5, upto:50},
			]},
		],
		knock_offersleep : [
			{log : [
				{speaker:"Cora", text:"Oh hey, [pname]. I was just getting ready for bed."},
				{speaker:"Cora", text:"...Would you like to go to bed with me?"},
			]},
		],
		room_late_leave : [
			{log : [
				{speaker:"Cora", text:"Oh, it's getting late. See you later, [pname]."},
			]},
			
		],
		room_late_offersleep : [
			{log : [
				{speaker:"Cora", text:"Oh, it's getting late. I'll be going to bed soon."},
				{speaker:"Cora", text:"...Would you like to go to bed with me?"},
			]},
		],
	},
	weeklySchedule : [
		//sunday
		{location:"dorms", status:SCHEDULE_SLEEPING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_WAKING},//6am
		{location:"infirmary", status:SCHEDULE_WORKING},//8am
		{location:"infirmary", status:SCHEDULE_WORKING},//10am
		{location:"cafeteria", status:SCHEDULE_EATING},//noon
		{location:"infirmary", status:SCHEDULE_WORKING},//2pm
		{location:"infirmary", status:SCHEDULE_WORKING},//4pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//6pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8pm
		{location:"dorms", status:SCHEDULE_DROWSING},//10pm
		//monday
		{location:"dorms", status:SCHEDULE_SLEEPING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_WAKING},//6am
		{location:"infirmary", status:SCHEDULE_WORKING},//8am
		{location:"infirmary", status:SCHEDULE_WORKING},//10am
		{location:"cafeteria", status:SCHEDULE_EATING},//noon
		{location:"infirmary", status:SCHEDULE_WORKING},//2pm
		{location:"infirmary", status:SCHEDULE_WORKING},//4pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//6pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8pm
		{location:"dorms", status:SCHEDULE_DROWSING},//10pm
		//tuesday
		{location:"dorms", status:SCHEDULE_SLEEPING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_WAKING},//6am
		{location:"library", status:SCHEDULE_STUDYING},//8am
		{location:"class_arc", status:SCHEDULE_LEARNING},//10am
		{location:"cafeteria", status:SCHEDULE_EATING},//noon
		{location:"library", status:SCHEDULE_STUDYING},//2pm
		{location:"class_med", status:SCHEDULE_LEARNING},//4pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//6pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8pm
		{location:"dorms", status:SCHEDULE_DROWSING},//10pm
		//wednesday
		{location:"dorms", status:SCHEDULE_SLEEPING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_WAKING},//6am
		{location:"infirmary", status:SCHEDULE_WORKING},//8am
		{location:"infirmary", status:SCHEDULE_WORKING},//10am
		{location:"cafeteria", status:SCHEDULE_EATING},//noon
		{location:"infirmary", status:SCHEDULE_WORKING},//2pm
		{location:"infirmary", status:SCHEDULE_WORKING},//4pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//6pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8pm
		{location:"dorms", status:SCHEDULE_DROWSING},//10pm
		//thursday
		{location:"dorms", status:SCHEDULE_SLEEPING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_WAKING},//6am
		{location:"library", status:SCHEDULE_STUDYING},//8am
		{location:"class_arc", status:SCHEDULE_LEARNING},//10am
		{location:"cafeteria", status:SCHEDULE_EATING},//noon
		{location:"library", status:SCHEDULE_STUDYING},//2pm
		{location:"class_med", status:SCHEDULE_LEARNING},//4pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//6pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8pm
		{location:"dorms", status:SCHEDULE_DROWSING},//10pm
		//friday
		{location:"dorms", status:SCHEDULE_SLEEPING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_WAKING},//6am
		{location:"infirmary", status:SCHEDULE_WORKING},//8am
		{location:"infirmary", status:SCHEDULE_WORKING},//10am
		{location:"cafeteria", status:SCHEDULE_EATING},//noon
		{location:"infirmary", status:SCHEDULE_WORKING},//2pm
		{location:"infirmary", status:SCHEDULE_WORKING},//4pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//6pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8pm
		{location:"dorms", status:SCHEDULE_DROWSING},//10pm
		//saturday
		{location:"dorms", status:SCHEDULE_DROWSING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_SLEEPING},//6am
		{location:"dorms", status:SCHEDULE_SLEEPING},//8am
		{location:"infirmary", status:SCHEDULE_WAKING},//10am
		{location:"cafeteria", status:SCHEDULE_EATING},//noon
		{location:"gym", status:SCHEDULE_EXERCISING},//2pm
		{location:"infirmary", status:SCHEDULE_WORKING},//4pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//6pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8pm
		{location:"dorms", status:SCHEDULE_DROWSING},//10pm
	],
}
CHARACTER_DATA.tylia = {
	name : "Tylia",
	gender : GENDER_FEMALE,
	wegender : GENDER_MALE,
	age : 24,
	colors : {
		light : "#FF30B0",
	},
	body : {
		penis : true,
		vagina : false,
	},
	likes : {
		smalltalk : LIKES_SOME,
		labyrinth : LIKES_SOME,
	},
	skills : {
		//healing : 1,
	},
	roomLocation : "dorms",
	dialog : {
		introduction : [
			{log : [
				{charimg:{character:"tylia", outfit:"default", pose:"standing"}},
				{speakerID:"tylia", text:"Oh, it's nice to meet you. I'm Cora, I specialize in healing arcana and I work in the clinic."},
			]},
		],
		greeting : [
			{log : [
				{speakerID:"tylia", text:"Hi, [playername]. What's up?"},
			]},
			{log : [
				{speakerID:"tylia", text:"Hi, [playername]. How's things?"},
			]},
		],
		/*knock_drowsing_goway : [
			{log : [
				{text:"Cora opens the door ajar. She has a toothbrush in her mouth and a grumpy expression."},
				{speakerID:"tylia", text:"What?"},
				{text:"She hardly waits for an answer before closing the door in your face."},
			]},
		],
		knock_drowsing_in : [
			{log : [
				{speakerID:"tylia", text:"Oh, hey, [playername]. I was just getting ready for bed."},
			]},
		],*/
		smalltalk : [
			{log : [
				{speakerID:"tylia", text:"I'm not only good with scissors and needles in the tailory."},
				{speakerID:"tylia", text:"I can hold my own in combat with my signature blade, too."},
			]},
		],
		ask : [
			/*{id:"whyhere", text:"What brings you to Asolaz?", reqs:{type:"affinity", compare:"min", amount:10}, log:[
				{speakerID:"tylia", text:"I'm here to practice healing arcana."},
			], firstUps:[
				{action:"charParamUp", param:"acquaint", by:5, upto:50},
			]},*/
		],
		/*knock_offersleep : [
			{log : [
				{speakerID:"tylia", text:"Oh hey, [pname]. I was just getting ready for bed."},
				{speakerID:"tylia", text:"...Would you like to go to bed with me?"},
			]},
		],
		room_late_leave : [
			{log : [
				{speakerID:"tylia", text:"Oh, it's getting late. See you later, [pname]."},
			]},
			
		],
		room_late_offersleep : [
			{log : [
				{speakerID:"tylia", text:"Oh, it's getting late. I'll be going to bed soon."},
				{speakerID:"tylia", text:"...Would you like to go to bed with me?"},
			]},
		],*/
	},
	weeklySchedule : [
		//sunday
		{location:"dorms", status:SCHEDULE_DROWSING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_SLEEPING},//6am
		{location:"dorms", status:SCHEDULE_WAKING},//8am
		{location:"cafeteria", status:SCHEDULE_EATING},//10am
		{location:"tailory", status:SCHEDULE_WORKING},//noon
		{location:"tailory", status:SCHEDULE_WORKING},//2pm
		{location:"tailory", status:SCHEDULE_WORKING},//4pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//6pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//10pm
		//monday
		{location:"dorms", status:SCHEDULE_DROWSING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_SLEEPING},//6am
		{location:"dorms", status:SCHEDULE_WAKING},//8am
		{location:"cafeteria", status:SCHEDULE_EATING},//10am
		{location:"tailory", status:SCHEDULE_WORKING},//noon
		{location:"tailory", status:SCHEDULE_WORKING},//2pm
		{location:"tailory", status:SCHEDULE_WORKING},//4pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//6pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//10pm
		//tuesday
		{location:"dorms", status:SCHEDULE_DROWSING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_SLEEPING},//6am
		{location:"dorms", status:SCHEDULE_WAKING},//8am
		{location:"cafeteria", status:SCHEDULE_EATING},//10am
		{location:"tailory", status:SCHEDULE_WORKING},//noon
		{location:"tailory", status:SCHEDULE_WORKING},//2pm
		{location:"tailory", status:SCHEDULE_WORKING},//4pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//6pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//10pm
		//wednesday
		{location:"dorms", status:SCHEDULE_DROWSING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_SLEEPING},//6am
		{location:"dorms", status:SCHEDULE_WAKING},//8am
		{location:"cafeteria", status:SCHEDULE_EATING},//10am
		{location:"tailory", status:SCHEDULE_WORKING},//noon
		{location:"tailory", status:SCHEDULE_WORKING},//2pm
		{location:"tailory", status:SCHEDULE_WORKING},//4pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//6pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//10pm
		//thursday
		{location:"dorms", status:SCHEDULE_DROWSING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_SLEEPING},//6am
		{location:"dorms", status:SCHEDULE_WAKING},//8am
		{location:"cafeteria", status:SCHEDULE_EATING},//10am
		{location:"tailory", status:SCHEDULE_WORKING},//noon
		{location:"tailory", status:SCHEDULE_WORKING},//2pm
		{location:"tailory", status:SCHEDULE_WORKING},//4pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//6pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//10pm
		//friday
		{location:"dorms", status:SCHEDULE_DROWSING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_SLEEPING},//6am
		{location:"dorms", status:SCHEDULE_WAKING},//8am
		{location:"cafeteria", status:SCHEDULE_EATING},//10am
		{location:"tailory", status:SCHEDULE_WORKING},//noon
		{location:"tailory", status:SCHEDULE_WORKING},//2pm
		{location:"tailory", status:SCHEDULE_WORKING},//4pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//6pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//10pm
		//saturday
		{location:"dorms", status:SCHEDULE_DROWSING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_SLEEPING},//6am
		{location:"dorms", status:SCHEDULE_WAKING},//8am
		{location:"cafeteria", status:SCHEDULE_EATING},//10am
		{location:"tailory", status:SCHEDULE_WORKING},//noon
		{location:"tailory", status:SCHEDULE_WORKING},//2pm
		{location:"tailory", status:SCHEDULE_WORKING},//4pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//6pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//10pm
	],
	credits3d : [
		{what:"Base Model", name:"Genesis 8 Male", by:"DAZ 3D", daz:"genesis-8-starter-essentials"},
		{what:"Morphs, Textures, Sweater, Skirt", name:"Diana", by:"RenderGuyNY", sharecg:92884, deviantart:"renderguyny/art/Diana-for-G8M-Main-Promo-778168332"},
		{what:"Additional Morphs", name:"Transgender", by:"AgentUnawarese", deviantart:"agentunawares/art/Transgender-Genesis-8-723851486"},
		{what:"Hair", name:"Charm Hair", by:"DAZ 3D", daz:"charm-hair"},
		{what:"Thighhighs", name:"Pretty Look", by:"zoro_d", renderosity:83823},
		{what:"Standing Pose", name:"WkD3D Casual Standing Poses", by:"tomcatoliver", renderosity:86168},
		{what:"Genitalia", name:"Dicktator", by:"meipe", sites:[{name:"Renderotica", href:"https://www.renderotica.com/store/sku/57748_Dicktator-For-Genesis-8-Male"}], adult:true, paid:true},
		{what:"Anal against Wall pose", name:"Original", by:"goldenPiGames", adult:true},
	]
}
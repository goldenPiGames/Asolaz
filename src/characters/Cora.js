CHARACTER_DATA.cora = {
	name : "Cora",
	gender : GENDER_FEMALE,
	wegender : GENDER_MALE,
	age : 22,
	colors : {
		light : "#FF80B0",
	},
	body : {
		penis : false,
		vagina : true,
	},
	likes : {
		smalltalk : LIKES_MUCH,
		labyrinth : LIKES_SOME,
	},
	skills : {
		healing : 1,
	},
	roomLocation : "dorms",
	dialog : {
		introduction : [
			{log : [
				{charimg:{character:"cora", outfit:"default", pose:"standing"}},
				{speakerID:"cora", text:"Oh, it's nice to meet you. I'm Cora, I specialize in healing arcana and I work in the clinic."},
			]},
		],
		greeting : [
			{log : [
				{speakerID:"cora", text:"Oh hey, [playername]. What's up?"},
			]},
			{log : [
				{speakerID:"cora", text:"Oh hey, [playername]. How's it going?"},
			]},
		],
		/*knock_drowsing_goway : [
			{log : [
				{text:"Cora opens the door ajar. She has a toothbrush in her mouth and a grumpy expression."},
				{speakerID:"cora", text:"What?"},
				{text:"She hardly waits for an answer before closing the door in your face."},
			]},
		],
		knock_drowsing_in : [
			{log : [
				{speakerID:"cora", text:"Oh, hey, [playername]. I was just getting ready for bed."},
			]},
		],*/
		smalltalk : [
			{log : [
				{speakerID:"cora", text:"I work in the clinic on Sunday, Monday, Wednesday, Thursday, and Friday."},
				{speakerID:"cora", text:"It's not too hard, and the patients are always happy to see me. Oh, and I can practice my healing arcana, too."},
			]},
			{log : [
				{speakerID:"cora", text:"Have you been to the library? There are plenty of interesting books there, and it's a great place to study."},
				{speakerID:"cora", text:"I don't have the time to go there often, but I'm usually there between classes on Tuesday and Thursday."},
			]},
			/*{log : [
				{speakerID:"cora", text:""},
				{speakerID:"cora", text:"I don't have the time to go there often."},
			]},*/
		],
		ask : [
			{id:"whyhere", text:"What brings you to Asolaz?", reqs:{type:"affinity", compare:"min", amount:10}, log:[
				{speakerID:"cora", text:"I'm here to practice healing arcana."},
			]},
		],
		knock_offersleep : [
			{log : [
				{speakerID:"cora", text:"Oh hey, [pname]. I was just getting ready for bed."},
				{speakerID:"cora", text:"...Would you like to go to bed with me?"},
			]},
		],
		room_late_leave : [
			{log : [
				{speakerID:"cora", text:"Oh, it's getting late. See you later, [pname]."},
			]},
			
		],
		room_late_offersleep : [
			{log : [
				{speakerID:"cora", text:"Oh, it's getting late. I'll be going to bed soon."},
				{speakerID:"cora", text:"...Would you like to go to bed with me?"},
			]},
		],
	},
	weeklySchedule : [
		//sunday
		{location:"dorms", status:SCHEDULE_SLEEPING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_WAKING},//6am
		{location:"clinic", status:SCHEDULE_WORKING},//8am
		{location:"clinic", status:SCHEDULE_WORKING},//10am
		{location:"cafeteria", status:SCHEDULE_EATING},//noon
		{location:"clinic", status:SCHEDULE_WORKING},//2pm
		{location:"clinic", status:SCHEDULE_WORKING},//4pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//6pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8pm
		{location:"dorms", status:SCHEDULE_DROWSING},//10pm
		//monday
		{location:"dorms", status:SCHEDULE_SLEEPING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_WAKING},//6am
		{location:"clinic", status:SCHEDULE_WORKING},//8am
		{location:"clinic", status:SCHEDULE_WORKING},//10am
		{location:"cafeteria", status:SCHEDULE_EATING},//noon
		{location:"clinic", status:SCHEDULE_WORKING},//2pm
		{location:"clinic", status:SCHEDULE_WORKING},//4pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//6pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8pm
		{location:"dorms", status:SCHEDULE_DROWSING},//10pm
		//tuesday
		{location:"dorms", status:SCHEDULE_SLEEPING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_WAKING},//6am
		{location:"library", status:SCHEDULE_STUDYING},//8am
		{location:"library", status:SCHEDULE_STUDYING},//class//10am
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
		{location:"clinic", status:SCHEDULE_WORKING},//8am
		{location:"clinic", status:SCHEDULE_WORKING},//10am
		{location:"cafeteria", status:SCHEDULE_EATING},//noon
		{location:"clinic", status:SCHEDULE_WORKING},//2pm
		{location:"clinic", status:SCHEDULE_WORKING},//4pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//6pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8pm
		{location:"dorms", status:SCHEDULE_DROWSING},//10pm
		//thursday
		{location:"dorms", status:SCHEDULE_SLEEPING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_WAKING},//6am
		{location:"library", status:SCHEDULE_STUDYING},//8am
		{location:"library", status:SCHEDULE_STUDYING},//class//10am
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
		{location:"clinic", status:SCHEDULE_WORKING},//8am
		{location:"clinic", status:SCHEDULE_WORKING},//10am
		{location:"cafeteria", status:SCHEDULE_EATING},//noon
		{location:"clinic", status:SCHEDULE_WORKING},//2pm
		{location:"clinic", status:SCHEDULE_WORKING},//4pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//6pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8pm
		{location:"dorms", status:SCHEDULE_DROWSING},//10pm
		//saturday
		{location:"dorms", status:SCHEDULE_DROWSING},//midnight
		{location:"dorms", status:SCHEDULE_SLEEPING},//2am
		{location:"dorms", status:SCHEDULE_SLEEPING},//4am
		{location:"dorms", status:SCHEDULE_SLEEPING},//6am
		{location:"dorms", status:SCHEDULE_SLEEPING},//8am
		{location:"clinic", status:SCHEDULE_WAKING},//10am
		{location:"cafeteria", status:SCHEDULE_EATING},//noon
		{location:"gym", status:SCHEDULE_EXERCISING},//2pm
		{location:"clinic", status:SCHEDULE_WORKING},//4pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//6pm
		{location:"dorms", status:SCHEDULE_RELAXING_IN_ROOM},//8pm
		{location:"dorms", status:SCHEDULE_DROWSING},//10pm
	],
	credits3d : [
		{what:"Base Model", name:"Genesis 8 Female", by:"DAZ 3D", daz:"genesis-8-starter-essentials"},
		{what:"Morphs", name:"SY 200 Morphs", by:"SickleYield", sharecg:91888, deviantart:"sickleyield/art/SY-200-Free-Morphs-Genesis-8-756465264"},
		{what:"Dress", name:"Dress C", by:"amyaimei", deviantart:"amyaimei/art/Dress-C-for-Genesis-8-Female-749167075"},
		{what:"Dress Texture", name:"Original", by:"goldenPiGames"},
		{what:"Dress Normal", name:"Fabric Normal", by:"nomeradona", sites:[{name:"WordPress", href:"https://nomeradona.wordpress.com/resources/resources-and-download/nomeradona_fabric_normal/"}]},
		{what:"Swimsuit", name:"Swimsuit 15", by:"Adam Thwaites", mostdigitalcreations:"g8f_swimsuit_15"},
		{what:"Underwear", name:"Underwear", by:"amyaimei", deviantart:"amyaimei/art/Underwear-Set-for-Genesis-8-Female-758121481", adult:true},
		{what:"Hair", name:"French Twist Hair", by:"zoro_d", renderosity:81937},
		{what:"Shoes", name:"Loafers", by:"amyaimei", deviantart:"amyaimei/art/Loafers-for-Genesis-8-Female-713978510"},
		{what:"Standing Pose", name:"WkD3D Casual Standing Poses", by:"tomcatoliver", renderosity:86168},
		{what:"Kneeling BJ Pose", name:"Original", by:"goldenPiGames", adult:true},
		{what:"Genitalia", name:"Golden Palace", by:"meipe", sites:[{name:"Renderotica", href:"https://www.renderotica.com/store/sku/57311_Golden-Palace-For-Genesis-8-Female"}], adult:true, paid:true},
	]
}
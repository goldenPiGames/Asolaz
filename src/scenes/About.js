SCENES.about_first = {
	log : [
		/*{speaker:"Letter", text:"Welcome to Asolaz! This is a text-based porn game, in case you couldn't tell."},
		{speaker:"Game", text:"This is an erotic game with the intent to immerse you by giving you choice in what you say and what you do, rather than shackle you down with concrete routes."},
		{speaker:"Game", text:"There will be people to meet, things to do, challenges to overcome, and mysteries to solve, and you can deal with them all as you please."},
		{speaker:"Game", text:"Will you befriend them?  Will you ignore them? Will you dominate them? Will you do any of these things with each individual character depending on whether you like them?"},
		{speaker:"Game", text:"But before we begin, you must confirm that you are of legal age to view adult content."},
		{choices: [
			{text:"Yes, I am.", action:"continue"},
			{text:"No, I am not.", action:"gameover"},
		]},*/
		//{speaker:"Game", text:"Now it's time to create your character."},
		{speaker:"Letter", text:"Please indicate your identified gender (pronouns)."},
		//{action:"createchar"},
		{choices: [
			{text:"Male (he|him|his)", action:()=>data.player.gender=GENDER_MALE},
			{text:"Female (she|her|hers)", action:()=>data.player.gender=GENDER_FEMALE},
			{text:"Non-binary (they|them|their|theirs)", action:()=>data.player.gender=GENDER_NB},
			//{text:"Whatever", action:()=>data.player.gender=GENDER_ANY},
		]},
		{speaker:"Game", text:"Now then, welcome!", location:"dorms-player"},
		{action:"return"},
	]
}

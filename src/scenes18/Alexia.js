CHARACTER_DATA.alexia.dialog.sex = [
	{
		id : "quickiebj",
		name : "Ask for a quick blowjob",
		reqs : [{type:"outfit", outfit:"default"}, {type:"genconsent", min:.5}, {type:"pbody", part:"penis"}],
		//Lab Rats: hub_scenes.rpy:4458
		log : [
			{speaker:"Alexia", text:"I'm not so sure. If you make it a nice long blowjob I think you've got a deal though. Just stand right there and I'll take care of you."},
			{text:"She gives you a wink as she walks over to you and drops to her knees. She gives your shaft a few strokes with her hand, then runs her tongue along its side and bottom a few times.", charimg:{pose:"kneelbj"}},
			"Next she slides you into her mouth, bobbing her head up and down while she runs her tongue along the bottom of your cock.",
			{choices:[{
				text:"Take over.",
				//reqs:[if alexO.slut_score > 85:]
				log: [
				"You place your hands on either side of Alexia's head, holding it still.",
				{text:"Alexia tries to mumble something past your cock, but you aren't able to make out what it is. You start to work your hips back and forth, fucking her open mouth.", charimg:{pose:"kneelbj_deep"}},
				"You pick up speed over the next few minutes. Her drool runs down her chin, dripping down onto the floor and her shirt.",
				"You slam yourself as far down her throat as you can, holding yourself there for a few seconds. She turns her eyes up to you and purrs, throat rumbling around your cock.",
				{choices : [{
					text : "Cum down her throat.",
					log : [
					//me "Get ready to drink it all down you dirty slut!"
					{text:"You go back to pumping in and out of her mouth until you start to cum. Then you push yourself deep down her throat again, holding her tight against your hips as you fire your load right into her stomach.", countdown:"Cum"},
					"Alexia twists and moans as you fill her up, but doesn't try to pull off your cock. When you're finished you take a step back, slipping out of her mouth and letting her take a deep breath.",
					{speaker:"Alexia", text:"Wow... I think I just came a little bit too. Thank you [pname], that was super hot."},
					/*else:
						alex "Wow... That was intense."
						me "Yeah, it was. You felt amazing, thanks Alexia."
						alex "Any time. Wow."*/
					]
				}, {
					text : "Cum on her face.",
					log : [
					//me "Get ready, I'm going to cover your slutty face!"
					"You go back to pumping in and out of her mouth until you start to cum. Then you pull back, leaving her mouth with a wet pop and start to stroke yourself to completion while she looks up at you.",
					{text:"Alexia sticks her tongue out and holds still while you cum. You spray your load over her face, starting with her forehead and working your way down to her chin.", pose:"kneelbj_facial", countdown:"Cum"},
					"Once you're done Alexia leans forward and starts to lick at the tip of your cock.",
					//me "Good girl, get me all cleaned up now."
					"She takes a few minutes, gently sucking on your sensitive cock until she's gotten every last drop of cum.",
					{speaker:"Alexia", name:"Wow... You really did unload."},
					//me "Yeah, I did. You felt amazing, thanks Alexia."
					//alex "Any time. Wow."
					{text:"She takes a few moments to catch her breath, then stands up and looks around for something to get cleaned up with. When she can't find anything she shrugs and uses her sleeve to wipe your cum off her face.", charimg:{pose:"standing"}},
					]
				}]},
				]
			}, {
				text : "Let her keep going.",
				log : [
				"She pulls off with a wet pop, stroking your slippery dick while she talks to you.",
				/*if alexO.cumslut:
					alex "Oh yeah, I want you to give me a nice big load. Just let me know where you want to finish. You can put that hot cum wherever you want [pname]."
				else:*/
				{speaker:"Alexia", text:"Sounds good to me. Just let me know where you want to finish, okay?"},
				"With that she slides you back into her mouth, blowing you faster and deeper than before. She pauses occasionally to push herself as far down your cock as she can manage, rubbing her nose against your pubes.",
				"It's not long before you feel your core tensing up as your orgasm approaches.",
				{choices:[{
					text : "Cum in her mouth.",
					//me "Alright Alexia, I'm going to finish right in your mouth."
					log : [
					"She moans something up at you, nodding as much as she can while she sucks you off. She speeds up even more, your cock making wet smacking noises as it bounces against the back of her throat.",
					{text:"Alexia pulls back just before you cum, leaving her lips wrapped around the tip of your penis. She looks up at you, staring into your eyes while you empty your balls into her mouth.", countdown:"Cum"},
					//me "Fuck, that's right! That's a good girl!"
					//show alex blow16 at right
					{text:"When you're finished you feel her tongue swirl against your tip, licking off the last few 	drips, then she leans back and opens up her mouth. Her tongue plays through your semen while you watch her.", charimg:{pose:"kneelbj_inmouth"}},
					"After a few moments she closes her mouth, swallows, and takes a deep breath.",
					{speaker:"Alexia", text:"Wow, you really gave me a lot..."},
					//me "You handled it like a champ. Thanks Alexia."
					]
				}, {
					text : "Cum on her face.",
					log : [
					//me "Alright Alexia, I'm going to finish all over your pretty little face."
					"She moans something up at you, nodding as much as she can while she sucks you off. She speeds up even more, your cock making wet smacking noises as it bounces against the back of her throat.",
					"You take a step back just before you're going to cum, leaving Alexia's mouth with a sudden pop. You grab your cock and stroke yourself off while she looks up at you.",
					{text:"Alexia gasps as you fire your load onto her face, starting with her forehead and working your way down to her chin.", charimg:{pose:"kneelbj_facial"}, countdown:"Cum"},
					//me "Fuck, there we go! That's a good girl!"
					"You shake your cock, flicking the last few drops of cum onto her face, then take a step back and admire your work.",
					{speaker:"Alexia", text:"Wow, that was a lot..."},
					//me "That was great Alexia, thanks."
					"She takes a moment to catch her breath, then stands up and looks around for something to get cleaned up with.",
					{text:"When when she can't find anything she shrugs and just uses her sleeve to wipe your cum off her face.", charimg:{pose:"standing"}},
					]
				}]}
				]
			}]},
			{charimg:{pose:"standing"}}
		],
	}
]
const SKILL_CATEGORIES = [
	{id:"mundane", name:"Mundane", subcategories:[
		{id:"martial", name:"Martial"},
		{id:"social", name:"Social"},
		{id:"technology", name:"Technology"},
		//{id:"misc", name:"Misc"},
	]},
	{id:"psionic", name:"Psionic", subcategories:[
		{id:"reading", name:"Reading"},
		{id:"sensory", name:"Sensory"},
		{id:"autopsi", name:"Autopsi"},
		{id:"control", name:"Control"},
	]},
	{id:"arcane", name:"Arcane", subcategories:[
		{id:"energy", name:"Energy"},
		{id:"matter", name:"Matter"},
		{id:"body", name:"Body"},
		{id:"arcmeta", name:"Meta"},
	]},
]


const SKILL_SUBCATEGORIES = [
	
]

const SKILLS_BY_SUBCATEGORY = {
	
}

SKILL_CATEGORIES.forEach(cat => {
	cat.subcategories.forEach(subcat => {
		SKILL_SUBCATEGORIES.push(subcat);
		subcat.skills = [];
		SKILLS_BY_SUBCATEGORY[subcat.id] = subcat.skills;
	})
});

function playerSkillKnown(id) {
	if (!SKILL_DATA[id])
		throwMaybe(id + " is not a valid skill");
	return data.player.skills[id] || 0;
}

function playerSkillPrereqsMet(id) {
	var prereqs = SKILL_DATA[id].prereqs || [];
	return !prereqs.find(pr=>playerSkillKnown(pr.skill)<pr.level);
}

const SKILL_DATA = {
	fast_talker : {
		name : "Fast Talker",
		flavor : "You're a talented and efficient conversationalist. You can talk and listen faster without losing out on anything.",
		costs : [50, 150],
		vnDescs : ["1 extra turn when having a conversation", "2 extra turns when having a conversation"],
		rpgDescs : ["1% faster magic cast speed", "2% faster magic cast speed"],
		category : "mundane",
		subcategory : "social",
		treex : 1,
		treey : 1,
	},
	shift_sense : {
		name : "Shift Sense",
		flavor : "You can shift your senses, allowing you to see and hear as though you're a short distance away from where you actually are.",
		costs : [20, 40, 80],
		vnDescs : ["Eavesdrop around corners in some scenes", "Eavesdrop through doors in some scenes", "Eavesdrop through walls in some scenes"],
		rpgDescs : ["See around corners in dungeons", "See through doors in dungeons", "See through walls in dungeons"],
		category : "psionic",
		subcategory : "sensory",
		treex : 1,
		treey : 1,
	},
	sleep_fast_psi : {
		name : "Super REM",
		flavor : "Your mind is able to filter through REM sleep with amazing efficiency, allowing you to sleep for less time with no adverse effects.",
		costs : [100],
		vnDescs : ["Sleep duration reduced by 1 block."],
		category : "psionic",
		subcategory : "autopsi",
		treex : 1,
		treey : 2,
	},
	sleep_fast_arc : {
		name : "Super NREM",
		flavor : "Your body is able to rest through NREM sleep with amazing efficiency, allowing you to sleep for less time with no adverse effects.",
		costs : [100],
		vnDescs : ["Sleep duration reduced by 1 block."],
		category : "arcane",
		subcategory : "body",
		treex : 1,
		treey : 2,
	},
}
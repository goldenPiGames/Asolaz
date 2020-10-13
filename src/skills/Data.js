const SKILL_CATEGORIES = [
	{id:"mundane", name:"Mundane", subcategories:[
		{id:"martial", name:"Martial"},
		{id:"tech", name:"Technology"},
		{id:"munmisc", name:"Misc"},
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
	
}
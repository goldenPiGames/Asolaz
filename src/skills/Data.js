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

const CATEGORY_MARTIAL = "martial";

const CATEGORY_PSIONIC = "psionic";

const CATEGORY_ARCANE = "arcane";

const SKILL_SUBCATEGORIES = [
	
]


const SKILL_SUBCATEGORY_DATA = [
	
]

const SKILLS_BY_SUBCATEGORY = {
	
}

SKILL_CATEGORIES.forEach(cat => {
	cat.subcategories.forEach(subcat => {
		SKILL_SUBCATEGORY_DATA[subcat.id] = subcat;
		SKILL_SUBCATEGORIES.push(subcat);
		subcat.skills = [];
	})
});

function playerSkillKnown(id) {
	if (!SKILL_DATA[id])
		throwMaybe(id + " is not a valid skill");
	return data.player.skills[id] || 0;
}

function getPlayerSkillAction(id) {
	if (!SKILL_DATA[id].combatActions)
		return false;
	return new (SKILL_DATA[id].combatActions[playerSkillKnown(id)-1])();
}

function playerLearnSkill(id) {
	data.player.skills[id] = playerSkillKnown(id) + 1;
	if (SKILL_DATA[id].combatActions && !data.player.actionsEquipped.length < playerMaxActionsEquipped() && !data.player.actionsEquipped.find(a=>a==id)) {
		data.player.actionsEquipped.push(id);
	}
}

function playerMaxActionsEquipped() {
	return 6;
}

function playerSkillPrereqsMet(id) {
	if (playerSkillKnown(id) >= SKILL_DATA[id].maxLevel)
		return true;
	var prereqs = SKILL_DATA[id].prereqs[playerSkillKnown(id)];
	return !prereqs.find(pr=>!playerSkillPrereqMet(pr, id));
}

function playerSkillPrereqMet(pr, id) {
	switch (pr.type) {
		case "skill":
			return playerSkillKnown(pr.skill) >= (pr.level || 1);
		default:
			throwMaybe(pr.type + " is not a prereq in " + id);
			this.met = true;
	}
}

const SKILL_DATA = {
	
}
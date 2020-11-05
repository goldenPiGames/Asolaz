const SKILL_ID_LIST = [];

for (id in SKILL_DATA) {
	//console.log(SKILLS_BY_SUBCATEGORY, SKILL_DATA[id].subcategory)
	SKILL_ID_LIST.push(id);
	let dat = SKILL_DATA[id];
	dat.maxLevel = dat.costs.length;
	dat.id = id;
	if (!dat.vnDescs)
		dat.vnDescs = new Array(dat.maxLevel).fill("No effect outside of battles.");
	if (!dat.prereqs) {
		dat.prereqs = [[]];
	} else if (!Array.isArray(dat.prereqs[0])) {
		dat.prereqs = [dat.prereqs];
	}
	if (dat.combatActions) {
		dat.combatActions.forEach(a=>{
			a.prototype.skillID = id;
			if (!a.prototype.category)
				a.prototype.category = dat.category;
		});
	}
	SKILL_SUBCATEGORY_DATA[SKILL_DATA[id].subcategory].skills.push(SKILL_DATA[id]);
}
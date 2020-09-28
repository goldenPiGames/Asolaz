for (id in SKILL_DATA) {
	//console.log(SKILLS_BY_SUBCATEGORY, SKILL_DATA[id].subcategory)
	var dat = SKILL_DATA[id];
	dat.maxLevel = dat.costs.length;
	dat.id = id;
	if (!dat.vnDescs)
		dat.vnDescs = new Array(dat.maxLevel).fill("No effect outside of dungeons or battles.");
	if (!dat.rpgDescs)
		dat.rpgDescs = new Array(dat.maxLevel).fill("No effect in dungeons or battles.");
	SKILLS_BY_SUBCATEGORY[SKILL_DATA[id].subcategory].push(SKILL_DATA[id]);
}
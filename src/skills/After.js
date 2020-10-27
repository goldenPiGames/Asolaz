const SKILL_ID_LIST = [];

for (id in SKILL_DATA) {
	//console.log(SKILLS_BY_SUBCATEGORY, SKILL_DATA[id].subcategory)
	SKILL_ID_LIST.push(id);
	let dat = SKILL_DATA[id];
	dat.maxLevel = dat.costs.length;
	dat.id = id;
	if (!dat.vnDescs)
		dat.vnDescs = new Array(dat.maxLevel).fill("No effect outside of dungeons or battles.");
	if (!dat.rpgDescs)
		dat.rpgDescs = new Array(dat.maxLevel).fill("No effect in dungeons or battles.");
	if (dat.rpgActions) {
		dat.rpgActions.forEach(l=>l.forEach(a=>{
			//console.log(a);
			a.prototype.skillID = id;
			//console.log(a.prototype);
		}));
	}
	SKILLS_BY_SUBCATEGORY[SKILL_DATA[id].subcategory].push(SKILL_DATA[id]);
}
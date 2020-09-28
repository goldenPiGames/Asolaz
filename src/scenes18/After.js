const SEX_SCENE_LIST = [];
const SEX_SCENE_DATA_LIST = [];

for (cum in SEX_SCENE_DATA) {
	SEX_SCENE_DATA[cum].id = cum;
	SEX_SCENE_LIST.push(cum);
	SEX_SCENE_DATA_LIST.push(SEX_SCENE_DATA[cum]);
}

//TODO actually filter
function getAvailableSexScenes(character, context) {
	return SEX_SCENE_DATA_LIST.filter(s=>true);
}
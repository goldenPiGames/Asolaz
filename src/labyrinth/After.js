const LABYRINTH_DATA_LIST = [];

for (id in LABYRINTH_DATA) {
	let dat = LABYRINTH_DATA[id];
	dat.id = id;
	LABYRINTH_DATA_LIST.push(dat);
	dat.floorTypeList = [];
	dat.floorTypeDataList = [];
	for (fid in dat.floorTypeData) {
		let fdat = dat.floorTypeData[fid];
		fdat.id = fid;
		dat.floorTypeList.push(fid);
		dat.floorTypeDataList.push(fdat);
		fdat.cons.prototype.labyrinthID = id;
		fdat.name = fdat.cons.prototype.name;
	}
	LOCATION_DATA[LABYRINTH_DATA[id].location].pois.push({
		id : id,
		name : "Enter " + LABYRINTH_DATA[id].name,
		what : "labyrinth",
	});
}
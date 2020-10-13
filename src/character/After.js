const CHARACTER_LIST = [];
const CHARACTER_DATA_LIST = [];

for (car in CHARACTER_DATA) {
	CHARACTER_DATA[car].id = car;
	CHARACTER_LIST.push(car);
	CHARACTER_DATA_LIST.push(CHARACTER_DATA[car]);
	if (!CHARACTER_DATA[car].dialog.sex) {
		CHARACTER_DATA[car].dialog.sex = [];
	}
}
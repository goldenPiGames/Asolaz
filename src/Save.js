var slotLastUsed = localStorage.getItem("AsolazSlotLastUsed") || "A";

function saveGame(slot) {
	localStorage.setItem("AsolazSlot"+slot, JSON.stringify(data));
	if (slot != "A") {
		slotLastUsed = slot;
		localStorage.setItem("AsolazSlotLastUsed", slot);
		saveGame("A");
	}
}

function autosave() {
	saveGame("A");
}

function loadGame(slot) {
	data = JSON.parse(localStorage.getItem("AsolazSlot"+slot));
	CHARACTER_LIST.forEach(car=>{
		if (!data.characters[car]) {
			resetCharacterData(car);
		}
	});
	if (slot != "A") {
		slotLastUsed = slot;
		localStorage.setItem("AsolazSlotLastUsed", slot);
		saveGame("A");
	}
	//resumeGame();
}

function peekGame(slot) {
	return JSON.parse(localStorage.getItem("AsolazSlot"+slot));
}

/*function setCharacterData(name, property, value) {
	if (!data.characters[name])
		data.characters[name] = {};
	data.characters[name][property] = value;
}*/

function newGameData() {
	data = {
		player : {
			id : "player",
			waketime : 7,
			inspiration : 0,
			combatExperience : 0,
			booksRead : {},
			licenses : {},
		},
		characters : {
			
		},
		time : 5,
	}
	CHARACTER_LIST.forEach(resetCharacterData);
	refreshCharStatus();
}
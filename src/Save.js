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

function resetCharacterData(id) {
	var stati = CHARACTER_DATA[id];
	data.characters[id] = {
		id : id,
		paramsBase : {
			
		},
		paramsCore : {
			
		},
		paramsCore_highest : {
			
		},
		paramsCore_lowest : {
			
		},
		memory : {
			
		},
	}
	CHARACTER_PARAMS_START_ZERO.forEach(param=> {
		data.characters[id].paramsBase[param] = 0;
		data.characters[id].paramsCore[param] = 0;
		data.characters[id].paramsCore_highest[param] = 0;
		data.characters[id].paramsCore_lowest[param] = 0;
	});
	CHARACTER_PARAMS_INDIVIDUAL.forEach(param=> {
		if (typeof stati.paramsBase[param] != "number") {
			throwMaybe(id + " does not have param " + param);
			stati.paramsBase[param] = .5;
		}
		data.characters[id].paramsBase[param] = stati.paramsBase[param];
		data.characters[id].paramsCore[param] = stati.paramsBase[param];
		data.characters[id].paramsCore_highest[param] = data.characters[id].paramsCore[param];
		data.characters[id].paramsCore_lowest[param] = data.characters[id].paramsCore[param];
	});
}
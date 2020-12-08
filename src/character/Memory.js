function characterRemembers(memid, character=characterFocus) {
	//console.log(memid, character);
	if (!memid) {
		throwMaybe("no memid specified");
		return false;
	}
	return !!data.characters[character].memory[memid];
}

function setCharacterMemory(memid, character=characterFocus) {
	data.characters[character].memory[memid] = data.time;
}

function hasPlayerMetCharacter(character) {
	return characterRemembers("met_player", character);
}
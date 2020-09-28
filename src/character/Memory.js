function characterRemembers(memid, character=characterFocus) {
	data.characters[character].memory[memid] = data.time;
}

function setCharacterMemory(memid, character=characterFocus) {
	return data.characters[character].memory[memid] = data.time;
}
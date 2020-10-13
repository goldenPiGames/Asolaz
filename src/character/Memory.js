function characterRemembers(memid, character=characterFocus) {
	return !!data.characters[character].memory[memid];
}

function setCharacterMemory(memid, character=characterFocus) {
	rdata.characters[character].memory[memid] = data.time;
}
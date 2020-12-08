

function evalCharReqs(thing, character = characterFocus) {
	//console.log(character, thing)
	if (!thing) {
		return false;
	} else if (thing.reqs || thing.req) {
		return evalCharReqs(thing.reqs || thing.req, character);
	} else if (Array.isArray(thing)) {
		return !thing.find(r=>!evalCharReqs(r, character));
	} else if (thing.type) {
		switch (thing.type) {
			case "affinity":
				var val = data.characters[character].affinity;
				var aga = thing.amount;
				//console.log(val, thing.compare, aga);
				var result;
				switch (thing.compare) {
					case "min": return result = val >= aga;
					case "max": return result = val <= aga;
					case "over": return result = val > aga;
					case "under": return result = val < aga;
					default: return result = val >= aga;
				}
			case "adult":
				return VERSION_ADULT;
			case "pskill":
				return playerSkillKnown(thing.skill) >= (thing.level || 1);
			case "genconsent"://general consent
				return data.characters[character].affinity > 20;//TODO do this
			case "outfit":
				return data.characters[character].outfit == thing.outfit;
			case "outfits":
				return thing.outfits.find(o=>o==data.characters[character].outfit);
			case "location":
				return data.characters[character].location == thing.location;
			case "pbody":
				return data.player.body[thing.part];
			case "memory":
				return characterRemembers(thing.memid, character);
			case "nomemory":
				return !characterRemembers(thing.memid, character);
			case "license":
				if (thing.has == false)
					return !data.player.licenses[thing.license]
				else
					return data.player.licenses[thing.license];
			default:
				console.log(thing);
				throwMaybe(thing.type + " is not a valid req type.");
				return true;
		}
	} else
		return true;
}

const GENCONSENT_LOW = 1;

function filterCharDialog(stuff, character = characterFocus) {
	var all = typeof stuff == "string" ? CHARACTER_DATA[character].dialog[stuff] : stuff;
	var available = all.filter(g=>evalCharReqs(g, character));
	return available;
}

function randomCharDialog(stuff, character = characterFocus) {
	//console.log(stuff, character)
	if (!CHARACTER_DATA[character].dialog[stuff])
		return {log:[{text:"Could not find random line "+stuff+" for character "+character}]};
	var all = typeof stuff == "string" ? CHARACTER_DATA[character].dialog[stuff] : stuff;
	var available = all.filter(g=>evalCharReqs(g, character));
	if (available.length <= 0)
		return all[0];
	return randomTerm(available);
}
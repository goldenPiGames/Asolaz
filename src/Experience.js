/*const EXPERIENCE_FIRSTS = {
	
}*/

function earnInspiration(amount) {
	data.player.inspiration += amount;
	return amount;
}

/*function getExperienceFirst(name) {
	if (!data.player.expFirsts[name]) {
		earnExperience(EXPERIENCE_FIRSTS[name].value
	}
}*/

function getEnemyCexpYield(nem) {
	return Math.ceil(nem.hpMax * nem.level**2 / 100);
}

function getRequiredCexpChangeTo(lev) {
	return getRequiredCexpChangeFrom(lev-1)
}

function getRequiredCexpChangeFrom(lev) {
	if (!lev)
		lev = data.player.combatLevel;
	return Math.ceil(50 * lev**2)
}

/*function getRequiredCexpCumulative(lev) {
	return Math.ceil(10 * lev**3);
}

function getRequiredCexpChangeTo(lev) {
	if (!lev)
		lev = data.player.combatLevel+1;
	return getRequiredCexpCumulative(lev)-getRequiredCexpCumulative(lev-1);
}

function getRequiredCexpChangeFrom(lev) {
	if (!lev)
		lev = data.player.combatLevel;
	return getRequiredCexpCumulative(lev+1)-getRequiredCexpCumulative(lev);
}*/
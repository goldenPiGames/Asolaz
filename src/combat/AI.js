class UnitAI {
	constructor(unit) {
		this.unit = unit;
	}
}

class RandomAI extends UnitAI {
	chooseTurn(battle) {
		var blut = {};
		blut.action = randomTerm(this.unit.getAvailableActions());
		blut.target = randomTerm(battle.getAllTargetable(blut.action, this.unit));
		return blut;
	}
}
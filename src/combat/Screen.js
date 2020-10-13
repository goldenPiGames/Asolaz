function enterCombatH2H(args) {
	switchScreen(new CombatScreen(args));
}

class CombatScreen extends Screen {
	constructor(args) {
		super();
		this.enemies = args.enemies;
		this.after = args.after || returnToLocation;
		this.player = new CombatPlayer();
	}
	update() {
		
	}
	draw() {
		
	}
}

function testCombat() {
	enterCombatH2H({
		enemies : [new EnemyDummy(10)],
	});
}
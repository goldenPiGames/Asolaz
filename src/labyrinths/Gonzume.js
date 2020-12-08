class GonzumePlainsFloor extends LabyrinthFloor {
	constructor(...args) {
		super(...args);
		this.generateBaseGridOpen(20, 20);
		this.openPlaceStairStamps();
		this.openPlaceUselessStamps();
		this.finalize();
	}
}
GonzumePlainsFloor.prototype.name = "Plains";
GonzumePlainsFloor.prototype.music = "Legacy Ruins";
GonzumePlainsFloor.prototype.stamps = [
	{
		grid : [
			[{wall:1},{wall:1},{wall:1}],
			[{wall:1},{wall:0,stairs:1},{wall:1}],
			[{wall:1},{wall:0},{wall:1}],
		],
		stairs:true,
	},
	{
		grid : [
			[{wall:1},{wall:1},{wall:1}],
			[{wall:1},{wall:1},{wall:1}],
			[{wall:1},{wall:0},{wall:1}],
		],
	},
	{
		grid : [
			[{wall:1}],
		],
	},
	{
		grid : [
			[{wall:1},{wall:1}],
			[{wall:1},{wall:1}],
		],
	},
];
GonzumePlainsFloor.prototype.baseEncounterTimer = 16;
GonzumePlainsFloor.prototype.baseEncounterTable = [
	{
		minDepth:0,
		minPartySize:0,
		enemies:[
			{cons:EnemyAxeBeak, levelMult:1},
		],
		music : "BattleField 2",
	},
	{
		minDepth:0,
		minPartySize:0,
		enemies:[
			{cons:EnemyChipmunk, levelMult:1},
		],
		music : "BattleField 2",
	},
	{
		minDepth:0,
		minPartySize:0,
		enemies:[
			{cons:EnemyChipmunk, levelMult:.8},
			{cons:EnemyChipmunk, levelMult:.8},
		],
		music : "BattleField 2",
	},
];

class GonzumeForestFloor extends LabyrinthFloor {
	constructor(...args) {
		super(...args);
		this.generateBaseGridWilson(11, 11);
		this.removeSomeDeadEnds(.6);
		this.finalize();
	}
}
GonzumeForestFloor.prototype.name = "Forest";
GonzumeForestFloor.prototype.music = "Legacy Ruins";
GonzumeForestFloor.prototype.baseEncounterTimer = 16;
GonzumeForestFloor.prototype.baseEncounterTable = [
	{
		minDepth:0,
		minPartySize:0,
		enemies:[
			{cons:EnemyAxeBeak, levelMult:1},
		],
		music : "BattleField 2",
	},
	{
		minDepth:0,
		minPartySize:0,
		enemies:[
			{cons:EnemyChipmunk, levelMult:1},
		],
		music : "BattleField 2",
	},
	{
		minDepth:0,
		minPartySize:0,
		enemies:[
			{cons:EnemyChipmunk, levelMult:.8},
			{cons:EnemyChipmunk, levelMult:.8},
		],
		music : "BattleField 2",
	},
];
GonzumeForestFloor.prototype.stairwellTable = [
	{floorType:"forest", depth:1, baseChance:1},
	{floorType:"forest", depth:2, baseChance:.2},
	{floorType:"plains", depth:2, baseChance:.3},
	//{floorType:"scorched", depth:1, baseChance:.1},
	{floorType:"jungle", depth:1, baseChance:.2},
]


class GonzumeJungleFloor extends LabyrinthFloor {
	constructor(...args) {
		super(...args);
		this.generateBaseGridWilson(13, 13);
		this.removeSomeDeadEnds(.8);
		this.finalize();
	}
}
GonzumeJungleFloor.prototype.name = "Jungle";
GonzumeJungleFloor.prototype.music = "Lost Place 6";
GonzumeJungleFloor.prototype.baseEncounterTimer = 16;
GonzumeJungleFloor.prototype.baseEncounterTable = [
	{
		minDepth:0,
		minPartySize:1,
		enemies:[
			{cons:EnemyAxeBeak, levelMult:1},
		],
		music : "BattleField 2",
	}
];

LABYRINTH_DATA.gonzume = {
	name : "Gonzume",
	location : "forest",
	startDepth : 8,
	startFloorType : "plains",
	floorTypeData : {
		"plains" : {
			cons : GonzumePlainsFloor,
			minDepth : 0,
			next : [
				{floorType:"plains", depth:1, baseChance:1},
				{floorType:"plains", depth:2, baseChance:.2},
				{floorType:"forest", depth:2, baseChance:.6},
				//{floorType:"scorched", depth:1, baseChance:.3},
				{floorType:"jungle", depth:1, baseChance:.3},
			],
		},
		"forest" : {
			cons : GonzumeForestFloor,
			minDepth : 0,
			next : [
				{floorType:"forest", depth:1, baseChance:1},
				{floorType:"forest", depth:2, baseChance:.2},
				{floorType:"plains", depth:2, baseChance:.4},
				{floorType:"jungle", depth:1, baseChance:.3},
			],
		},
		"jungle" : {
			cons : GonzumeJungleFloor,
			minDepth : 0,
			next : [
				{floorType:"jungle", depth:1, baseChance:1},
				{floorType:"jungle", depth:2, baseChance:.2},
				{floorType:"forest", depth:2, baseChance:.4},
				//{floorType:"scorched", depth:1, baseChance:.3},
			],
		},
	},
}
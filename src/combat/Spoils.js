class CombatSpoilsScreen extends Screen {
	constructor(battle) {
		super();
		var nems = battle.enemies;
		this.combatExperience = nems.map(n=>n.getCexpYield()).reduce((a,c)=>a+c);
		this.after = battle.onWin;
		this.continueButton = new Button("Continue", ()=>this.contin(), {stroke:palette.normal, fill:palette.background});
		this.resize();
	}
	resize() {
		this.continueButton.resize(canvas.width-200, canvas.height-50, 190, 40);
	}
	update() {
		if (!this.applied) {
			this.apply();
		}
		this.continueButton.update();
	}
	draw() {
		drawTextInRect("Combat Exp: "+this.combatExperience, 0, 0, canvas.width, 100, {fill:palette.normal});
		this.continueButton.draw();
	}
	apply() {
		data.player.combatExperience += this.combatExperience;
		this.applied = true;
	}
	contin() {
		this.after();
		if (runnee == this)
			returnToLocation();
	}
}

function checkLevelUps(after) {
	if (data.player.combatExperience >= getRequiredCexpChangeFrom(data.player.combatLevel)) {
		data.player.combatExperience -= getRequiredCexpChangeFrom(data.player.combatLevel)
		data.player.combatLevel ++;
		switchScreen(new LevelUpScreen(after));
	} else {
		if (after)
			after();
		else
			returnToLocation();
	}
}

class LevelUpScreen extends Screen {
	constructor(after) {
		super();
		this.after = after;
		//console.log(descriptions)
		this.level = data.player.combatLevel;
		this.increases = getLevelUpIncreases(this.level);
		this.continButton = new Button("Continue", ()=>this.contin());
		/*for (var i = 0; i < this.increases.length; i++) {
			this.strips = this.increases.map(inc=>new LevelUpStrip(inc));
		}*/
		this.resize();
	}
	resize() {
		//var stripXStart = canvas.width / 7;
		//var stripXIncrement = canvas.width / 7;
		//this.yStart = 80;
		//this.yIncrement = Math.floor((mainHeight() - this.yStart) / 8);
		this.continButton.resize(canvas.width-200, canvas.height-50, 190, 40);
	}
	update() {
		//this.hoveredIncreases = [0,0,0,0,0,0,0,0,0];
		this.continButton.update();
		//this.objects.forEach((oj)=>oj.update());
	}
	draw() {
		this.continButton.draw();
		//this.objects.forEach((oj)=>oj.draw());
		drawTextInRect("Level "+this.level, 0, 0, canvas.width, 50, {stroke:palette.normal, fill:palette.background});
		drawTextInRect("I'm gonna put in a thing that lets you choose your stat bonuses, but for now it's just +10 to everything", 0, 60, canvas.width, 100, 25, {stroke:palette.normal, fill:palette.background});
		/*for (var i = 0; i < 8; i++) {
			ctx.fillStyle = this.hoveredIncreases[i] ? palette.hover : palette.normal;
			fillTextInRect(this.leveler.stats[i] + this.hoveredIncreases[i], settings.width - 5, this.yStart + this.yIncrement*i, settings.width/8, 30);
		}*/
		/*for (var i = 0; i < 8; i++) {
			//console.log(descriptions[i])
			this.objects.push(new Label(5, this.yStart + this.yIncrement*i, settings.width, this.yIncrement, STAT_ABBS[i], descriptions[i], settings.normal_color, "left"));
		}*/
	}
	/*stripClicked(strip) {
		for (var i = 0; i < 9; i++) {
			this.leveler.baseStats[i] += strip.increases[i];
		}
		this.leveler.baseStats[STAT_INDICES.HReduce] = this.leveler.level;
		this.leveler.recalculateStats();
		this.leveler.hp = Math.min(this.leveler.hp + this.leveler.maxhp*strip.increases[STAT_INDICES.Vitality]/2, this.leveler.maxhp);
		if (this.leveler == companion) {
			companion.techniquePoints += companion.level * strip.increases[STAT_INDICES.Intelligence] * 5;
		}
		checkLevelUps(this.after);
	}
	stripHovered(strip) {
		this.hoveredIncreases = strip.increases;
	}*/
	contin() {
		checkLevelUps(this.after);
	}
/*LevelUpScreen.prototype.doTutorial = function() {
	tutorialOverlay.begin([
		{text:"It looks like you've leveled up. On this screen, you'll need to decide how to increases the characters' stats.", textX:settings.width/4, textY:0, textWidth:settings.width/2, textHeight:this.yStart-5},
		{text:"There are nine different stats, as shown to the right. Hover over them to see how that stat affects the character.", opening:{x:0, y:this.yStart, width:this.strips[0].x-1, height:this.yIncrement*8}, updateRunnee:UPDATE_RUNNEE_IN_OPENING},
		{text:"You have five different choices, as shown here by these five columns.", opening:{x:this.strips[0].x, y:this.yStart, width:this.strips[this.strips.length-1].x + this.strips[this.strips.length-1].width, height:this.yIncrement*8}, updateRunnee:UPDATE_RUNNEE_NEVER},
		{text:"Each choice gives you the same total increase of nine, distributed differently into the nine stats,"},
		{text:"Although they may seem random, they are are not."},
		{text:"A certain character at a certain level will always have the same choices, so no save-scumming."},
	]);
}*/
}

/*class LevelUpStrip extends UIObject {
	constructor() {
		
	}
	resize(x, width, increases, parent) {
		this.x = x;
		this.y = parent.yStart;
		this.width = width;
		this.height = parent.yIncrement*9;
		this.increases = increases;
		this.parent = parent;
	}
	update() {
		this.updateMouse();
		if (this.clicked)
			this.parent.stripClicked(this);
		else if (this.hovered)
			this.parent.stripHovered(this);
	}
	draw() {
		ctx.lineWidth = 2;
		var color = this.hovered ? settings.hover_color : settings.normal_color;
		ctx.strokeStyle = color;
		ctx.strokeRect(this.x+1, this.y, this.width-2, this.height);
		ctx.font = "30px "+settings.font;
		ctx.textAlign = "center";
		ctx.fillStyle = color;
		for (var i = 0; i < 8; i++) {
			if (this.increases[i])
				ctx.fillText(this.increases[i] > 1 ? "+ +" : "+", this.x+this.width/2, this.parent.yStart + this.parent.yIncrement*i);
		}
	}
}*/

function getLevelUpIncreases(level, isCompanion) {
	var rng = new SM64RNG(level);
	var unordered = 
		[[1,1,1,1,1],
		 [1,1,0,1,2],
		 [1,1,2,0,1],
		 [1,1,1,2,0],
		 [0,0,1,2,2],
		 [2,0,0,1,2],
		 [2,2,0,0,1],
		 [1,2,2,0,0],
		 [0,1,2,2,0]];
	var ordered = [];
	while (unordered.length > 0) {
		ordered.push(...unordered.splice(rng.get() % unordered.length, 1));
	}
	return transposeArray(ordered);
}

function forNextLevel(level) {
	return Math.ceil(Math.pow(level, 2) * (5-difficulty));
}


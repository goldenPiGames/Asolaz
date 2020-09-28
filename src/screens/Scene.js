const SCENES = {};

function startScene(s) {
	switchScreen(new SceneScreen(s));
}

class SceneScreen extends Screen {
	constructor(s) {
		super();
		if (typeof s == "string") {
			this.scene = SCENES[s];
		} else if (typeof s == "object") {
			this.scene = s;
		} else {
			
		}
		this.charImg = new CharImgHandler();
		if (this.scene)
			this.startLog(this.scene.log);
		//console.log(this.scene);
	}
	startLog(log) {
		this.index = -1;
		this.log = log.slice();
		this.advanceLine();
	}
	spliceInLog(...things) {
		if (!things)
			return false;
		if (Array.isArray(things[0]))
			things = things[0];
		this.log.splice(this.index+1, 0, ...things);
	}
	update() {
		if (this.choiceButtons) {
			this.choiceButtons.forEach(b=>b.update());
		} else if (mouse.clicked) {
			this.advanceLine();
		} else if (!this.line && runnee == this) {
			this.logEnded();
		}
	}
	resize() {
		if (this.choiceButtons) {
			this.choiceButtons.forEach((butt, dex, ray) => butt.resize(canvas.width/4, canvas.height*(dex+1)/(ray.length+1)-40, canvas.width/2, 40));
		}
	}
	draw() {
		this.charImg.draw()
		if (this.text) {
			ctx.fillStyle = palette.normal;
			
			drawADV(this.text, this.line.speaker);
		}
		if (this.choiceButtons) {
			this.choiceButtons.forEach(b=>b.draw());
		}
	}
	advanceLine() {
		//console.log(this.index);
		this.index++;
		if (typeof this.log[this.index] == "string")
			this.log[this.index] = {text:this.log[this.index]};
		this.line = this.log[this.index];
		//console.log(this.line)
		if (!this.line) {
			if (runnee == this) {
				 this.logEnded();
			}
			return;
		}
		if (this.line.charimg) {
			this.charImg.change(this.line.charimg);
		}
		if (this.line.text) {
			this.text = this.processText(this.line.text);
		} else 
			this.text = null;
		if (this.line.choices) {
			this.buildChoices();
		} else {
			this.choiceButtons = null;
		}
		if (this.line.location) {
			changeLocation(this.line.location);
		}
		if (this.line.action) {
			this.doAction(this.line);
		}
		if (!this.line.text && !this.line.choices) {
			this.advanceLine();
		}
	}
	processText(text) {
		return processText(text);
	}
	buildChoices(choices) {
		if (!choices)
			choices = this.line.choices;
		this.choiceButtons = filterCharDialog(choices).map(c=>new Button(this.processText(c.text), ()=>this.handleChoice(c)));
		this.resize();
	}
	handleChoice(choice) {
		//is this dumb?
		var oldline = this.line;
		this.doAction(choice);
		if (this.line == oldline)
			this.advanceLine();
	}
	doAction(line) {
		if (typeof line.action == "function") {
			line.action();
		} else {
			switch (line.action) {
				case "return" : this.returnToLocation(); return;
				case "charParamUp" : this.spliceInLog(charParamUp(line.character || this.character || characterFocus, line)); return;
			}
		}
	}
	logEnded() {
		this.returnToLocation();
	}
	returnToLocation() {
		autosave();
		switchScreen(new LocationScreen());
	}
}
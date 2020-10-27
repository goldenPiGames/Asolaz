const SCENES = {};

function startScene(s) {
	switchScreen(new SceneScreenFull(s));
}

function startPopupScene(s) {
	switchScreen(new SceneScreenPopup(s, runnee));
}

class SceneScreen extends Screen {
	constructor(s) {
		super();
		if (typeof s == "string") {
			this.scene = SCENES[s];
		} else if (Array.isArray(s)) {
			this.scene = {
				log : s,
			}
		} else if (typeof s == "object") {
			this.scene = s;
		} else {
			throwMaybe("No such scene as "+s);
		}
		this.charImg = new CharImgHandler();
		if (this.scene)
			this.startLog(this.scene.log);
		//console.log(this.scene);
		this.rightMenu = new RightMenu(this, RIGHTMENU_VN);
	}
	startLog(log) {
		this.index = -1;
		this.log = log.slice();
		this.advanceLine();
		this.refreshCountdown();
	}
	spliceInLog(...things) {
		if (!things)
			return false;
		if (Array.isArray(things[0]))
			things = things[0];
		this.log.splice(this.index+1, 0, ...things);
		this.refreshCountdown();
	}
	refreshCountdown() {
		var count = this.log.findIndexFrom(l=>l.countdown, this.index);
		if (count >= 0) {
			this.countdownName = this.log[count].countdown;
			this.countdownIndex = count;
		} else {
			this.countdownName = null;
		}
	}
	resize() {
		this.rightMenu.resize();
		if (this.choiceButtons) {
			this.choiceButtons.forEach((butt, dex, ray) => butt.resize(canvas.width/4, canvas.height*(dex+1)/(ray.length+1)-40, canvas.width/2, 40));
		}
	}
	update() {
		if (this.rightMenu.update(this)) {
			return;
		} if (this.choiceButtons) {
			this.choiceButtons.forEach(b=>b.update());
		} else if (mouse.clicked) {
			this.advanceLine();
		} else if (!this.line && runnee == this) {
			this.logEnded();
		}
	}
	draw() {
		this.charImg.draw();
		if (this.text) {
			ctx.fillStyle = palette.normal;
			
			drawADV(this.text, this.line.speaker);
		}
		if (this.choiceButtons) {
			this.choiceButtons.forEach(b=>b.draw());
		}
		if (this.countdownName && this.index < this.countdownIndex) {
			drawTextInRect(this.countdownName + " in: " + (this.countdownIndex-this.index), this.rightMenu.x-250, 0, 250, 40, {align:"right", stroke:palette.normal, fill:palette.background});
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
		if (this.line.background) {
			setTempBG(this.line.background);
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
		if (this.line.music) {
			playMusic(this.line.music);
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
		if (choice.action) {
			this.doAction(choice);
		}
		if (choice.log) {
			this.spliceInLog(choice.log);
		}
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
	returnToLocation() {
		autosave();
		switchScreen(new LocationScreen());
	}
}

class SceneScreenFull extends SceneScreen {
	draw() {
		drawBG();
		this.rightMenu.draw(this);
		super.draw();
	}
	logEnded() {
		this.returnToLocation();
	}
}

class SceneScreenPopup extends SceneScreen {
	constructor(s, returnTo) {
		super(s);
		this.returnTo = returnTo;
	}
	draw() {
		this.returnTo.draw();
		super.draw();
	}
	logEnded() {
		switchScreen(this.returnTo);
	}
}
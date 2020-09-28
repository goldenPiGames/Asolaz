class MainMenu extends Screen {
	constructor() {
		super();
		this.continueButton = new Button("Continue", ()=>this.contin());
		//this.loadButton = new Button("Load game", ()=>this.load());
		this.newButton = new Button("New game", ()=>this.startNew());
		this.buttons = [
			this.continueButton,
			this.newButton,
		]
		this.continueButton.active = !!peekGame("A");
		this.resize();
	}
	resize() {
		this.buttons.forEach((butt, dex, ray) => butt.resize(canvas.width/4, canvas.height*(dex+1)/(ray.length+1)-25, canvas.width/2, 50));
	}
	update() {
		this.buttons.forEach(b=>b.update());
	}
	draw() {
		this.buttons.forEach(b=>b.draw());
	}
	contin() {
		loadGame("A");
		returnToLocation();
	}
	startNew() {
		startNewGame();
	}
}
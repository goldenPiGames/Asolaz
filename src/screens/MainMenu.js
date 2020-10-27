class MainMenu extends Screen {
	constructor() {
		super();
		this.continueButton = new Button("Continue", ()=>this.contin());
		//this.loadButton = new Button("Load game", ()=>this.load());
		this.newButton = new Button("New game", ()=>this.startNew());
		this.creditsButton = new Button("Credits", ()=>switchScreen(new CreditsScreen()));
		this.buttons = [
			this.continueButton,
			this.newButton,
			this.creditsButton,
		]
		this.rightMenu = new RightMenu(this, RIGHTMENU_MAINMENU);
		this.continueButton.active = !!peekGame("A");
		this.resize();
	}
	resize() {
		this.rightMenu.resize();
		this.buttons.forEach((butt, dex, ray) => butt.resize(canvas.width/4, canvas.height*(dex+1)/(ray.length+1)-25, canvas.width/2, 50));
	}
	update() {
		this.rightMenu.update(this);
		this.buttons.forEach(b=>b.update());
	}
	draw() {
		this.rightMenu.draw(this);
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
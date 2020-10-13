//TODO
class AdultWarningScreen extends Screen {
	constructor() {
		super();
		this.continueButton = new Button("Continue (I am 18 or older)", ()=>switchScreen(new MainMenu()));
		this.leaveButton = new Button("Go to non-adult version", ()=>this.doChildrens());
		this.resize();
	}
	resize() {
		this.continueButton.resize(canvas.width/4, canvas.height-140, canvas.width/2, 60);
		this.leaveButton.resize(canvas.width/4, canvas.height-70, canvas.width/2, 60);
	}
	update() {
		this.continueButton.update();
		this.leaveButton.update();
	}
	draw() {
		ctx.fillStyle = palette.normal;
		drawTextInRect("ADULT CONTENT", 0, 0, canvas.width, 100);
		drawParagraphInRect("This game contains adult content. You cannot legally view this content unless you are at least 18 years of age. <br> If you are not at least 18 years of age, or if you do not wish to see any adult content, you can instead play the version without any adult content.", 5, 100, canvas.width-10, canvas.height-250, 40);
		this.continueButton.draw();
		this.leaveButton.draw();
	}
	doChildrens() {
		window.open(VERSION_URL_SAFE);
		coreEngine.stop();
	}
}
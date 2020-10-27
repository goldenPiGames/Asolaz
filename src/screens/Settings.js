class SettingsMenu extends GameMenu {
	constructor(rightMenu) {
		super(rightMenu);
		this.resize();
	}
	resize() {
		this.rightMenu.resize();
	}
	update() {
		super.update();
	}
	draw() {
		super.draw();
		drawParagraphInRect("//TODO actually design a settings screen", 0, 0, this.rightMenu.x, canvas.height, 30);
	}
}
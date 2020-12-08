class SettingsMenu extends GameMenu {
	constructor(rightMenu) {
		super(rightMenu);
		this.musicSlider = new Slider(setMusicVolume, getMusicVolume);
		this.resize();
	}
	resize() {
		var mainWidth = super.resize();
		this.musicSlider.resize(50, 50, mainWidth/3, 20);
	}
	update() {
		super.update();
		this.musicSlider.update();
	}
	draw() {
		super.draw();
		//drawParagraphInRect("//TODO actually design a settings screen", 0, 0, this.rightMenu.x, canvas.height, 30);
		this.musicSlider.draw();
	}
}
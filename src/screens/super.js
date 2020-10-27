var runnee;

function switchScreen(s) {
	runnee = s;
}

class Screen {
	constructor() {
		
	}
}

class OverScreen extends Screen {
	constructor() {
		super();
	}
	clickedOutside() {
		return mouse.clicked && !this.intersectsMouse();
	}
	fillBackAndFrame(alphaAll, alphaBack) {
		ctx.fillStyle = palette.background;
		ctx.globalAlpha = alphaAll;
		ctx.fillRect(0, 0, WIDTH, HEIGHT);
		ctx.globalAlpha = alphaBack;
		ctx.fillRect(this.x, this.y, this.width, this.height);
		ctx.globalAlpha = 1;
		ctx.lineWidth = 4;
		ctx.strokeStyle = palette.normal;
		ctx.strokeRect(this.x, this.y, this.width, this.height);
	}
}
OverScreen.prototype.overrideTouch = false;
OverScreen.prototype.intersectsMouse = UIObject.prototype.intersectsMouse;
class Slider extends UIObject {
	constructor(handler, getter, getterText) {
		super();
		this.handler = handler;
		this.getter = getter;
		this.getterText = getterText;
	}
	resize(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
	update() {
		super.update();
		if (this.hovered)
			hovered = true;
		if (this.held) {
			var portion;
			if (mouse.x < this.x)
				portion = 0;
			else if (mouse.x >= this.x+this.width)
				portion = 1;
			else
				portion = (mouse.x-this.x)/this.width;
			this.handler(portion);
		}
	}
	draw() {
		var portion = this.getter();
		
		ctx.globalAlpha = 1;
		this.fill(this.forceBG || palette.background);
		
		var color = this.forceColor || (this.held ? palette.click : (this.hovered ? palette.hover : palette.normal));
		this.stroke(color);
		ctx.fillStyle = color;
		ctx.fillRect(this.x+1, this.y+1, (this.width-2)*portion, this.height-2);
	}
}

// ------------------------------------------------------------------------------ Color Picker ---------------------------------


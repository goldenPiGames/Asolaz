const FORM_SCROLL_SPEED = 60;

class ScrollForm extends UIObject {
	constructor(objects, onSubmit) {
		super();
		this.objects = objects;
		this.objects.forEach(o=>o.parent=this);
		this.scroll = 0;
		this.choices = {};
		this.onSubmit = onSubmit;
	}
	resize(x, width) {
		this.x = x;
		this.y = 0;
		this.fullWidth = width;
		this.height = canvas.height;
		this.scrollWidth = 40;
		this.width = this.fullWidth-this.scrollWidth;
		var y = 0;
		this.objects.forEach(o=> {
			y = o.resize(this.x, y, this.width);
		});
		this.fullHeight = y;
		this.maxScroll = this.fullHeight - this.height;
		this.scrollBar = new ScrollBar(x + this.width, this.y + this.scrollWidth, this.scrollWidth, this.height - 2*this.scrollWidth, this.height, this.fullHeight, (s)=>this.setScroll(s), ()=>this.scroll);
		//this.upButton.resize(x + width - this.scrollWidth, y, this.scrollWidth, this.scrollWidth);
		//this.downButton.resize(x + width - this.scrollWidth, y + height - this.scrollWidth, this.scrollWidth, this.scrollWidth);
	}
	update() {
		super.update();
		this.scrollBar.update();
		//this.upButton.update();
		//this.downButton.update();
		if (this.hovered && mouse.scrolled) {
			//this.moving = false;
			if (mouse.scrolled < 0)
				this.scroll = Math.max(0, this.scroll-FORM_SCROLL_SPEED);
			else
				this.scroll = Math.min(this.maxScroll, this.scroll+FORM_SCROLL_SPEED);
		}
		if (this.draggedY) {
			this.scroll = Math.max(0, Math.min(this.maxScroll, this.scroll-this.draggedY));
			this.moving = false;
		}
		this.objects.forEach(oj=>{
			oj.y = oj.ry - this.scroll;
			if (oj.children) {
				oj.children.forEach(ch => ch.y = ch.ry - this.scroll);
			}
			oj.update();
		});
	}
	draw() {
		this.scrollBar.draw();
		this.objects.forEach(oj=>oj.draw());
	}
	setScroll(to) {
		this.scroll = to;
	}
	setChoice(id, dat) {
		this.choices[id]=dat;
	}
	submit() {
		this.onSubmit(this.choices);
	}
}

class ScrollingHeading extends UIObject {
	constructor(text) {
		super();
		this.text = processText(text);
	}
	resize(x, y, width) {
		this.x = x;
		this.ry = y + 6;
		this.width = width;
		this.height = 40;
		return this.ry + this.height + 3;
	}
	update() {
		super.update();
	}
	draw() {
		ctx.fillStyle = palette.normal;
		drawTextInRect(this.text, this.x, this.y, this.width, this.height);
	}
}

class ScrollingParagraph extends UIObject {
	constructor(text) {
		super();
		this.text = processText(text);
	}
	resize(x, y, width) {
		this.x = x;
		this.ry = y + 2;
		this.width = width;
		this.height = drawParagraphInRect(this.text, this.x, 0, this.width, 500, 24);
		return this.ry + this.height + 2;
	}
	update() {
		super.update();
	}
	draw() {//TODO cache the lines
		ctx.fillStyle = palette.normal;
		drawParagraphInRect(this.text, this.x, this.y, this.width, this.height, 24);
	}
}

class ScrollingRadioButtons extends UIObject {
	constructor(id, options) {
		super();
		this.id = id;
		this.children = options.map(o=>new ScrollingRadioButton(o, this));
	}
	resize(x, y, width) {
		this.children.forEach(o => {
			y = o.resize(x, y, width);
		});
		return y;
	}
	update() {
		super.update();
		this.children.forEach(c=>c.update());
	}
	draw() {
		this.children.forEach(c=>c.draw());
	}
	childClicked(chili) {
		this.selected = chili;
		this.children.forEach(ch => ch.selected = ch == chili);
		this.parent.setChoice(this.id, chili.dat);
	}
}

class ScrollingRadioButton extends UIObject {
	constructor(dat, parent) {
		super();
		this.dat = dat;
		this.text = processText(dat.name);
		this.parent = parent;
	}
	resize(x, y, width) {
		this.x = x;
		this.ry = y;
		this.width = width;
		this.textX = x + 26;
		this.textWidth = this.width - 26;
		this.height = drawParagraphInRect(this.text, this.textX, 0, this.textWidth, 500, 24)+2;
		return y + this.height;
	}
	update() {
		super.update();
		if (this.hovered)
			hovered = true;
		if (this.clicked) {
			this.parent.childClicked(this);
		}
	}
	draw() {//TODO cache the lines
		drawParagraphInRect(this.text, this.textX, this.y, this.textWidth, this.height, 24);
		ctx.strokeStyle = this.hovered ? palette.hover : palette.normal;
		ctx.lineWidth = 2;
		ctx.beginPath();
		ctx.arc(this.x+12, this.y+12, 10, 0, 2*Math.PI);
		if (this.selected) {
			ctx.fillStyle = palette.click;
			ctx.fill();
		}
		ctx.stroke();
	}
}

class ScrollingSubmitButton extends Button {
	constructor(text) {
		super(text || "SUBMIT", ()=>this.parent.submit());
	}
	resize(x, y, width) {
		super.resize(x+width/2-100, y, 200, 40);
		this.ry = this.y;
		return this.ry + this.height;
	}
}

class ScrollingTextInput extends UIObject {
	constructor(id, placeholder) {
		super();
		this.id = id;
		this.text = "";
		this.placeholder = placeholder;
	}
	resize(x, y, width) {
		this.x = x;
		this.ry = y;
		this.width = width;
		this.height = 28;
		return y+30;
	}
	update() {
		super.update();
		this.text = updateTextInput(this.x, this.y, this.width, this.height, this.skipped, this.text, this.placeholder);
		this.parent.setChoice(this.id, this.text);
	}
	draw() {
		
	}
}
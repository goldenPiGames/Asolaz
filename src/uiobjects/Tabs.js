class Tabs extends UIObject {
	constructor(data, handler, getter) {
		super();
		this.numTabs = data.length;
		this.tabs = data.map((dat, dex) => new TabsTab(dat, dex, this));
		this.handler = handler;
		this.getter = getter;
		
	}
	resize(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.tabWidth = this.width/this.numTabs;
		this.tabs.forEach((t, i) => t.resize(this.x+this.tabWidth*i, this.y, this.tabWidth, this.height));
	}
	update() {
		this.updateMouse();
		this.tabs.forEach(tab=>tab.update());
	}
	draw() {
		this.tabs.forEach(tab=>tab.draw(this.index));
	}
	tabClicked(data) {
		this.handler(data);
	}
}

class TabsTab extends UIObject {
	constructor(data, index, parent) {
		super();
		this.data = data;
		this.text = data.name || data.text;
		this.index = index;
		this.parent = parent;
	}
	resize(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
	update() {
		this.updateMouse();
		if (this.hovered)
			hovered = true;
		if (this.clicked)
			this.parent.tabClicked(this.data);
	}
	draw() {
		var color = this.parent.getter(this.data) ? palette.click : this.hovered ? palette.hover : palette.normal;
		ctx.strokeStyle = color;
		
		ctx.fillStyle = palette.background;
		ctx.fillRect(this.x, this.y, this.width, this.height);
		
		this.stroke();
		
		ctx.fillStyle = color;
		drawTextInRect(this.text, this.x+BUTTON_BORDER_WIDTH, this.y+BUTTON_BORDER_WIDTH, this.width-BUTTON_BORDER_WIDTH*2, this.height-BUTTON_BORDER_WIDTH*2);
		
	}
}

class TabsVertical extends Tabs {
	resize(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.tabHeight = this.height/this.numTabs;
		this.tabs.forEach((t, i) => t.resize(this.x, this.y+this.tabHeight*i, this.width, this.tabHeight));
	}
}
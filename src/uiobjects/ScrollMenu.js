const SCROLL_ELEMENT_HEIGHT = 30;
const SCROLL_BUTTON_HEIGHT = 30;
const SCROLL_BAR_WIDTH = 30;
const SCROLL_MENU_TAP_LENGTH = 4;
const SCROLL_MENU_DRAG_DISTANCE = SCROLL_ELEMENT_HEIGHT / 2;

class ScrollMenu extends UIObject {
	constructor(returnFunction, items = [], secondProperty = null) {
		super();
		
		this.returnFunction = returnFunction;
		this.secondProperty = secondProperty;
		this.highlightProperty = ()=>false;
		this.enableProperty = ()=>true;
		this.setItems(items);
		//this.setItems(items);
		this.upButton = new Button("↑", ()=>this.scrollUp());
		this.downButton = new Button("↓", ()=>this.scrollDown());
		
		this.currentScroll = 0;
		
	}
	resize(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		
		this.maxEntries = Math.floor((height - 4) / SCROLL_ELEMENT_HEIGHT);
		this.active = true;
		this.scrollBar = new ScrollBar(x + width - SCROLL_BAR_WIDTH, y + SCROLL_BUTTON_HEIGHT, SCROLL_BAR_WIDTH, height - 2*SCROLL_BUTTON_HEIGHT, this.maxEntries, this.items.length, (s)=>this.setBarScroll(s), ()=>this.currentScroll);
		this.upButton.resize(x + width - SCROLL_BAR_WIDTH, y, SCROLL_BAR_WIDTH, SCROLL_BUTTON_HEIGHT);
		this.downButton.resize(x + width - SCROLL_BAR_WIDTH, y + height - SCROLL_BUTTON_HEIGHT, SCROLL_BAR_WIDTH, SCROLL_BUTTON_HEIGHT);
		this.mainArea = new UIObject(); this.mainArea.x = x; this.mainArea.y = y; this.mainArea.width = width - SCROLL_BAR_WIDTH; this.mainArea.height = height;
		
		this.maxScroll = Math.max(this.items.length-this.maxEntries, 0);
		if (this.currentScroll > this.maxScroll) {
			this.currentScroll = this.maxScroll;
		}
		
		this.itemElements = [];
		for (var i = 0; i < this.maxEntries; i++) {
			this.itemElements.push(new ScrollMenuElement(this.x, this.y + (i * SCROLL_ELEMENT_HEIGHT), this.width - SCROLL_BAR_WIDTH, SCROLL_ELEMENT_HEIGHT, this));
		}
		
		this.putItems();
		
		this.touchDrag = 0;
		this.justDragScrolled = 0;
	}
	setItems(items) {
		this.items = items;
		if (this.scrollBar)
			this.putItems();
	}
	putItems() {
		this.maxScroll = Math.max(this.items.length-this.maxEntries, 0);
		this.scrollBar.max = this.items.length;
		if (this.currentScroll > this.maxScroll) {
			this.currentScroll = this.maxScroll;
		}
		for(var i = 0; i < this.maxEntries; i++) {
			this.itemElements[i].setItem(this.items[i + this.currentScroll]);
		}
	}
	scrollUp(amount = 1, canLoop = true) {
		this.currentScroll -= amount;
		if (this.currentScroll < 0) {
			if (canLoop)
				this.currentScroll = this.maxScroll;
			else
				this.currentScroll = 0;
		}
		this.putItems();
	}
	scrollDown(amount = 1, canLoop = true) {
		this.currentScroll += amount;
		if (this.currentScroll > this.maxScroll) {
			if (canLoop)
				this.currentScroll = 0;
			else
				this.currentScroll = this.maxScroll;
		}
		this.putItems();
	}
	setBarScroll(val) {
		this.currentScroll = val;
		this.putItems();
	}
	scrollToSelected() {
		var selectIndex = this.items.findIndex(i=>this.highlightProperty(i));
		if (selectIndex < 0)
			return;
		this.currentScroll = Math.max(0, Math.min(this.maxScroll, Math.floor(selectIndex-this.maxEntries/2)));
		this.putItems();
	}
	update() {
		super.update();
		this.hoveredValue = null;
		//super.update();
		this.upButton.update();
		this.downButton.update();
		this.scrollBar.update();
		if (this.hovered && mouse.scrolled) {
			if (mouse.scrolled < 0)
				this.scrollUp(Math.abs(mouse.scrolled), false);
			else
				this.scrollDown(Math.abs(mouse.scrolled), false);
		}
		if (mouse.lastUsed == "touch") {
			this.mainArea.update();
			if (!this.held || this.held <= 1) {
				this.itemElements.forEach(tem=>{tem.update();tem.hovered=false;});
			}
			if (this.mainArea.draggedY) {
				this.touchDrag += this.mainArea.draggedY;
			}
			while (this.touchDrag >= SCROLL_MENU_DRAG_DISTANCE) {
				this.scrollUp(1, false);
				this.touchDrag -= SCROLL_MENU_DRAG_DISTANCE;
				this.justDragScrolled++;
			}
			while (this.touchDrag <= -SCROLL_MENU_DRAG_DISTANCE) {
				this.scrollDown(1, false);
				this.touchDrag += SCROLL_MENU_DRAG_DISTANCE;
				this.justDragScrolled++;
			}
			if (this.mainArea.released) {
				if ((this.mainArea.released < SCROLL_MENU_TAP_LENGTH || this.justDragScrolled < 1) && this.valueOnRelease) {
					this.returnFunction(this.valueOnRelease, this);
				}
				this.touchDrag = 0;
				this.justDragScrolled = 0;
			}
		} else {
			this.itemElements.forEach(tem=>tem.update());
		}
	}
	draw() {
		ctx.fillStyle = palette.background+"80";
		ctx.fillRect(this.x, this.y, this.width, this.height);
		ctx.strokeStyle = palette.normal;
		ctx.lineWidth = 2;
		ctx.strokeRect(this.x + 1, this.y + 1, this.width - 2, this.height - 2);
		this.scrollBar.draw();
		this.upButton.draw();
		this.downButton.draw();
		for (var i = 0; i < this.itemElements.length; i++) {
			this.itemElements[i].draw();
		}
	}
	setHovered(value) {
		hovered = true;
		this.hoveredValue = value;
	}
	returnItem(value) {
		if (mouse.lastUsed == "touch") {
			this.valueOnRelease = value;
		} else {
			this.returnFunction(value, this);
		}
	}
}
/* ------------------------------------------------ Scroll Menu Elements -------------------------------------------*/
class ScrollMenuElement extends UIObject {
	constructor(x, y, width, height, parent, value) {
		super(x, y, width, height)
		this.parent = parent;
		this.setItem(value);
		/*this.handler = function(){
			parent.returnItem(this.value);
		};*/
	}
	setItem(value) {
		this.value = value;
	}
	update() {
		super.update();
		if (this.value != undefined) {
			if (this.hovered) {
				this.parent.setHovered(this.value);
			}
			if (this.clicked)
				this.parent.returnItem(this.value);
		}
	}
	draw() {
		if (this.value) {
			var color = this.parent.enableProperty(this.value) ? (this.parent.highlightProperty(this.value) ? palette.click : (this.hovered ? palette.hover : palette.normal)) : palette.disabled;
			var fontSize = this.height - 3;
			ctx.fillStyle = color;
			ctx.font = fontSize + "px "+settings.font;
			ctx.textBaseline = "top";
			ctx.textAlign = "left";
			ctx.fillText(typeof this.value == "function" ? this.value.prototype.name : this.value.name, this.x+5, this.y+2);
			if (this.parent.secondProperty != null) {
				ctx.textAlign = "right";
				ctx.fillText(typeof this.parent.secondProperty == "function" ? this.parent.secondProperty(this.value) : this.value[this.parent.secondProperty], this.x + this.width-5, this.y+2);
			}
		}
	}
}
/* --------------------------------------------------------- Scroll Bar ---------------------------------------------------- */

class ScrollBar extends UIObject {
	constructor(x, y, width, height, size, max, handler, getter) {
		super(x, y, width, height);
		this.min = 0;
		this.size = size;
		this.max = max;
		this.handler = handler;
		this.getter = getter;
	}
	update() {
		super.update();
		if (this.hovered) {
			hovered = true;
		}
		if (this.clicked || this.held) {
			this.handler(Math.round(Math.max(this.min, Math.min(this.max-this.size, this.min - this.size/2 + (mouse.y-this.y)/this.height * (this.max-this.min)))));
		}
	}
	draw() {
		ctx.lineWidth = 2;
		ctx.strokeStyle = this.held ? palette.click : this.hovered ? palette.hover : palette.normal;
		//ctx.strokeRect(this.x + this.width - SCROLL_BAR_WIDTH + 1, this.y + SCROLL_BUTTON_HEIGHT + (this.height - SCROLL_BUTTON_HEIGHT * 2) * this.currentScroll / (this.maxEntries + this.maxScroll), SCROLL_BAR_WIDTH - 2, (this.height - SCROLL_BUTTON_HEIGHT * 2) * this.maxEntries / (this.maxEntries + this.maxScroll));
		if (this.size < (this.max-this.min))
			ctx.strokeRect(this.x +1, this.y + this.height*this.getter()/this.max +1, this.width -2, this.height*this.size/this.max -2);
		else
			ctx.strokeRect(this.x +1, this.y +1, this.width -2, this.height -2);
	}
}
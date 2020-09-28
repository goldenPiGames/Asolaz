function openGameMenu(prev) {
	switchScreen(new GameMenu(prev));
}
class GameMenu extends Screen {
	constructor(rightMenu) {
		super();
		this.rightMenu = rightMenu;
		//this.returnTo = returnTo;
	}
	resize() {
		this.rightMenu.resize();
		return this.rightMenu.x;
	}
	update() {
		return this.rightMenu.update(this);
	}
	draw() {
		this.rightMenu.draw(this);
	}
}

class FilesMenu extends GameMenu {
	constructor(rightMenu, buttonName) {
		super(rightMenu);
		var tabsData = [];
		for (var i = 1; i <= 10; i++) {
			tabsData.push({
				id : i,
				name : i.toString(),
			});
		}
		this.tabsPage = new Tabs(tabsData, dat=>this.changeSlot(dat.id), dat=>dat.id==this.slot);
		this.activateButton = new Button(buttonName, ()=>this.activate());
		this.resize();
	}
	resize() {
		var mainWidth = super.resize();
		var tabHeight = 64;
		this.tabsPage.resize(0, 0, mainWidth, tabHeight);
		this.activateButton.resize(mainWidth/2-100, canvas.height-tabHeight, 200, tabHeight);
		this.popupX = 50;
		this.popupY = tabHeight*3;
		this.popupWidth = mainWidth-100;
		this.popupHeight = canvas.height - this.popupY - tabHeight*2;
	}
	update() {
		super.update();
		this.tabsPage.update();
		this.activateButton.update();
	}
	draw() {
		super.draw();
		this.tabsPage.draw();
		this.activateButton.draw();
		if (this.slot) {
			ctx.fillStyle = palette.background;
			ctx.fillRect(this.popupX, this.popupY, this.popupWidth, this.popupHeight);
			drawParagraphInRect(this.peekPara, this.popupX, this.popupY, this.popupWidth, this.popupHeight, 40);
		}
	}
	changeSlot(slot) {
		this.slot = slot;
		this.peekData = peekGame(slot);
		if (!this.peekData) {
			this.peekPara = "(Empty)";
			return;
		}
		this.peekPara = this.peekData.player.name + " <br> " + getCornerTime(this.peekData.time);
	}
}

class SaveMenu extends FilesMenu {
	constructor(rightMenu) {
		super(rightMenu, "Save");
	}
	activate() {
		saveGame(this.slot);
		saveGame("A");
		this.changeSlot(this.slot);
	}
}

class LoadMenu extends FilesMenu {
	constructor(rightMenu) {
		super(rightMenu, "Load");
	}
	activate() {
		try {
			loadGame(this.slot);
			returnToLocation();
		} catch (e) {
			
		}
	}
}
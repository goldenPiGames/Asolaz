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
	constructor(rightMenu) {
		super(rightMenu);
		var tabsData = [{
			id : "A",
			name : "A",
		}];
		for (var i = 1; i <= 9; i++) {
			tabsData.push({
				id : i,
				name : i.toString(),
			});
		}
		this.tabsPage = new Tabs(tabsData, dat=>this.changeSlot(dat.id), dat=>dat.id==this.slot);
		this.saveButton = new Button("Save", ()=>this.save(), this.canSave);
		this.loadButton = new Button("Load", ()=>this.load(), this.canLoad);
		this.changeSlot(slotLastUsed);
		this.resize();
	}
	resize() {
		var mainWidth = super.resize();
		var tabHeight = 100;
		this.tabsPage.resize(0, 0, mainWidth, tabHeight);
		this.saveButton.resize(mainWidth/2-200, canvas.height-tabHeight, 200, tabHeight);
		this.loadButton.resize(mainWidth/2, canvas.height-tabHeight, 200, tabHeight);
		this.popupX = 50;
		this.popupY = tabHeight*3;
		this.popupWidth = mainWidth-100;
		this.popupHeight = canvas.height - this.popupY - tabHeight*2;
	}
	update() {
		super.update();
		this.tabsPage.update();
		this.saveButton.update();
		this.loadButton.update();
	}
	draw() {
		super.draw();
		this.tabsPage.draw();
		this.saveButton.draw();
		this.loadButton.draw();
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
	save() {
		saveGame(this.slot);
		//saveGame("A");
		this.changeSlot(this.slot);
	}
	load() {
		try {
			loadGame(this.slot);
			returnToLocation();
		} catch (e) {
			
		}
	}
}

class SaveLoadMenu extends FilesMenu {
	
}
SaveLoadMenu.prototype.canSave = true;
SaveLoadMenu.prototype.canLoad = true;

class LoadMenu extends FilesMenu {
	
}
LoadMenu.prototype.canSave = false;
LoadMenu.prototype.canLoad = true;
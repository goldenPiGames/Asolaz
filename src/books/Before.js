const BOOK_DATA = {
	
}

const LIBRARY_SECTION_DATA = {
	all : {
		id : "all",
		name : "All",
	},
	history : {
		id : "help",
		name : "Help",
	},
	history : {
		id : "history",
		name : "History",
	},
	fiction : {
		id : "fiction",
		name : "Fiction",
	},
	politics : {
		id : "politics",
		name : "Politics",
	},
	martial : {
		id : "martial",
		name : "Martial",
	},
	arcana : {
		id : "arcana",
		name : "Arcana",
	},
	psionics : {
		id : "psionics",
		name : "Psionics",
	},
	technology : {
		id : "technology",
		name : "Technology",
	},
	art : {
		id : "art",
		name : "Art",
	},
}

function readAtLibrary() {
	switchScreen(new LibraryMenu());
}

class LibraryMenu extends Screen {
	constructor() {
		super();
		this.turnsLeft = 3;
		this.sectionTabs = new TabsVertical(LIBRARY_SECTION_TABS, dat=>this.setSection(dat), dat=>this.sectionID==dat.id);
		this.people = whoIsAtLocation(this.location);
		this.bookMenu = new ScrollMenu(thing=>this.bookClicked(thing), [], "read");
		this.rightMenu = new RightMenu(this, RIGHTMENU_VN);
		this.setSection(LIBRARY_SECTION_DATA.all);
		//this.bookMenuButton = new Button("Menu", ()=>this.openMenu());
		this.resize();
	}
	resize() {
		var twidth = Math.min(200, canvas.width/4);
		var swidth = Math.max(300, canvas.width/2);
		this.sectionTabs.resize(0, 0, twidth, canvas.height);
		this.bookMenu.resize(twidth, 0, swidth, canvas.height);
		this.rightMenu.resize();
		//this.bookMenuButton.resize(canvas.width - 200, canvas.height - 60, 190, 50);
	}
	update() {
		this.rightMenu.update(this);
		this.sectionTabs.update();
		this.bookMenu.update();
	}
	draw() {
		drawBG();
		this.rightMenu.draw(this);
		this.sectionTabs.draw();
		this.bookMenu.draw();
	}
	setSection(thing) {
		this.sectionID = thing.id;
		this.bookMenu.setItems(thing.books.map(function(bdats) {
			return {
				id : bdats.id,
				name : bdats.name,
				read : data.player.booksRead[bdats.id] ? "(Read)" : "",
			}
		}));
	}
	bookClicked(thing) {
		//console.log(thing.title);
		switchScreen(new LibraryReadingScreen(thing.id, this));
	}
	returnFromReading(book) {
		this.turnsLeft--;
		if (!data.player.booksRead[book.id]) {
			earnExperience(book.exp);
			data.player.booksRead[book.id] = true;
			this.setSection(LIBRARY_SECTION_DATA[book.section]);
		}
		if (this.turnsLeft <= 0) {
			advanceTime();
			returnToLocation();
			autosave();
		} else {
			switchScreen(this);
		}
	}
}

class LibraryReadingScreen extends Screen {
	constructor(bookID, lib) {
		super();
		this.library = lib;
		this.book = BOOK_DATA[bookID];
		this.scroll = new ScrollForm([
			...this.book.text.split("<br>").map(p=>new ScrollingParagraph(p)),
			new ScrollingSubmitButton("Finish Reading"),
		], ()=>this.finishReading());
		this.resize();
	}
	resize() {
		this.scroll.resize(20, canvas.width-40);
	}
	update() {
		this.scroll.update();
	}
	draw() {
		this.scroll.draw();
	}
	finishReading() {
		this.library.returnFromReading(this.book);
	}
}
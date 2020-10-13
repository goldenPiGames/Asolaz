const LIBRARY_SECTION_TABS = [];

for (sec in LIBRARY_SECTION_DATA) {
	LIBRARY_SECTION_TABS.push(LIBRARY_SECTION_DATA[sec]);
	LIBRARY_SECTION_DATA[sec].books = [];
}

const BOOK_DATA_LIST = [];

for (var ook in BOOK_DATA) {
	BOOK_DATA[ook].id = ook;
	BOOK_DATA_LIST.push(BOOK_DATA[ook]);
	LIBRARY_SECTION_DATA[BOOK_DATA[ook].section].books.push(BOOK_DATA[ook]);
	if (!BOOK_DATA[ook].name)
		BOOK_DATA[ook].name = BOOK_DATA[ook].title;
}

LIBRARY_SECTION_DATA.all.books = BOOK_DATA_LIST;
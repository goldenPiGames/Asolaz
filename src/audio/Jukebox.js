class JukeboxSubscreen extends GameMenu {
	constructor(rightMenu) {
		super(rightMenu);
		this.refreshList();
		this.songMenu = new ScrollMenu(a=>this.playSong(a), songList, "by", "description", ()=>true);
		this.songMenu.highlightProperty = (val)=>val==song;
		//if (song)
		//	this.songMenu.scrollToSelected();
		this.pauseButton = new Button("Play/Pause", ()=>this.togglePause());
		this.volumeSlider = new Slider(setMusicVolume, getMusicVolume);
		//this.linkButton = new BubbleButton(midx+50, 150, 45, ()=>{if (song) runnee=new JukeboxLinkPopup(this)}, bubbleDrawIHyperlink);
		/*this.favButton = new BubbleButton(midx+150, 150, 45, ()=>toggleFavSong(song), function() {
				if (song && song.fav) {
					bubbleDrawIHeartFull.call(this);
				} else {
					bubbleDrawIHeart.call(this);
				}});*/
		//this.positionSlider = new Slider("Position"), 0, 60, setMusicPosition, getMusicPosition, getMusicPosition);
		//this.volumeSlider = new Slider("Volume"), 0, 1, val=>{settings.music=val;setMusicVolume(val);saveSettings();}, ()=>settings.music, ()=>asPercent(settings.music));
		//this.setSliderBounds();
		//this.focusOutPauseCheckbox = new Checkbox("Pause when focus lost"), val=>{settings.focusOutPause=val;saveSettings();}, settings.focusOutPause);
		//this.sortButtons = new RadioButtons([lg("Jukebox-SortBy"), lg("Jukebox-SortName")], dex=>this.setSort(dex), jukeboxSpecs.sort);
		//this.changeRadio = new RadioButtons(midx, HEIGHT-90, swid/2, 30, [lg("Jukebox-Manual"), lg("Jukebox-Shuffle"), lg("Jukebox-Recommend")], val=>this.setChange(val), jukeboxSpecs.recommend ? 2 : jukeboxSpecs.shuffle ? 1 : 0);
		//this.saveDefaultButton = new Button(midx+swid/2+5, HEIGHT-40, swid/2, 35, lg("Jukebox-SaveDefault"), ()=>this.saveDefault());
		this.objects = [
			this.songMenu,
			//this.returnButton,
			this.pauseButton,
			//this.favButton,
			//this.positionSlider,
			this.volumeSlider,
			//this.focusOutPauseCheckbox,
			//this.sortButtons,
			//this.favCheckbox,
			//this.intensityMinSlider,
			//this.intensityMaxSlider,
			//this.changeRadio,
			//this.genreButtons,
			//this.saveDefaultButton,
		];
		this.refreshSong();
		this.resize();
	}
	resize() {
		var mainWidth = super.resize();
		var midx = mainWidth*.6;
		this.songMenu.resize(0, 0, midx-10, canvas.height);
		var swid = Math.floor(mainWidth - midx) - 10;
		this.pauseButton.resize(midx, 5, swid/2, 40);
		this.volumeSlider.resize(midx+10, 100, 200, 30);
		//this.positionSlider.resize(midx, 205, swid, 50);
		//this.volumeSlider.resize(midx, 265, swid, 30);
		//this.focusOutPauseCheckbox.resize(midx, 300, swid, 24, lg("Settings-FocusOutPause"), val=>{settings.focusOutPause=val;saveSettings();}, settings.focusOutPause);
		//this.sortButtons.resize(midx, 340, swid/2, 24);
		//this.changeRadio.resize(midx, HEIGHT-90, swid/2, 30);
		//this.saveDefaultButton = new Button(midx+swid/2+5, HEIGHT-40, swid/2, 35, lg("Jukebox-SaveDefault"), ()=>this.saveDefault());
		this.resizeLinkButtons();
	}
	resizeLinkButtons() {
		if (!this.songMenu.width)
			return;
		this.linkButtons.forEach((l, i)=>l.resize(this.songMenu.width+10, canvas.height/2 + 50*i, 200, 40));
	}
	update() {
		super.update();
		if (song != this.lastSong) {
			this.refreshSong();
			//this.setSliderBounds();
		}
		this.objects.forEach(oj=>oj.update());
		this.linkButtons.forEach(l=>l.update());
	}
	draw() {
		super.draw();
		this.pauseButton.text = music.paused ? "Play" : "Pause";
		this.objects.forEach(oj=>oj.draw());
		this.linkButtons.forEach(l=>l.draw());
	}
	playSong(nom) {
		playMusic(nom);
		this.refreshSong();
	}
	refreshSong() {
		this.lastSong = song;
		if (song) {
			this.linkButtons = song.sites.map(s=>new LogoLinkButton(s));
			this.resizeLinkButtons();
		} else {
			this.linkButtons = [];
		}
	}
	togglePause() {
		if (music.paused) {
			music.play();
		} else {
			music.pause();
		}
	}
	setSliderBounds() {
		this.positionSlider.max = song ? (jukeboxSpecs.shuffle ? music.duration : song.loopEnd) || music.duration : 60;
	}
	refreshList() {
		filterSongList();
		if (this.songMenu) {
			this.songMenu.setItems(songList);
			//this.songMenu.scrollToSelected();
		}
	}
	setSort(val) {
		jukeboxSpecs.sort = val;
		this.refreshList();
	}
	setFavsOnly(val) {
		jukeboxSpecs.favsOnly = val;
		this.refreshList();
	}
	setIntensityMin(val) {
		val = Math.round(val*4)/4;
		if (jukeboxSpecs.intensityMin == val)
			return;
		jukeboxSpecs.intensityMin = val;
		if (val > jukeboxSpecs.intensityMax)
			jukeboxSpecs.intensityMax = val;
		this.refreshList();
	}
	setIntensityMax(val) {
		val = Math.round(val*4)/4;
		if (jukeboxSpecs.intensityMax == val)
			return;
		jukeboxSpecs.intensityMax = val;
		if (val < jukeboxSpecs.intensityMin)
			jukeboxSpecs.intensityMin = val;
		this.refreshList();
		//this.setSliderBounds();
	}
	setChange(val) {
		switch (val) {
			case 0:
				jukeboxSpecs.shuffle = false;
				jukeboxSpecs.recommend = false;
				break;
			case 1:
				jukeboxSpecs.shuffle = true;
				jukeboxSpecs.recommend = false;
				recommendSongs(lastRecommendedSongs);
				break;
			case 2:
				jukeboxSpecs.shuffle = false;
				jukeboxSpecs.recommend = true;
				if (!song)
					recommendSongs(lastRecommendedSongs);
				break;
		}
		setMusicShuffle(jukeboxSpecs.shuffle);
		this.setSliderBounds();
	}
	setGenre(val) {
		jukeboxSpecs.genre = val;
		this.refreshList();
	}
	saveDefault() {
		settings.musicDontAsk = jukeboxSpecs;
		saveSettings();
	}
}

var songList = SONG_LIST.slice();

var jukeboxSpecs = {
	sort : 0,
	intensityMin : 0,
	intensityMax : 1,
	favsOnly : false,
	shuffle : false,
	recommend : true,
	genre : 0,
}

function filterSongList() {
	songList = SONG_LIST.slice();
	/*songList = SONG_LIST.slice().filter(s=>s.intensity>=jukeboxSpecs.intensityMin && s.intensity<=jukeboxSpecs.intensityMax);
	if (jukeboxSpecs.favsOnly)
		songList = songList.filter(s=>s.fav);
	if (jukeboxSpecs.genre) {
		var genreName = MUSIC_GENRES[jukeboxSpecs.genre];
		songList = songList.filter(s=>s[genreName]);
	}
	SONG_LIST.forEach(s=>s.s=false);
	songList.forEach(s=>s.s=true);
	switch (jukeboxSpecs.sort) {
		case 0: songList.sort((a,b)=> a.by < b.by ? -1 : 1); break;
		case 1: songList.sort((a,b)=> a.name < b.name ? -1 : 1); break;
	}*/
}

function getIntensityDesc(val) {
	return lg("Jukebox-Intensities")[val*4];
}
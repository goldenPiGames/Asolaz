const CC_BY_3 = "Creative Commons Attribution 3.0 License";
const CC_BY_4 = "Creative Commons Attribution 4.0 International License";
const MUSIC_GENRES = ["all", "chiptune"];


const SONG_LIST_ABS = [
	{name:"BattleField 4",
		by:"PeriTune", yt:"IR1aVoMOoRs", siten:"PeriTune", site:"https://peritune.com/battlefield4/"},
	{name:"OverWorld 3", intensity:1/2,
		by:"PeriTune", yt:"HGNbMDrjKgg", siten:"PeriTune", site:"https://peritune.com/overworld3/"},
	{name:"Lab Rats Theme", intensity:0, adultOnly:1,
		by:"Vren", pat:"vrengames"},
]
//Because some sites have an upload size limit.
//const SONG_LIST = STRIP_SONGS ? SONG_LIST_ABS.filter(s=>s[STRIP_SONGS]) : SONG_LIST_ABS;
const SONG_LIST = SONG_LIST_ABS.filter(s => (!s.adultOnly || VERSION_ADULT));

var SONG_HASH = {};
SONG_LIST.forEach(function(sing, dex) {
	if (!sing.iname)
		sing.iname = ((sing.fname || sing.name) + "-" + sing.by).replace(/\s/g, "");
	sing.src = "src/Audio/Songs/" + sing.iname + ".mp3";
	SONG_HASH[sing.iname] = sing;
	SONG_HASH[sing.name + " - " + sing.by] = sing;
	SONG_HASH[sing.name] = sing;
	sing.index = dex;
	sing.sites = [];
	if (sing.site)
		sing.sites.push({name:sing.siten, href:sing.site});
	if (sing.yt)
		sing.sites.push({name:"YouTube", href:"https://www.youtube.com/watch?v="+sing.yt});
	if (sing.sc)
		sing.sites.push({name:"SoundCloud", href:"https://soundcloud.com/"+sing.sc});
	if (sing.ng)
		sing.sites.push({name:"Newgrounds", href:"https://www.newgrounds.com/audio/listen/"+sing.ng});
	if (sing.spot)
		sing.sites.push({name:"Spotify", href:"https://open.spotify.com/album/"+sing.spot});
	if (sing.pat)
		sing.sites.push({name:"Patreon", href:"https://www.patreon.com/"+sing.pat});
});

function loadFavSongs() {
	var loaded = localStorage.getItem("FavSongs");
	if (loaded) {
		var favs = JSON.parse(loaded);
		SONG_LIST.forEach(sing => sing.fav = favs[sing.iname]);
	}
}

function toggleFavSong(sing) {
	if (sing) {
		sing.fav = !sing.fav;
		var favs;
		var loaded = localStorage.getItem("FavSongs");
		if (favs) {
			favs = JSON.parse(loaded);
			favs[sing.iname] = sing.fav;
		} else {
			favs = {};
			SONG_LIST.forEach(sang => favs[sang.iname] = sang.fav);
		}
		localStorage.setItem("FavSongs", JSON.stringify(favs));
	}
}

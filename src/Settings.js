var settings = {
	music : .8,
	sfx : .8,
	focusOutPause : true,
	profanity : false,
	font : "sans-serif",
	sfxSystem : "audio",
	background_color : "#FFFFFF",
	normal_color : "#000000",
	beam_color : "#FF0000",
	hover_color : "#00DDFF",
	click_color : "#00FF00",
	disabled_color : "#808080",
	bgNumber : 1/5,
	alertDrag : true,
	cursorParticles : true,
	adultDontAsk : false,
}

function loadSettings() {
	var loaded = localStorage.getItem("AsolazSettings");
	if (loaded) {
		loaded = JSON.parse(loaded);
		for (sett in loaded) {
			settings[sett] = loaded[sett];
		}
	}
	//loadFavSongs();
	loadPaletteFromSettings();
	//setMusicVolume(settings.music);
	applyFont(settings.font);
}

function saveSettings() {
	localStorage.setItem("AsolazSettings", JSON.stringify(settings));
}

function doSettings() {
	runnee = new SettingsScreen();
}

function setFont(now) {
	settings.font = now;
	applyFont(settings.font);
}

function applyFont(now) {
	document.body.font = now;
	if (inputs)
		inputs.forEach(i=>i.style.fontFamily=now);
}

const PALETTE_NAMES = ["background", "normal", "beam", "hover", "click", "disabled", "samegame0", "samegame1", "samegame2", "samegame3", "samegame4", "samegame5", "samegame6", "samegame7", "player"];
const RAINBOW_7 = ["#FF0000", "#FF8000", "#FFFF00", "#00FF00", "#0000FF", "#4000FF", "#8000FF"];

var palette = {
	normal : "#000000",
	background : "#FFFFFF",
	hover : "#00FFFF",
	click : "#00FF00",
	disabled : "#808080",
}


function loadPaletteFromSettings() {
	PALETTE_NAMES.forEach(nom => palette[nom] = settings[nom+"_color"]);
	palette["samegame-1"] = palette.background;
}
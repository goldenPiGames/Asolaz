var settings = localStorage.getItem("FP69Settings");
if (settings)
	settings = JSON.parse(settings);
else
	settings = {
		font : "sans-serif",
	}

var palette = {
	normal : "#000000",
	background : "#FFFFFF",
	hover : "#00FFFF",
	click : "#00FF00",
	disabled : "#808080",
}

function saveSettings() {
	localStorage.setItem(JSON.stringify(settings));
}

function applySettings() {
	//UI.log.style.fontSize = settings.logFontSize;
	//UI.log.style.fontFamily = settings.logFontFamily;
}

//const NUM_CHOICES = 8;
const UI = {};
var backDiv;
var canvas;
var ctx;

function getUI() {
	backDiv = document.getElementById("BackgroundBox");
	canvas = document.getElementById("MainCanvas");
	ctx = canvas.getContext("2d");
	initInputs();
	initMusic();
	/*UI.log = document.getElementById("Log");
	UI.choices = [];
	for (var i = 0; i < NUM_CHOICES; i++) {
		UI.choices[i] = document.getElementById("Choice"+i);
	}
	UI.file = document.getElementById("File");
	UI.save = document.getElementById("Save");
	UI.save.onclick = ()=>saveGame(UI.file.value);
	UI.load = document.getElementById("Load");
	UI.load.onclick = ()=>loadGame(UI.file.value);*/
}

/*function setLog(log) {
	UI.log.innerHTML = log;
}

function setChoices(choices) {
	//console.log(choices);
	for (var i = 0; i < choices.length; i++) {
		UI.choices[i].innerHTML = choices[i].text;
		let scr = choices[i].script;
		UI.choices[i].onclick = ()=>doScript(scr);
	}
	for (var i = choices.length; i < NUM_CHOICES; i++) {
		UI.choices[i].innerHTML = "";
		UI.choices[i].onclick = null;
	}
}*/

function resize() {
	var width = window.innerWidth;
	var height = window.innerHeight;
	//console.log(width, height);
	//backgroundBox.style.width = width + "px";
	//backgroundBox.style.height = height + "px";
	canvas.width = width;
	canvas.height = height;
	if (runnee)
		runnee.resize();
}
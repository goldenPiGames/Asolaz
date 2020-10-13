class SleepScene extends SceneScreen {
	constructor() {
		super();
		var log = [
			{text:"You go to sleep.", background:"black.png"},
		]
		this.startLog(log);
	}
	logEnded() {
		goToSleep();
	}
}

function sleepFromLocation() {
	switchScreen(new SleepScene());
}

function goToSleep() {
	for (var i = 0; i < getMinSleepTime(); i++) {
		data.player.waketime = 4;
		advanceTime();
	}
	data.player.waketime = getMaxWakeTime();
	autosave();
	returnToLocation();
}
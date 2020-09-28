class SleepScene extends SceneScreen {
	constructor() {
		super();
		var log = [
			
		]
		this.startLog(log);
	}
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
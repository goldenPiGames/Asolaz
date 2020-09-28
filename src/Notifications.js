var notifications = [];
//TODO the entire notification system
function refreshNotifications() {
	if (data.player.waketime <= 1)
		tolog.push({log:{speaker:"You", text:"I'm getting tired. I won't be able to stay awake much longer."}});
	return tolog;
}

function addNotification(args) {
	
}

class NotificationsScene extends SceneScreen {
	constructor(tolog, ) {
		super();
		this.startLog(tolog);
	}
	logEnded() {
		this.returnToLocation();
	}
	advanceLine() {
		super.advanceLine();
		if (this.line.text) {
			
		}
	}
}
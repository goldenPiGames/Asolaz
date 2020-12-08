const INPUT_INFO = {
	left : {
		keyboard : [65, 37],
	},
	right : {
		keyboard : [68, 39],
	},
	up : {
		keyboard : [87, 38],
	},
	down : {
		keyboard : [83, 40],
	},
	interact : {
		keyboard : [32, 90],
	},
	/*gear : {
		keyboard : 16,
		keyboard : 96,
	},*/
	/*pause : {
		keyboard : 80,
		defaultGamepad : 9,
	},*/
}

const KEYBOARD_LENGTH = 100;

var keysPressed = new Array(KEYBOARD_LENGTH).fill(false);
var keysHeld = new Array(KEYBOARD_LENGTH).fill(false);

/*class GamepadInput extends Input {
	constructor(gpindex, binds, stickbinds, stickbindNames) {
		super();
		this.gpindex = gpindex;
		this.setBinds(binds, stickbinds, stickbindNames);
	}
	updateBefore() {
		
	}
	getMoveVector() {
		var gp = getGamepad(this.gpindex);
		return new VectorRect(gp.axes[0], gp.axes[1]).capR(1);
	}
}*/

function isHotkeyPressed(nom) {
	if (!INPUT_INFO[nom]) {
		throwMaybe(nom+" isn't a hotkey, dumbnuts");
		return false;
	}
	return INPUT_INFO[nom].keyboard.find(f=>keysPressed[f]>=globalTimer);
}

document.addEventListener("keydown", function(e) {
	if (document.activeElement.type != "text")
		e.preventDefault();
	keysPressed[e.keyCode] = globalTimer;
	keysHeld[e.keyCode] = globalTimer;
});

document.addEventListener("keyup", function(e) {
	keysHeld[e.keyCode] = false;
});

/*window.addEventListener("gamepadconnected", function(e) {
	gp = e.gamepad;
	if (gp.buttons.length >= 4 && !controllers.find(co => co.gpindex == gp.index))
		controllers.push(new GamepadInput(gp.index, controlSettings.gamepad));
});*/
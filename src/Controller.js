//mouse
var mouse = {
	x:NaN,
	y:0,
	clicked:false,
	down:false,
	unClick : function() {
		this.clicked = false;
		this.rightClicked = false;
		this.wasPressed = this.pressed;
		this.lastX = this.x;
		this.lastY = this.y;
		this.scrolled = 0;
	}
}

function setMousePosition(clientX, clientY) {
	//var rekt = canvas.getBoundingClientRect();
	//mouse.x = (clientX - rekt.x) / rekt.width * WIDTH;
	//mouse.y = (clientY - rekt.y) / rekt.height * HEIGHT;
	mouse.x = clientX;
	mouse.y = clientY;
}

function addEvents() {
	canvas.addEventListener("mousemove", function(e) {
		setMousePosition(e.clientX, e.clientY);
	});
	
	canvas.addEventListener("mousedown", function(e) {
		if (e.button == 2)
			return;
		mouse.clicked = true;
		mouse.down = true;
		mouse.lastUsed = "mouse";
	});
	
	document.addEventListener("mouseup", function(e) {
		mouse.down = false;
		mouse.clicked;
	});
	
	canvas.addEventListener("wheel", function(e) {
		e.preventDefault();
		mouse.scrolled += e.deltaY > 0 ? 1 : -1;
		//console.log(mouse.scrolled);
		mouse.lastUsed = "mouse";
	});
	
	canvas.addEventListener("mouseclick", function (e) {
		//e.preventDefault();
	});
	
	canvas.addEventListener("dblclick", function (e) {
		e.preventDefault();
	});
	
	canvas.addEventListener("touchstart", function(e) {
		//if (runnee.overrideTouch) because otherwise it'll sometimes click twice and i don't know how else to fix that
			e.preventDefault();
		mouse.clicked = true;
		mouse.down = true;
		setMousePosition(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
		mouse.lastUsed = "touch";
	});
	
	backDiv.addEventListener("contextmenu", controlMenuClick);
	
	canvas.addEventListener("touchend", function(e) {
		if (runnee.overrideTouch)
			e.preventDefault();
		mouse.down = false;
		mouse.x = NaN;
		mouse.y = NaN;
	});
	
	canvas.addEventListener("touchcancel", function(e) {
		if (runnee.overrideTouch)
			e.preventDefault();
		mouse.down = false;
		mouse.x = NaN;
		mouse.y = NaN;
	});
	
	canvas.addEventListener("touchmove", function(e) {
		if (runnee.overrideTouch)
			e.preventDefault();
		setMousePosition(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
		mouse.lastUsed = "touch";
	});
	
	document.addEventListener("fullscreenchange", resize);
	
	document.addEventListener("fullscreenerror", function(e) {
		qAlert(lg("Fullscreen-Reject"));
	});
	
	//window.addEventListener("focus", musicFocus);
	
	//window.addEventListener("blur", musicFocusOut);
	
	window.addEventListener("resize", resize);
	
	resize();
}

function controlMenuClick(e) {
	mouse.rightClicked = true;
	mouse.lastUsed = "mouse";
	e.preventDefault();
	return false;
}

function disableRightClick() {
	backDiv.removeEventListener("contextmenu", controlMenuClick);
}

function attemptFullscreen() {
	if (document.fullscreen) {
		document.exitFullscreen();
	} else {
		try {
			backDiv.requestFullscreen();
		} catch (e) {
			qAlert(lg("Fullscreen-Reject"));
		}
	}
}

function bubbleDrawIFullscreen() {
	ctx.beginPath();
	ctx.moveTo(this.x-this.radius/2, this.y-this.radius/4);
	ctx.lineTo(this.x-this.radius/2, this.y-this.radius/2);
	ctx.lineTo(this.x-this.radius/4, this.y-this.radius/2);
	ctx.moveTo(this.x+this.radius/4, this.y-this.radius/2);
	ctx.lineTo(this.x+this.radius/2, this.y-this.radius/2);
	ctx.lineTo(this.x+this.radius/2, this.y-this.radius/4);
	ctx.moveTo(this.x+this.radius/2, this.y+this.radius/4);
	ctx.lineTo(this.x+this.radius/2, this.y+this.radius/2);
	ctx.lineTo(this.x+this.radius/4, this.y+this.radius/2);
	ctx.moveTo(this.x-this.radius/4, this.y+this.radius/2);
	ctx.lineTo(this.x-this.radius/2, this.y+this.radius/2);
	ctx.lineTo(this.x-this.radius/2, this.y+this.radius/4);
	ctx.stroke();
}
var data = {};

function begin() {
	getUI();
	initSFX();
	loadSettings();
	addEvents();
	if (VERSION_ADULT && !settings.adultDontAsk) {
		switchScreen(new AdultWarningScreen());
	} else {
		switchScreen(new MainMenu());
	}
	coreEngine.run();
}

function processText(text, ...rest) {
	if (!text)
		return "";
	return text.replace(/\[.+?\]/g, tag=>processTextTag(tag, ...rest));
}

function processTextTag(tag, character = characterFocus) {
	var args = tag.substring(1, tag.length-1).split("|");
	switch (args[0]) {
		case "adult": return VERSION_ADULT ? args[1] : args[2];
		case "pname": case "playername":
			return data.player.name; break;
		case "pgender": case "playergender":
			return args[data.player.gender]; break;
		case "cname": case "charname":
			if (!character) {
				throwMaybe("No character specified");
				return "(ERROR: No char)";
			}
			return CHARACTER_DATA[character].name; break;
		case "cgend": case "cgender":
			return processTextSwitchGend(args, character); break;
		case "cgendobj":
			return processTextSwitchGend([args[0], "him", "her", "them"], character); break;
		case "cgendposs":
			return processTextSwitchGend([args[0], "his", "her", "their"], character); break;
		case "cgendPoss":
			return processTextSwitchGend([args[0], "His", "Her", "Their"], character); break;
		case "cgendverb":
			return processTextSwitchGend([args[0], "he "+args[1]+"s", "she "+args[1]+"s", "they "+args[1]], character); break;
		case "cgendVerb":
			return processTextSwitchGend([args[0], "He "+args[1]+"s", "She "+args[1]+"s", "They "+args[1]], character); break;
		case "random": return randomTerm(args); break;
		default:
			throwMaybe("Couldn't recognize tag "+args[0]);
			return tag;
			break;
	}
}

function processTextSwitchGend(args, character) {
	if (!character) {
		throwMaybe("No character specified");
		return "(ERROR: No char)";
	}
	return args[CHARACTER_DATA[character].gender];
}

function drawTextInRect(text, x, y, width, height, opts = {}) {
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.font = height+"px "+settings.font;
	var wid = ctx.measureText(text).width;
	if (wid > width)
		ctx.font = (height*width/wid)+"px "+settings.font;
	if (opts.strokeStyle || opts.stroke) {
		ctx.lineWidth = 2;
		ctx.strokeStyle = opts.strokeStyle || opts.stroke;
		ctx.strokeText(text, x+width/2, y+height/2);
	}
	if (opts.fillStyle || opts.fill)
		ctx.fillStyle = opts.fillStyle || opts.fill;
	ctx.fillText(text, x+width/2, y+height/2);
}

function drawParagraphInRect(text, x, y, width, height, size) {
	if (!text)
		return y;
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.font = size+"px "+settings.font;
	if (Array.isArray(text))
		text = text.join(" <br> ");
	var words = text.split(" ");
	var cx = x;
	var cy = y;
	for (var i = 0; i < words.length; i++) {
		ctx.fillStyle = palette.normal;
		var word = words[i];
		if (word.indexOf("<") >= 0) {
			if (word == "<br>") {
				cy += size;
				cx = x;
			}
		}
		var wwid = ctx.measureText(word).width;
		//console.log(word, cx, cy);
		if (word != "<br>") {
			if (cx + wwid > x + width) {
				cy += size;
				cx = x;
			}
			ctx.fillText(word, cx, cy);
			cx += wwid + ctx.measureText(" ").width;
		}
	}
	return cy + size;
}

function drawADV(text, stuff) {
	var head;
	var chardat = CHARACTER_DATA[stuff];
	var colorBack = palette.background;
	if (chardat) {
		head = chardat.name;
		colorBack = chardat.colors.light;
	} else if (typeof stuff == "string")
		head = stuff;
	var bwidth = Math.min(canvas.width-10, Math.max(canvas.width/2, 600));
	var bx = canvas.width/2 - bwidth/2;
	var bheight = 200;
	var by = canvas.height - 5 - bheight;
	var hx = bx;
	var hwidth = 240;
	var hheight = 50;
	var hy = by - hheight
	ctx.fillStyle = colorBack;
	ctx.strokeStyle = palette.normal;
	ctx.fillRect(bx, by, bwidth, bheight);
	ctx.strokeRect(bx, by, bwidth, bheight);
	if (head) {
		ctx.fillRect(hx, hy, hwidth, hheight);
		ctx.strokeRect(hx, hy, hwidth, hheight);
	}
	ctx.fillStyle = palette.normal;
	drawParagraphInRect(text, bx+10, by+10, bwidth-20, bheight-20, 30);
	if (head)
		drawTextInRect(head, hx+5, hy+5, hwidth-10, hheight-10);
}

function drawTextUpperLeft(...lines) {
	ctx.font = "40px "+settings.font;
	ctx.lineWidth = 4;
	ctx.strokeStyle = "#000000";
	ctx.fillStyle = "#FFFFFF";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	lines.forEach((line, dex) => {
		ctx.strokeText(line, 0, 40*dex);
		ctx.fillText(line, 0, 40*dex);
	});
}

function drawTextUpperRight(...lines) {
	ctx.font = "40px "+settings.font;
	ctx.lineWidth = 4;
	ctx.strokeStyle = "#000000";
	ctx.fillStyle = "#FFFFFF";
	ctx.textAlign = "right";
	ctx.textBaseline = "top";
	lines.forEach((line, dex) => {
		ctx.strokeText(line, canvas.width, 40*dex);
		ctx.fillText(line, canvas.width, 40*dex);
	});
}

function makeImage(sauce) {
	var img = new Image();
	//loadingTotal++;
	img.onload = function() {
		//loadedYet++;
		//console.log("shub");
		//img.crossOrigin = "anonymous";
	};
	img.src = sauce;
	return img;
}

function throwMaybe(...args) {
	if (ERROR_THROW) {
		throw args[0];
	} else {
		console.log(...args);
		return false;
	}
}

function openNewTab(href) {
	window.open(href);
	mouse.down = false;
}
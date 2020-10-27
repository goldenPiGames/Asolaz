const LOGO_DATA = {
	youtube : {
		filename : "youtube.png",
		altText : "YouTube",
		altColor : "#212121",
		background : "#000000",
	},
	newgrounds : {
		filename : "newgrounds.png",
		altText : "Newgrounds",
		altColor : "#FF4000",
		background : "#212121",
	},
	soundcloud : {
		filename : "soundcloud.png",
		altText : "SoundCloud",
		altColor : "#FF4000",
		background : "#000000",
	},
	patreon : {
		filename : "patreon.png",
		altText : "Patreon",
		altColor : "#FF424D",
		background : "#000000",
	},
	wordpress : {
		filename : "wordpress.png",
		altText : "WordPress",
		altColor : "#464342",
		background : "#FFFFFF",
	},
	deviantart : {
		filename : "deviantart.png",
		altText : "DeviantArt",
		altColor : "#FFFFFF",
		background : "#000000",
	},
	sharecg : {
		filename : "sharecg.jpeg",
		altText : "sharecg",
		altColor : "#68d234",
		background : "#4b4b4b",
	},
	renderosity : {
		filename : "renderosity.png",
		altText : "Renderosity",
		altColor : "#FFFFFF",
		background : "#000000",
	},
	daz3d : {
		filename : "daz3d.webp",
		altText : "Daz3D",
		altColor : "#FFFFFF",
		background : "#000000",
	},
	discord : {
		filename : "discord.png",
		altText : "Discord",
		altColor : "#FFFFFF",
		background : "#7289DA",
	},
	renderotica : {
		filename : "renderotica.png",
		altText : "Renderotica",
		altColor : "#FFFFFF",
		background : "#000000",
	},
	mostdigitalcreations : {
		//filename : "renderotica.png",
		altText : "Creations",
		altColor : "#00FF00",
		background : "#000000",
	},
	peritune : {
		filename : "peritune.png",
		altText : "PeriTune",
		altColor : "#20851B",
		background : "#FFFFFF",
	},
}

function loadLogo(id) {
	if (LOGO_DATA[id].filename)
		LOGO_DATA[id].image = makeImage("src/images/logos/" + LOGO_DATA[id].filename);
}

function drawLogoInRect(id, x, y, width, height) {
	var log = LOGO_DATA[id];
	if (!log) {
		ctx.fillStyle = palette.background;
		ctx.fillRect(x, y, width, height);
		drawTextInRect(id, x, y, width, height, {fill:palette.normal});
	} else {
		if (log && !log.image)
			loadLogo(id);
		ctx.fillStyle = log.background;
		ctx.fillRect(x, y, width, height);
		if (!log.image || !drawImageInRect(log.image, x, y, width, height, {fill:log.altColor})) {
			drawTextInRect(log.altText, x, y, width, height, {fill:log.altColor});
		}
	}
}

class LogoLinkButton extends UIObject {
	constructor(dat, href) {
		super();
		if (typeof dat == "object") {
			this.logoID = dat.logoID || dat.logo || dat.site || dat.name.toLowerCase();
			this.href = dat.href || dat.url || dat.site;
		} else {
			this.logoID = dat;
			this.href = href;
		}
	}
	resize(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
	update() {
		super.update();
		if (this.hovered)
			hovered = true;
		if (this.clicked)
			openNewTab(this.href);
	}
	draw() {
		drawLogoInRect(this.logoID, this.x, this.y, this.width, this.height);
	}
}
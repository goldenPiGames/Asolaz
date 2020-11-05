function drawImageInRect(img, x, y, width, height) {
	try {
		if (img.height/img.width > height/width) { //taller image
			var wid = height*img.width/img.height;
			ctx.drawImage(img, x+width/2-wid/2, y, wid, height);
		} else { //wider image
			var hit = width*img.height/img.width;
			ctx.drawImage(img, x, y+height/2-hit/2, width, hit);
		}
		return true;
	} catch {
		//ctx.fillStyle = "#FF0000";
		//drawParagraphInRect(img.src + " isn't a valid image, apparently. I should probably fix this.", x, y, width, height, 25);
		console.log(img.src + " isn't a valid image, apparently. I should probably fix this.");
	}
}

function drawImageOutRect(img, x, y, width, height) {
	//TODO only accounts for tall images
	try {
		if (img.height/img.width > height/width) { //taller image
			var hit = width*img.height/img.width;
			ctx.drawImage(img, x, y+height/2-hit/2, width, hit);
		} else { //wider image
			var wid = height*img.width/img.height;
			ctx.drawImage(img, x+width/2-wid/2, y, wid, height);
		}
		return true;
	} catch {
		//ctx.fillStyle = "#FF0000";
		//drawParagraphInRect(img.src + " isn't a valid image, apparently. I should probably fix this.", x, y, width, height, 25);
		console.log(img.src + " isn't a valid image, apparently. I should probably fix this.");
	}
}

class CharImgHandler {
	constructor() {
		this.image = new Image();
		this.character = characterFocus;
		this.outfit = "default";
		this.pose = "standing";
		this.show = false;
	}
	change(args) {
		if (args.character)
			this.character = args.character;
		if (args.outfit)
			this.outfit = args.outfit;
		if (args.pose)
			this.pose = args.pose;
		this.show = true;
		if (args.hide)
			this.show = false;
		this.image.src = "src/images/characters/"+this.character+"/"+this.outfit+"/"+this.pose+".png";
	}
	draw() {
		if (this.show) {
			if (!VERSION_ADULT && this.outfit == "nude") {
				ctx.fillStyle = "#FF0000";
				drawParagraphInRect(this.character+" / "+this.outfit+" / "+this.pose + " is adult content and shall not be shown in the safe version. Emergency game kill activated.", canvas.width/2, canvas.height/2, canvas.width/4, canvas.height/4, 30);
				throw "butt";
				runnee = null;
				return false;
			}
			//	var wid = canvas.height*this.image.width/this.image.height;
			//	ctx.drawImage(this.image, canvas.width/2-wid/2, 0, wid, canvas.height);
			drawImageInRect(this.image, canvas.width/4, 0, canvas.width/2, canvas.height);
		}
	}
}

var bgImg;

function drawBG() {
	bgImg.draw();
}

function refreshBG() {
	bgImg.refresh();
}

function setTempBG(img) {
	bgImg.setTemp(img);
}

class BGImgHandler {
	constructor() {
		this.image = new Image();
	}
	refresh() {
		this.location = data.location;
		var dats = LOCATION_DATA[this.location].images;
		var imgname = [...TIME_DATA[data.time%TIME_DATA.length].imagetimes, "all"].find(n=>dats[n]);
		this.image.src = "src/images/backgrounds/"+dats[imgname];
		//console.log("src/images/backgrounds/"+dats[imgname])
	}
	draw() {
		//drawImageInRect(this.image, 0, 0, canvas.width, canvas.height);
		drawImageOutRect(this.image, 0, 0, canvas.width, canvas.height);
	}
	setTemp(sauce) {
		this.image.src = "src/images/backgrounds/"+sauce;
	}
}

function getImageTimeName() {
	
}

bgImg = new BGImgHandler();

function getSkillImage(id) {
	return makeImage("src/images/skills/"+id+".png");
}
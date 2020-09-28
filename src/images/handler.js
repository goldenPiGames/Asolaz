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
			try {
				var wid = canvas.height*this.image.width/this.image.height;
				ctx.drawImage(this.image, canvas.width/2-wid/2, 0, wid, canvas.height);
			} catch (e) {
				ctx.fillStyle = "#FF0000";
				drawParagraphInRect(this.character+" / "+this.outfit+" / "+this.pose + " isn't a valid image, apparently. I should probably fix this.", canvas.width/3, canvas.height/3, canvas.width/3, canvas.height/3, 30);
			}
		}
	}
}
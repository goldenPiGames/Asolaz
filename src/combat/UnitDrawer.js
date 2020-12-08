class UnitDrawer {
	constructor(panel) {
		this.panel = panel;
		this.unit = panel.unit;
	}
}

class EnemyDrawerImage extends UnitDrawer {
	constructor(panel) {
		super(panel);
		this.images = {};
		//console.log(this.imagePoses);
		this.imagePoses.forEach(im=>this.images[im] = makeImage("src/images/enemies/"+this.imageFolder+"/"+im+".png"));
	}
	draw(anim) {
		//console.log(this.getPose(anim))
		drawImageXYH(this.images[this.getPose(anim).find(e=>this.images[e])], this.panel.x+this.panel.width/2, this.panel.y, this.panel.height);
	}
	getPose(anim) {
		if (anim && anim.userDrawer == this) {
			var nur = anim.toNearestHit();
			//console.log(nur);
			if (nur <= 0 && nur > -15)
				return ["attackAfter", "normal"];
			else if (nur > 0 && nur < 15)
				return ["attackBefore", "normal"];
		}
		return ["normal"];
	}
}
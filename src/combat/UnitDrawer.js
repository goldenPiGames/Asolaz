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
		this.imagePoses.forEach(im=>this.images[im] = makeImage("src/images/enemies/"+this.imageFolder+"/"+im+".png"));
	}
	draw() {
		//console.log(this.getPose());
		drawImageInRect(this.images[this.getPose()], this.panel.x, this.panel.y, this.panel.width, this.panel.height);
	}
}
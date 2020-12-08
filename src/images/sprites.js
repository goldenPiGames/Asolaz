const SPRITE_DATA = {
	"tilesets/test" : {
		"wall_ul_corn" : {x:0, y:0, width:10, height:10},
		"wall_ur_corn" : {x:10, y:0, width:10, height:10},
		"wall_dl_corn" : {x:0, y:10, width:10, height:10},
		"wall_dr_corn" : {x:10, y:10, width:10, height:10},
		"wall_ul_horz" : {x:20, y:0, width:10, height:10},
		"wall_ur_horz" : {x:30, y:0, width:10, height:10},
		"wall_dl_horz" : {x:20, y:10, width:10, height:10},
		"wall_dr_horz" : {x:30, y:10, width:10, height:10},
		"wall_ul_vert" : {x:40, y:0, width:10, height:10},
		"wall_ur_vert" : {x:50, y:0, width:10, height:10},
		"wall_dl_vert" : {x:40, y:10, width:10, height:10},
		"wall_dr_vert" : {x:50, y:10, width:10, height:10},
		"wall_ul_both" : {x:60, y:0, width:10, height:10},
		"wall_ur_both" : {x:70, y:0, width:10, height:10},
		"wall_dl_both" : {x:60, y:10, width:10, height:10},
		"wall_dr_both" : {x:70, y:10, width:10, height:10},
		"wall_ul_full" : {x:80, y:0, width:10, height:10},
		"wall_ur_full" : {x:90, y:0, width:10, height:10},
		"wall_dl_full" : {x:80, y:10, width:10, height:10},
		"wall_dr_full" : {x:90, y:10, width:10, height:10},
		"floor" : {x:0, y:20, width:20, height:20},
	}
}

const SPRITES_LOADED = {};

function getSpriteSheet(name) {
	if (!SPRITES_LOADED[name])
		SPRITES_LOADED[name] = new SpriteSheet(name, SPRITE_DATA[name], true);
	return SPRITES_LOADED[name];
}

class SpriteSheet {
	constructor(nom, data, preload) {
		this.src = "src/images/"+nom+".png";
		this.data = data;
		if (preload)
			this.load();
	}
	drawSprite(name, x, y, width, height) {
		var datum = this.data[name];
		if (!datum) {
			throwMaybe(name + " is not a valid sprite name for " + this.src);
		}
		ctx.drawImage(this.image, datum.x, datum.y, datum.width, datum.height, x, y, width, height);
	}
	/*drawOnWorld(spriteName, args) {
		//console.log(spriteName)
		if (Array.isArray(spriteName))
			spriteName = spriteName.find(s=>this.data[s]);
		//console.log(spriteName)
		if (!spriteName)
			return;
		var datum = this.data[spriteName];
		if (args.rotation) {
			//TODO
			worldCtx.translate(args.x, args.y);
			worldCtx.rotate(args.rotation);
			worldCtx.translate(-args.x, -args.y);
		}
		if (args.flipHoriz) {
			worldCtx.scale(-1, 1);
			worldCtx.translate(-args.x*2, 0);
		}
		worldCtx.drawImage(this.image, datum.x, datum.y, datum.width, datum.height, args.x - ((args.width || datum.width) * args.xadj || 0), args.y - ((args.height || datum.height) * args.yadj || 0), args.width || datum.width*args.scale || datum.width, args.height || datum.height*args.scale || datum.height);
		worldCtx.setTransform(1, 0, 0, 1, 0, 0);
	}*/
	load() {
		if (this.loaded)
			return false;
		this.loaded = true;
		this.image = makeImage(this.src);
		return true;
	}
}
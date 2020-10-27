const DISCORD_LINK = "https://discord.gg/ErnbtbJ";
const PATREON_LINK = "https://www.patreon.com/goldenPiGames";
var poppedCredits = false;

class CreditsScreen extends Screen {
	constructor() {
		super();
		var things = [];
		this.scrollArea = new ScrollForm([
			new ScrollingHeading("Most Things"),
			new ScrollingText("Prexot (goldenPiGames)"),
			new ScrollingLogoLinkButtons([
				{name:"discord", href:DISCORD_LINK},
				{name:"newgrounds", href:"https://goldenpigames.newgrounds.com/"},
				{name:"patreon", href:PATREON_LINK},
			]),
			...(VERSION_ADULT ? [
				new ScrollingHeading("Guest Characters"),
				new ScrollingText("Alexia from Lab Rats by Vren"),
				new ScrollingLogoLinkButtons([
					{name:"patreon", href:"https://www.patreon.com/vrengames"},
				]),
			] : []),
			new ScrollingHeading("Assets"),
			...spreadEverything(CHARACTER_DATA_LIST.map(car=>[
				new ScrollingHeading2(car.name),
				car.credits3d.filter(cred=>VERSION_ADULT||!cred.adult).map(cred=>{
					if (!poppedCredits) {
						if (!cred.sites) {
							cred.sites = [];
						}
						if (cred.daz3d || cred.daz)
							cred.sites.push({name:"daz3d", href:"https://www.daz3d.com/"+(cred.daz3d || cred.daz)});
						if (cred.sharecg)
							cred.sites.push({name:"sharecg", href:"https://www.sharecg.com/v/"+cred.sharecg+"/"});
						if (cred.renderosity)
							cred.sites.push({name:"renderosity", href:"https://www.renderosity.com/mod/freestuff/?item_id="+cred.renderosity});
						if (cred.mostdigitalcreations)
							cred.sites.push({name:"mostdigitalcreations", href:"https://www.most-digital-creations.com/"+cred.mostdigitalcreations+".php"});
						if (cred.deviantart)
							cred.sites.push({name:"deviantart", href:"https://www.deviantart.com/"+cred.deviantart});
						if (cred.patreon)
							cred.sites.push({name:"patreon", href:"https://www.patreon.com/"+cred.patreon});
					}
					return [
						new ScrollingText(cred.what+": "+cred.name+" by "+cred.by),
						...(cred.sites.length > 0 ? [new ScrollingLogoLinkButtons(cred.sites)] : []),
					];
				}),
			]))
		])
		poppedCredits = true;
		this.returnButton = new RightMenuButton({id:"return"}, -1);
		this.resize();
	}
	resize() {
		this.scrollArea.resize(0, canvas.width-100);
		this.returnButton.resize(0, 100);
	}
	update() {
		this.scrollArea.update();
		this.returnButton.update();
		if (this.returnButton.clicked) {
			switchScreen(new MainMenu());
		}
	}
	draw() {
		this.scrollArea.draw();
		this.returnButton.draw();
	}
}
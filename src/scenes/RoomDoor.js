function checkRoomDoor(car) {
	startScene({
		log : [
			"Nothing to do here.",
		]
	});
	//switchScreen(new RoomDoorScreen(car));
}

class RoomDoorScreen extends SceneScreenFull {
	constructor(character) {
		super();
		setCharacterFocus(character);
		this.character = character;
		this.abouts = getCharacterStatus(character);
		this.startLog([
			{text:"You approach [cname]'s door."},
			{choices : [
				{text:"Knock", action:()=>this.knock()},
				{text:"Shift Sense through the door", action:()=>this.bye(), reqs:[{type:"pskill", skill:"shift_sense", level:2}]},
				{text:"Nevermind", action:()=>this.bye()},
			]}
		]);
	}
	knock() {
		var answered = false;
		if (this.abouts.location == data.location && this.abouts.status.inRoom) {
			if (VERSION_ADULT && this.abouts.status.sleepWith && willCharacterConsent(CONSENT_OFFER_SLEEP, this.character)) {
				answered = true;
				this.startLog([
					{charimg:{character:this.character, outfit:"default", pose:"standing"}},
					...randomCharDialog("knock_offersleep", this.character).log,
					{choices:[
						{text:"Sleep with "+CHARACTER_DATA[this.character].name, action:()=>roomSexHubLetIn(this.character)},
						{text:"No, thanks", action:()=>this.bye()},
					]},
				])
			}
		}
		if (!answered) {
			this.startLog([
				{text:"No answer."},
				{action:()=>this.bye()},
			]);
		}
	}
	bye() {
		return super.logEnded();
	}
}
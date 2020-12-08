class OpeningLetter extends Screen {
	constructor() {
		super();
		this.form = new ScrollForm([
			new ScrollingHeading("Welcome to Asolaz"),
			new ScrollingParagraph("We at Asolaz have divined that you possess extraordinary potential. For this reason, we would like to offer you acceptance and a full-ride scholarship at our prestigious institute."),
			new ScrollingHeading("Personal Information"),
			new ScrollingParagraph("Please input your singular name below. This should be your given name or a name of your own choosing. We do not use separate family names."),
			new ScrollingTextInput("name", "Your Name Here"),
			new ScrollingParagraph("What is your identified gender? This will not have any impact on gameplay, nor will it limit your opportunities.[adult| Conveniently, every other character in the game is pansexual.|]"),
			new ScrollingRadioButtons("gender", OPENING_GENDERS),
			...(VERSION_ADULT ? [
				new ScrollingParagraph("What do you have between your legs? Again, everyone is pansexual, so this won't limit your partners, but this will determine which scenes you can participate in. There will be ways to change this, or even have both."),
				new ScrollingRadioButtons("genitalia", [
					{
						name : "Penis",
						body : {
							penis : true,
							testicles : true,
							vagina : false,
							prostate : true,
						},
					},
					{
						name : "Vagina",
						body : {
							penis : false,
							testicles : false,
							vagina : true,
							prostate : false,
						},
					},
				]),
			] : []),
			new ScrollingHeading("Background"),
			new ScrollingParagraph("What were your plans before being accepted to Asolaz?"),
			new ScrollingParagraph("You can make a new start for yourself at Asolaz. Your background will not limit your opportunites, but it will determine your starting inspiration, skills, combat level, stats, items, and money."),
			new ScrollingRadioButtons("background", OPENING_BACKGROUNDS),
			new ScrollingSubmitButton(),
		], dat=>this.submitForm(dat));
		this.resize();
	}
	resize() {
		this.form.resize(20, canvas.width-40);
	}
	update() {
		this.form.update();
	}
	draw() {
		this.form.draw();
	}
	submitForm(dat) {
		console.log(dat);
		if (!dat.gender || !dat.background || VERSION_ADULT && !dat.genitalia) {
			return false;
		}
		data.player.name = dat.name;
		data.player.gender = dat.gender.gender;
		data.player.combatLevel = dat.background.combatLevel;
		data.player.inspiration = dat.background.inspiration;
		data.player.money = dat.background.money;
		data.player.skills = dat.background.skills;
		if (VERSION_ADULT) {
			data.player.body = {};
			for (var nom in dat.genitalia.body) {
				data.player.body[nom] = dat.genitalia.body[nom];
			}
		}
		data.player.actionsEquipped = [];
		for (var sid in data.player.skills) {
			if (SKILL_DATA[sid].combatActions)
				data.player.actionsEquipped.push(sid);
		}
		startScene("opening_arrive");
	}
}

const OPENING_GENDERS = [
	{
		name : "Male (he, him, his)",
		gender : GENDER_MALE,
	},
	{
		name : "Female (she, her, hers)",
		gender : GENDER_FEMALE,
	},
	{
		name : "Non-binary or other (they, them, their)",
		gender : GENDER_NB,
	},
	/*{
		name : "Non-binary or other (they, them, their)",
		gender : GENDER_NB,
	},*/
]

const OPENING_MONEY_MEDIUM = 500;
const OPENING_MONEY_LOW = 300;
const OPENING_MONEY_HIGH = 800;

const OPENING_BACKGROUNDS = [
	{
		name : "Undecided",
		flavor : "You haven't decided what to do with your life. You were just searching when you got this letter.",
		combatLevel : 11,
		inspiration : 100,
		money : OPENING_MONEY_HIGH,
		skills : {
			
		},
	},
	{
		name : "Laborer",
		flavor : "You work in a trade of hard manual labor.",
		combatLevel : 11,
		inspiration : 60,
		money : OPENING_MONEY_MEDIUM,
		skills : {
			power_chop : 1,
			//worker : 1,
		},
	},
	{
		name : "Entrepeneur",
		flavor : "You're an investor or businessperson.",
		combatLevel : 10,
		inspiration : 40,
		money : OPENING_MONEY_HIGH,
		skills : {
			//online investor
			//online shopper
		},
	},
	{
		name : "Police",
		flavor : "You're in training or active service as a member of law enforcement.",
		combatLevel : 12,
		inspiration : 20,
		money : OPENING_MONEY_LOW,
		skills : {
			sonic_raid : 1,
			//combat skills
		},
	},
	/*{
		name : "Investigator",
		combatLevel : 10,
		inspiration : 20,
		money : OPENING_MONEY_LOW,
		skills : {
			
		},
	},*/
	{
		name : "Soldier",
		flavor : "You're in training or active service as an enlisted member of an army.",
		combatLevel : 14,
		inspiration : 30,
		money : OPENING_MONEY_LOW,
		skills : {
			power_chop : 1,
			sonic_raid : 1,
		},
	},
	{
		name : "Military officer",
		flavor : "You're in an academy or active service as a comissioned officer in an army.",
		combatLevel : 13,
		inspiration : 20,
		money : OPENING_MONEY_MEDIUM,
		skills : {
			sonic_raid : 1,
		},
	},
	{
		name : "Battlemage",
		flavor : "You're in an academy or active service as a magic-wielding specialist in an army.",
		combatLevel : 13,
		inspiration : 20,
		money : OPENING_MONEY_MEDIUM,
		skills : {
			force_dart : 1,
		},
	},
	/*{
		name : "Thief",
		flavor : "You've made a living out of stealth-related crime, such as burglary or pickpocketing.",
		combatLevel : 11,
		inspiration : 20,
		money : OPENING_MONEY_MEDIUM,
		skills : {
			//force_dart : 1,
		},
	},*/
]

OPENING_BACKGROUNDS.forEach(b => {
	var snames = [];
	for (var sid in b.skills) {
		snames.push(SKILL_DATA[sid].name);
	}
	b.paragraph = "Combat level: " + b.combatLevel +
		" <br> Money: " + b.money +
		" <br> Inspiration: " + b.inspiration +
		//" <br> Items: " + b.items.map(,
		" <br> Skills: " + snames.join(", ") +
		" <br> " + b.flavor;
});
class OpeningLetter extends Screen {
	constructor() {
		super();
		this.form = new ScrollForm([
			new ScrollingHeading("Welcome to Asolaz"),
			new ScrollingParagraph("We at Asolaz have divined that you possess extraordinary potential. For this reason, we would like to offer you acceptance and a full-ride scholarship at our prestigious institute."),
			new ScrollingHeading("Personal Information"),
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
						},
					},
					{
						name : "Vagina",
						body : {
							penis : false,
							testicles : false,
							vagina : true,
						},
					},
				]),
			] : []),
			new ScrollingHeading("Background"),
			new ScrollingParagraph("You can make a new start for yourself at Asolaz. Your background will not limit your opportunites, but it will determine your starting experience points, skills, combat level, stats, items, and money."),
			new ScrollingRadioButtons("background", OPENING_BACKGROUNDS),
		]);
		this.resize();
	}
	resize() {
		this.form.resize(100, canvas.width-200);
	}
	update() {
		this.form.update();
	}
	draw() {
		this.form.draw();
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

const OPENING_BACKGROUNDS = [
	{
		name : "Undecided",
		cl : 10,
		exp : 100,
		skills : {
			
		},
	},
	{
		name : "Military training",
		cl : 15,
		exp : 20,
		skills : {
			
		},
	},
	{
		name : "Officer's academy",
		cl : 13,
		exp : 20,
		skills : {
			
		},
	},
	{
		name : "Battlemage's academy",
		cl : 13,
		exp : 20,
		skills : {
			
		},
	},
]
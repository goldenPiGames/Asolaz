const BLOCKS_PER_DAY = 12;
const DAYS_PER_WEEK = 7;
const BLOCKS_PER_WEEK = BLOCKS_PER_DAY * DAYS_PER_WEEK;

const TIME_DATA = [
	{
		name : "Midnight",
		hour : 0,
		hourname : "12 AM",
	},
	{
		name : "You should go to sleep",
		hour : 2,
		hourname : "2 AM",
	},
	{
		name : "Why are you awake now",
		hour : 4,
		hourname : "4 AM",
	},
	{
		name : "Early Morning",
		hour : 6,
		hourname : "6 AM",
	},
	{
		name : "Mid Morning",
		hour : 8,
		hourname : "8 AM",
	},
	{
		name : "Late Morning",
		hour : 10,
		hourname : "10 AM",
	},
	{
		name : "Noon",
		hour : 12,
		hourname : "12 PM",
	},
	{
		name : "Early Afternoon",
		hour : 14,
		hourname : "2 PM",
	},
	{
		name : "Mid Afternoon",
		hour : 16,
		hourname : "4 PM",
	},
	{
		name : "Late Afternoon",
		hour : 18,
		hourname : "6 PM",
	},
	{
		name : "Evening",
		hour : 20,
		hourname : "8 PM",
	},
	{
		name : "Late Evening",
		hour : 22,
		hourname : "10 PM",
	},
]

const DAYS_DATA = [
	{
		abbr:"Sun",
	},
	{
		abbr:"Mon",
	},
	{
		abbr:"Tue",
	},
	{
		abbr:"Wed",
	},
	{
		abbr:"Thu",
	},
	{
		abbr:"Fri",
	},
	{
		abbr:"Sat",
	},
]

function advanceTime() {
	data.time++;
	data.player.waketime--;
}

function getWakeTimeLeft() {
	return data.player.waketime;
}

function getMinWakeTime() {
	return 6;
}

function getMaxWakeTime() {
	return BLOCKS_PER_DAY + 2 - getMinSleepTime();
}

function getMinSleepTime() {
	var tim = 4;
	if (playerSkillKnown("sleep_fast_psi"))
		tim--;
	if (playerSkillKnown("sleep_fast_arc"))
		tim--;
	return tim;
}

function getCornerTime(time) {
	if (!time)
		time = data.time;
	return TIME_DATA[time % BLOCKS_PER_DAY].hourname + ", Day " + Math.floor(time/BLOCKS_PER_DAY) + " (" + DAYS_DATA[Math.floor(time/BLOCKS_PER_DAY) % DAYS_PER_WEEK].abbr + ")";
}
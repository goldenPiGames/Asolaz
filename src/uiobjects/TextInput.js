const NUM_TEXT_INPUTS = 2;

var textInputs = [];
var textInputIndex = 0;
var test100;
var fileInput;
var inputs;

function initInputs() {
	test100 = document.getElementById("Test100");
	for (var i = 0; i < NUM_TEXT_INPUTS; i++) {
		textInputs[i] = document.getElementById("TextInput"+i);
	}
	fileInput = document.getElementById("FileInput");
	inputs = [
		...textInputs,
		fileInput,
	];
	//inputs.forEach(i=>i.style.fontFamily=settings.font);
}

function updateTextInputsBefore() {
	for (var i = 0; i < NUM_TEXT_INPUTS; i++) {
		textInputs[i].hidden = !(i < textInputIndex);
	}
	textInputIndex = 0;
}

function updateTextInput(x, y, width, height, skipped, text, placeholder) {
	moveInput(textInputs[textInputIndex], x, y, width, height);
	if (skipped) {
		textInputs[textInputIndex].value = text;
		textInputs[textInputIndex].placeholder = placeholder;
	} else {
		text = textInputs[textInputIndex].value;
	}
	textInputIndex++;
	return text;
}

function setTextInput(which, x, y, width, height, text) {
	var p = typeof which == "number" ? inputs[which] : which;
	p.lastMoveArgs = [x, y, width, height];
	p.hidden = false;
	moveInput(p, x, y, width, height);
	p.placeholder = text;
	p.value = "";
	p.style.border = "3px solid "+settings.normal_color;
	p.style.background = settings.background_color;
	p.style.color = settings.normal_color;
}

function resizeInputs() {
	if (!inputs)
		return;
	inputs.forEach(pu=>{
		if (pu.hidden)
			return false;
		moveInput(pu, ...pu.lastMoveArgs);
	});
}

function hideTextInput() {
	textInput0.hidden = true;
}

function hideInputs() {
	inputs.forEach(pu=>pu.hidden = true);
}

function moveInput(input, x, y, width, height) {
	/*var rect = canvasToCSSRect(x, y, width, height);
	input.style.left = rect.x + "px";
	input.style.top = rect.y + "px";
	input.style.width = rect.width-6 + "px";
	let h = rect.height-6;
	input.style.height = h + "px";
	input.style.fontSize = (h-2)+"px";*/
	input.style.left = x + "px";
	input.style.top = y + "px";
	input.style.width = width-6 + "px";
	input.style.height = (height-6) + "px";
	input.style.fontSize = (height-8)+"px";
}

function setFileInput(x, y, width, height, type) {
	fileInput.lastMoveArgs = [x, y, width, height];
	fileInput.hidden = false;
	moveInput(fileInput, x, y, width, height);
	fileInput.files = null;
	fileInput.accept = type || "application/json";
	//fileInput.style.border = "3px solid "+settings.normal_color;
	fileInput.style.background = settings.background_color;
	fileInput.style.color = settings.normal_color;
}

function hideFileInput() {
	fileInput.hidden = true;
}

function canvasToCSSRect(x, y, width, height) {
	var rekt100 = test100.getBoundingClientRect();
	var rektCanvas = canvas.getBoundingClientRect();
	return {
		x : rektCanvas.width / rekt100.width * x / WIDTH * 100 + rektCanvas.x - rekt100.x,
		y : rektCanvas.height / rekt100.height * y / HEIGHT * 100 + rektCanvas.y - rekt100.y,
		width : rektCanvas.width / rekt100.width * width / WIDTH * 100,
		height : rektCanvas.height / rekt100.height * height / HEIGHT * 100,
	}
}
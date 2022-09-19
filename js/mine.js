function Spoiler() {
	var ele = document.getElementById("more");
	var text = document.getElementById("spanclick");
	if (ele.style.display == "block") {
		ele.style.display = "none";
		text.innerHTML = "Читать полностью";
	}
	else {
		ele.style.display = "block";
		text.innerHTML = "Скрыть";
	}
}

function Spoilertwo() {
	var ele = document.getElementById("moretwo");
	var text = document.getElementById("spanclick-two");
	if (ele.style.display == "block") {
		ele.style.display = "none";
		text.innerHTML = "Читать полностью";
	}
	else {
		ele.style.display = "block";
		text.innerHTML = "Скрыть";
	}
}

function Spoilerth() {
	var ele = document.getElementById("morethree");
	var text = document.getElementById("spanclick-three");
	if (ele.style.display == "block") {
		ele.style.display = "none";
		text.innerHTML = "Читать полностью";
	}
	else {
		ele.style.display = "block";
		text.innerHTML = "Скрыть";
	}
}
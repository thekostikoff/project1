function showText() {
	var dots = document.getElementById('dots');
	var more = document.getElementById('more');
	var spanclick = document.getElementById('spanclick');

	if (dots.style === "none") {
		dots.style.display = "inline";
		spanclick.innerHTML = "Читать полностью";
		more.style.display = "none";
	} else {
		{
			dots.style.display = "none";
			spanclick.innerHTML = "Скрыть";
			more.style.display = "inline";
		}
	}
}

function showTexttwo() {
	var dotstwo = document.getElementById('dotstwo');
	var moretwo = document.getElementById('moretwo');
	var spanclicktwo = document.getElementById('spanclicktwo');

	if (dotstwo.style === "none") {
		dotstwo.style.display = "inline";
		spanclicktwo.innerHTML = "Читать полностью";
		moretwo.style.display = "none";
	} else {
		{
			dotstwo.style.display = "none";
			spanclicktwo.innerHTML = "Скрыть";
			moretwo.style.display = "inline";
		}
	}
}
function showTextthree() {
	var dotsthree = document.getElementById('dotsthree');
	var morethree = document.getElementById('morethree');
	var spanclickthree = document.getElementById('spanclickthree');

	if (dotsthree.style === "none") {
		dotsthree.style.display = "inline";
		spanclickthree.innerHTML = "Читать полностью";
		morethree.style.display = "none";
	} else {
		{
			dotsthree.style.display = "none";
			spanclickthree.innerHTML = " Скрыть";
			morethree.style.display = "inline";
		}
	}
}


let time = 20245;
const countDownEl = document.getElementById("clocks");

setInterval(updateClocks, 1000);

function updateClocks() {
	let hours = Math.floor(time / 3600);
	let minutes = Math.floor((time - (hours * 3600)) / 60);
	let seconds = time % 60;
	hours = hours < 10 ? "0" + hours : hours;
	minutes = minutes < 10 ? "0" + minutes : minutes;
	seconds = seconds < 10 ? "0" + seconds : seconds;
	countDownEl.innerHTML = `${hours}:${minutes}:${seconds}`;
	time--;
}


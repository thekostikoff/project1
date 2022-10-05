
function read() {
	document.getElementById('burger').classList.toggle('active');
	document.getElementById('menu').classList.toggle('active');
	document.getElementById('link').classList.toggle('active');

}
document.getElementById('burger').addEventListener('click', () => read());
document.getElementById('menu').addEventListener('click', () => read());
document.getElementById('link').addEventListener('click', () => read());

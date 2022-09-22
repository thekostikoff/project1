const talk = document.querySelector('.mans__talk');
const links = document.querySelectorAll('.mans__span');
const points = document.querySelectorAll('.speech__dots');
const headenblocks = document.querySelectorAll('.speech__more');
const hide = document.querySelectorAll('.mans__spans');
const open = (e) => {
	for (let i = 0; i < links.length; i++) {
		if (links[i] === e.target) {
			headenblocks[i].classList.toggle('hd');
			points[i].classList.toggle('hd');
			hide[i].classList.toggle('hd');
			links[i].classList.toggle('hd');
		}
	}
	console.log(e.target)
}
talk.addEventListener('click', open)

const close = (e) => {
	for (let i = 0; i < hide.length; i++) {
		if (hide[i] === e.target) {
			headenblocks[i].classList.toggle('op'); ы
			points[i].classList.toggle('op');
			hide[i].classList.toggle('op');
			links[i].classList.toggle('op');
		}
	}
	console.log(e.target)
}
talk.addEventListener('click', close)
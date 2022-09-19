let offset = 0;
const carscars = document.querySelector('.cars__cars');

document.querySelector('.img__left').addEventListener('click', function () {
	offset = offset + 1029;
	if (offset > 2058) {
		offset = 0;
	}
	carscars.style.left = -offset + 'px';
});

document.querySelector('.img__right').addEventListener('click', function () {
	offset = offset - 1029;
	if (offset < 0) {
		offset = 2058;
	}
	carscars.style.left = -offset + 'px';
});

function first() {
	document.getElementById("second_hide").classList.toggle('hidden');
	document.getElementById("first").classList.toggle('hidden');
}


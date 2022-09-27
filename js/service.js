let offset = 0;
const carscars = document.querySelector('.cars__cars');
const carsbut = document.querySelectorAll('.cars__but');
// const gaz = document.querySelectorAll('gaz');
// const cabl = document.querySelectorAll('cabl');
// const truck = document.querySelectorAll('truck');

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

function showimg(carsbut) {
	switch (carsbut) {
		case "gaz":
			offset = offset + 1029;
			carscars.style.left = offset + 'px';
			break;
		case "cabl":
			offset = 0;
			carscars.style.left = offset;
			break;
		case "truck":
			offset = offset - 1029;
			carscars.style.left = offset - 'px';
			break;
	}
}

document.getElementbyId('gaz').addEventListener('click', function showimg(cabl));

function openNav() {
	document.getElementById('my-side-nav').style.width = '250px';
}

function closeNav() {
	document.getElementById('my-side-nav').style.width = '0';
}

let isClicked = false;
function menuToggle(x) {
	x.classList.toggle('change');
	if (isClicked) {
		closeNav();
		isClicked = false;
	} else {
		openNav();
		isClicked = true;
	}
}

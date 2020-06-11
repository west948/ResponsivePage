/*getComputedStyle(showMenu).display;*/
	

function showMenu () {
	let showMe = document.getElementById('part');
		 showMe.setAttribute('class', "part");
	let showMenu = document.getElementById('hidden');
showMenu.setAttribute('class', "show");
}

function hideMenu () {
	let showMe = document.getElementById('part');
	let showMenu = document.getElementById('hidden');
	showMenu.setAttribute('class', "hid");
	showMe.setAttribute('class', "hid");
}

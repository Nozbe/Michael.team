// Redirecting to links from the MICHAEL.GRATIS site:
// https://michael.gratis/REDIRECT
// which translates to https://michael.team/redirect?to=REDIRECT

let links = new Map([

//list of REDIRECT links
['michael', 'https://michael.team/'],
['nooffice', 'https://nooffice.org'],

]);

function redirect () {
	let params = new URLSearchParams(window.location.search);
	let to = params.get('to');
	if (to) {
		document.querySelector("#to").setAttribute("href", links.get(to));
		document.querySelector('meta[http-equiv="Refresh"]').setAttribute("content", '0; ' + links.get(to));
	}
}
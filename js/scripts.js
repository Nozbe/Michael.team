// scripts for michael.team
// written by Michael Sliwinski
// published under CC license: michael.team/license

const URL = "https://michael.team/";

function getNow () {
	let intro = document.querySelector("#intro");
	intro.after(createSpinner());
	alert (URL);
	let now = document.createElement('article');
	now.innerHTML = getArticle('now200626');
	createSpinner(true);
	intro.after(now);
}

function getArticle (url) {
	fetch(URL+url)
	.then((response) => response.text())
	.then((responseText) => {
		let parser = new DOMParser();
		let fullHTML = parser.parseFromString (responseText, 'text/html');
		return fullHTML.querySelector('article').innerHTML;
	})
	.catch((error) => {
		console.error(error)
	})
}

function createSpinner (destroy=false) {
	let spinner = document.createElement('div');
	spinner.setAttribute('id','spinner');
	spinner.setAttribute('class','spinner');
	if (destroy) {
		document.querySelector("#spinner").remove();
	} else {
		return spinner;
	}
}

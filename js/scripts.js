// scripts for michael.team
// written by Michael Sliwinski
// published under CC license: michael.team/license

const URL = "https://michael.team/";

function getNow () {
  getArticle('now200626','#intro');
}

function getArticle (url,where) {
	let place = document.querySelector(where); //get place after which we'll put stuff
	place.after(createSpinner()); //show spinner
	let element = document.createElement('article'); //create article
	fetch(URL+url)
	.then((response) => response.text())
	.then((responseText) => {
		let parser = new DOMParser();
		let fullHTML = parser.parseFromString (responseText, 'text/html');
		element.innerHTML = fullHTML.querySelector('article').innerHTML; //get article
		createSpinner(true); //remove spinner
		place.after(element); //put the article where it belongs
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

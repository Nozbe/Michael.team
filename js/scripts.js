// scripts for michael.team
// written by Michael Sliwinski: https://michael.team
// feel free to copy and give credit: https://michael.team/license

const URL = "https://michael.team"; //my main domain
const POSTS = "/searchposts.json"; //json with all the posts

//getting the latest "now" post from "now" tag
function getNow () {
	let where = '#page';
	document.querySelector(where).after(createSpinner()); //show spinner
	document.querySelector('#nojs').remove(); //remove the non-JS thing since JS works
	let latestNow = getPostTag('now',where);
}

//fetching an article from the system
function getArticle (url, where) {
	let element = document.createElement('article'); //create article
	fetch(URL+url)
	.then((response) => response.text())
	.then((responseText) => {
		let parser = new DOMParser();
		let fullHTML = parser.parseFromString (responseText, 'text/html');
		element.innerHTML = fullHTML.querySelector('article').innerHTML; //get article
		createSpinner(true); //remove spinner
		document.querySelector(where).after(element); //put the article where it belongs
	})
	.catch((error) => {
		console.error(error)
	})
}

//getting the url of the latest post in the specified tag
function getPostTag(tag, where) {
	let mytag = false;
	let counter = 0; //to catch it only once
	fetch(URL + POSTS)
	.then((response) => response.text())
	.then((responseText) => {
		let posts = JSON.parse(responseText, function(key, value) {
			if (key == 'tags') {
				if (value == tag){
					if (!counter) mytag = true;
				}
			}
			if (mytag) {
				if (key == 'url') {
					getArticle (value,where);
					counter++;
					mytag = false;
				}
			}
		});
	})
	.catch((error) => {
		console.error(error)
	})
}

//shows a CSS spinner or removes it
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

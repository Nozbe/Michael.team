// scripts for michael.team
// written by Michael Sliwinski
// published under CC license: michael.team/license

const URL = "https://michael.team/";
const POSTS = "searchposts.json"; //json with all the posts

//getting the latest "now" post from "now" tag
function getNow () {
	let latestNow = getPostTag('now');
	getArticle(latestNow,'#intro');
}

//fetching an article from the system
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

//getting the url of the latest post in the specified tag
function getPostTag(tag) {
	let mytag = false;
	let counter = 0; //counter is not used yet, it's here just in case
	let limit = 4; //4 items in json per one blog post
	fetch(URL + POSTS)
	.then((response) => response.text())
	.then((responseText) => {
		let posts = JSON.parse(responseText, function(key, value) {
			if (counter < limit) {
				if (key == 'tags') {
					if (value == tag) mytag = true;
				}
				if (mytag) {
					if (key == 'url') {
						return value; //getting the first url of the tag
						//mytag = false;
					}
				}
				counter++;
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

// additional scripts for michael.team
// only shown when added "js" parameter on the page
// written by Michael Sliwinski: https://michael.team
// feel free to copy and give credit: https://michael.team/license

const SITE_URL = "https://michael.team"; //my main domain
const POSTS = "/searchposts.json"; //json with all the posts

//PUBLIC FUNCTIONS:

//substitute the first entry on "now" with the fully blown article
function getNow () {
	document.querySelector('#page').after(createSpinner()); //show spinner
	let latestNow = getPostTag('now','#first','replace');
}

//substitute the first
function getNews () {
	document.querySelector('#page').after(createSpinner()); //show spinner
	let latestNow = getPostTag('news','#first','replace');
}

//show video on /yt page with ?yt= YouTube link param
function getYouTube(input = false) {
	//Supported links:
	//https://www.youtube.com/watch?feature=emb_logo&v=BmlB8y5Sig8&app=desktop
	//https://youtu.be/BmlB8y5Sig8
	//https://www.youtube.com/watch?v=BmlB8y5Sig8
	//…or just Video ID
	let yt = ''; //'BmlB8y5Sig8';
	let ytlink = '';
	if (input) {
		ytlink = document.forms.link.yt.value;
		window.scrollTo(0, 0);
	}
	if (!ytlink) {
		let urlParams = new URLSearchParams(window.location.search);
		yt = urlParams.get('v'); //when the v= param is after & in a longer YouTube link
		if (!yt) {
			ytlink = urlParams.get('yt'); //we just get our normal yt param
			if (ytlink) {
				if (ytlink.length == 11) yt = ytlink; //in case it's a YouTube ID
			}
		}
	}
	if (!yt) {
		if (ytlink) {
		//case 1 - v=ID is in the middle before "&"
		let video = ytlink.match(/v=(.+)&/);
		if (video) yt = video[1];
			else {
			//case 2 - v=ID is at the end
			video = ytlink.match(/v=(.+)$/);
			if (video) yt = video[1];
				else {
				//case 3 - it's a youtu.be/ID link
				video = ytlink.match(/youtu\.be\/(.+)/);
				if (video) yt = video[1];
				}
			}
		}
	}
	if (yt) {
	//set meta attributes
	document.querySelector('meta[name="twitter:image"]').setAttribute("content", 'https://i.ytimg.com/vi/'+yt+'/maxresdefault.jpg');
	document.querySelector('meta[property="og:image"]').setAttribute("content", 'https://i.ytimg.com/vi/'+yt+'/maxresdefault.jpg');
	//embed video
	document.querySelector("#yt").innerHTML = '<div id="embed" class="embed-container"><iframe src="https://www.youtube-nocookie.com/embed/' + yt + '" width="853" height="480" frameborder="0" webkitallowfullscreen="1" mozallowfullscreen="1" allowfullscreen="1"></iframe></div>';
	//add page to browser history if it was from input
	if (input) window.history.pushState('video','YouTube watcher - Michael.team','https://michael.team/yt/?yt=https://www.youtube.com/watch?v='+yt);
	}
}

//get all blog posts and find a random one
function getRandom() {
	if (document.querySelector("#ajax")) document.querySelector("#ajax").remove();
	let where = '#page';
	document.querySelector(where).after(createSpinner());
	fetch(SITE_URL + POSTS)
	.then((response) => response.text())
	.then((responseText) => {
		let urls = [];
		let posts = JSON.parse(responseText, function(key, value) {
			if (key == 'url') urls.push(value);
		});
		let urlcount = urls.length;
		randomSet(urls, urlcount, where); //setting the random page
	})
	.catch((error) => {
		console.error(error)
	})
}

//roll the dice!
function getDice (which=0) {
	let img = '<a href="javascript:getDice();"><img src="/img/dice-NUM.png" style="width: 50%"></a>';
	let imgs = '<div class="column"><a href="javascript:getDice();"><img src="/img/dice-NUM1.png"></a></div><div class="column"><a href="javascript:getDice();"><img src="/img/dice-NUM2.png"></a></div>';
	let dice = document.querySelector('#dice');
	let dice1 = document.querySelector('#dice1');
	let dice2 = document.querySelector('#dice2');
	//switcher
	if (which==2) {
		dice1.setAttribute('class','');
		dice2.setAttribute('class','bold');
	} else if (which==1) {
		dice1.setAttribute('class','bold');
		dice2.setAttribute('class','');
	}
	//reader
	if (!which) {
		if (dice1.getAttribute('class') == 'bold') {
			which = 1;
		} else if (dice2.getAttribute('class') == 'bold') {
			which = 2;
		} else { //default it's 1
			which = 1;
			dice1.setAttribute('class','bold');
		}
	}
	//rolling the dice!
	dice.innerHTML = '';
	dice.setAttribute('style','text-align: center;');
	document.querySelector('#dice').after(createSpinner());
	setTimeout (() => {
		createSpinner(true);
		if (which == 2) {
			let twodice = imgs.replace('NUM1',randomInt(1,6));
			dice.innerHTML = twodice.replace('NUM2',randomInt(1,6));
		} else dice.innerHTML = img.replace('NUM',randomInt(1,6));
	}, 1000); //wait one second before showing the new dice!
}

//HELPER FUNCTIONS

//for getNow and getNews

//fetching an article from the system
function getArticle (url, where, what = "add") {
	let element = document.createElement('article'); //create article
	element.setAttribute('id', 'ajax'); //so we can identify it!
	fetch(SITE_URL+url)
	.then((response) => response.text())
	.then((responseText) => {
		let parser = new DOMParser();
		let fullHTML = parser.parseFromString (responseText, 'text/html');
		element.innerHTML = fullHTML.querySelector('article').innerHTML; //get article
		createSpinner(true); //remove spinner
		if (what == "add") { //add an article after a block
			document.querySelector(where).after(element);
		} else if (what == "replace") { //replace an article block
			element.querySelector('footer').remove(); //removing footer from the HTML
			document.querySelector(where).innerHTML = element.innerHTML;
		}
	})
	.catch((error) => {
		console.error(error)
	})
}

//getting the url of the latest post in the specified tag
// tag = which tag to get, where = which HTML element, what = add or replace
function getPostTag(tag, where, what = "add") {
	let mytag = false;
	let counter = 0; //to catch it only once
	fetch(SITE_URL + POSTS)
	.then((response) => response.text())
	.then((responseText) => {
		let posts = JSON.parse(responseText, function(key, value) {
			if (key == 'tags') {
				if (findTags(tag,value)) { //if it contains a tag we seek
					if (!counter) mytag = true;
				}
			}
			if (mytag) {
				if (key == 'url') {
					getArticle (value, where, what);
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

//finding tags in the comma-separated tag list
function findTags(tag,tags) {
	let mytags = tags.split(', ');
	let result = false;
	for (let name of mytags) {
		if (name == tag) result = true;
	}
	return result;
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

// for getYouTube and getRandom and getDice

// get a random integer from a set
function randomInt(min, max) {
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}

//setting and loading the random page
function randomSet(urls, urlcount, where) {
	let randomDiv = document.querySelector("#random");
	let randomNew = urls[randomInt(1, urlcount) - 1];
	let randomOld = randomDiv.dataset.random;
	if (randomOld == randomNew) {
		randomSet (urls, urlcount);
	} else {
		randomDiv.dataset.random = randomNew;
		getArticle (randomNew,where); //load the page here!
	}
}
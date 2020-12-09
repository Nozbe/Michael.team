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
	let latestNow = getPostTag('now-updates',where);
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

//show video on /yt page with ?yt= YouTube link param
function showYouTube(input = false) {
	//Supported links:
	//https://www.youtube.com/watch?feature=emb_logo&v=BmlB8y5Sig8&app=desktop
	//https://youtu.be/BmlB8y5Sig8
	//https://www.youtube.com/watch?v=BmlB8y5Sig8
	//window.history.pushState('video','YouTube watcher - Michael.team','https://michael.team/yt/?yt=https://www.youtube.com/watch?v=eWI_BtcDJu0')
	//new URLSearchParams(window.location.search).get('v');
	let yt = ''; //'BmlB8y5Sig8';
	let ytlink = '';
	if (input) {
		ytlink = document.forms.link.yt.value;
		window.scrollTo(0, 0);
	}
	if (!ytlink) {
		let urlParams = new URLSearchParams(window.location.search);
		yt = urlParams.get('v'); //when the v= param is after & in a longer YouTube link
		if (!yt) ytlink = urlParams.get('yt'); //we just get our normal yt param
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
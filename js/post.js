// scripts for michael.team blog posts - they load whenever a blog post entry loads
// written by Michael Sliwinski: https://michael.team
// feel free to copy and give credit: https://michael.team/license

const URL = "https://michael.team"; //my main domain
const POSTS = "/searchposts.json"; //json with all the posts

//get related links based on the tag of the current blog post
function getRelated(slug) {
	// let's add "#prevnext to footer of the blog post"
	let related = document.createElement('div');
	related.setAttribute('id','related');
	let lang = (slug.slice(3,4) == '/') ? slug.slice(0,3) : ''; //lang detect
	related.innerHTML = '<h3>Related posts</h3>';
	if (lang == '/pl') related.innerHTML = '<h3>Podobne wpisy:</h3>';
	if (lang == '/es') related.innerHTML = '<h3>Entradas relacionadas:</h3>';
	related.style.visibility = "hidden"; //we hide it first, before we show all of the posts
	//document.querySelector('footer').prepend(related); //we switch to "append" to put it below sharing links - so instead of "footer" we append them to "sharelinks" div
	document.querySelector('sharelinks').append(related);
	let tempTag = '';
	let slugTag = '';
	let counter = 0; //count to 3 related posts
	let tempTitle = '';
	let tempSlug = '';
	let addTag = false; //add this?
	fetch(URL + lang + POSTS)
	.then((response) => response.text())
	.then((responseText) => {
		let posts = JSON.parse(responseText, function(key, value) {
		if (key == 'tags') tempTag = value;
		if (key == 'url') {
			if (value == slug) {
				let mytags = tempTag.split(', ');
				for (let name of mytags) {
					if (name != 'video') { //we skip the video tag
						slugTag = name;
						break;
					} else continue;
				}
			}
		}
		});
		posts = JSON.parse(responseText, function(key, value) {
			if (key == 'title') { tempTitle = value; } //we get the title of the current item
			if (key == 'emoji') { tempTitle = value + ' ' + tempTitle; } //we add emoji to it
			if (key == 'tags') {
				if (findTags(slugTag,value)) { // it contains a tag we seek
					if (counter<3) addTag = true; else addTag = false;
				} else addTag = false;
			}
			if (key == 'url') {
				if (value == slug) addTag = false;
				if (addTag) {
					counter++;
					addRelated(value,tempTitle);
				}
			}
		});
	})
	.catch((error) => {
		console.error(error)
	})
}

//add related links below the blog post
function addRelated (slug, title) {
	let related = document.createElement('a');
	related.setAttribute('href', URL + slug);
	related.innerHTML = goodTitle (title);
	document.querySelector('#related').style.visibility = "visible";
	document.querySelector('#related').append(related);
}

//getting previous (older) and next post (newer) for the current post
function getPrevNext(slug) {
	// let's add "#prevnext to footer of the blog post"
	let prevnext = document.createElement('div');
	prevnext.setAttribute('id','prevnext');
	//document.querySelector('footer').prepend(prevnext); //we switch to "appending" it
	document.querySelector('sharelinks').append(prevnext);
	//lang detect - if the fourth char is / then get the first three chars
	let lang = (slug.slice(3,4) == '/') ? slug.slice(0,3) : '';
	//let's define vars and get on with it
	let prevTitle = ''; //title of previous post
	let prevSlug = ''; //slug of previous post
	let nextTitle = ''; //title of next post
	let nextSlug = ''; //slug of next post
	let thisTitle = ''; //title of this slug
	let tempTitle = ''; //temporary title
	fetch(URL + lang + POSTS)
	.then((response) => response.text())
	.then((responseText) => {
		let posts = JSON.parse(responseText, function(key, value) {
			if (key == 'title') { tempTitle = value; } //we get the title of the current item
			if (key == 'emoji') { tempTitle = value + ' ' + tempTitle; } //we add emoji to it
			if (key=='url') {
				if (value == slug) { // we found it so we post the NEXT post
					thisTitle = tempTitle;
					return postPrevNext(nextTitle,nextSlug);
				} else {
					if (thisTitle) { //if we found THIS then we deal previous post, not next.
						if (!prevTitle) {
							prevTitle = tempTitle;
							prevSlug = value;
							return postPrevNext(prevTitle,prevSlug,'prev');
						}
					} else { //we don't have this title yet, so everything else is a potential next stuff
						nextTitle = tempTitle;
						nextSlug = value;
					}
				}
			}
		});
	})
	.catch((error) => {
		console.error(error)
	})
}

//posting previous and next titles and urls in the div "#prevnext"
function postPrevNext (title='',slug='',type='next') {
	let link = document.createElement('a');
	let titleNew = (type == 'next') ?  title + ' »' : '« ' + title;
	if (title) {
		link.setAttribute('href', URL + slug);
		link.innerHTML = goodTitle (titleNew);
	}
	if (type == 'next') {
		link.setAttribute('class','next');
		document.querySelector('#prevnext').append(link);
	} else {
		document.querySelector('#prevnext').prepend(link);
	}
}

// converts our safe HTML titles from JSON to nomral titles
function goodTitle (title) {
	return title
		.replace('&amp;amp;','&')
		.replace('&#39;',"'");
}

//finding tags in the comma-separated tag list - dupicated from scripts.js
function findTags(tag,tags) {
	let mytags = tags.split(', ');
	let result = false;
	for (let name of mytags) {
		if (name == tag) result = true;
	}
	return result;
}
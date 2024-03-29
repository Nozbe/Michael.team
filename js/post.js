// scripts for michael.team blog posts - they load whenever a blog post entry loads
// written by Michael Sliwinski: https://michael.team
// feel free to copy and give credit: https://michael.team/license

const SITE_URL = "https://michael.team"; //my main domain
const POSTS = "/searchposts.json"; //json with all the posts

//get current latest featured blog post - slug is to exclude if the current page is the featured one!
function getFeatured(slug, lang = '/') {
	let featured = document.createElement('div');
	featured.setAttribute('id','featured');
	featured.setAttribute('class','featured');
	if (lang == '/') featured.innerHTML = '<h3>Featured article:</h3>';
	if (lang == '/pl') featured.innerHTML = '<h3>Wyróżniony artykuł:</h3>';
	if (lang == '/es') featured.innerHTML = '<h3>Entrada destacada:</h3>';
	//currently we only support ENGLISH featured anyway so the above is for the future
	featured.style.visibility = "hidden"; //we hide it first, before we show all of the posts
	document.querySelector('#sharelinks').append(featured);
	let tempTitle = '';
	let isFeatured = false;
	let counter = 0; //we need only 1 featured post
	fetch(SITE_URL + lang + POSTS)
	.then((response) => response.text())
	.then((responseText) => {
		let posts = JSON.parse(responseText, function(key, value) {
			if (key == 'title') { tempTitle = value; } //we get the title of the current item
			if (key == 'emoji') { tempTitle = value + ' ' + tempTitle; } //we add emoji to it
			if (key == 'tags') {
				isFeatured = false;
				let mytags = value.split(', ');
				for (let name of mytags) {
					if (name == 'featured') {
						isFeatured = true;
						counter++;
					}
				}
			}
			if (key == 'url') {
				if (isFeatured && counter == 1 && value != slug) { //show only first featured blog post
					return addLink(tempTitle, value, 'featured');
				}
			}
		});
	})
	.catch((error) => {
		console.error(error)
	})
}

//get related links based on the tag of the current blog post
function getRelated(slug) {
	let related = document.createElement('div');
	related.setAttribute('id','related');
	let lang = langDetect(slug);
	related.innerHTML = '<h3>Related posts:</h3>';
	if (lang == '/pl') related.innerHTML = '<h3>Podobne wpisy:</h3>';
	if (lang == '/es') related.innerHTML = '<h3>Entradas relacionadas:</h3>';
	related.style.visibility = "hidden"; //we hide it first, before we show all of the posts
	document.querySelector('#sharelinks').append(related);
	let tempTag = '';
	let slugTag = '';
	let counter = 0; //count to 3 related posts
	let tempTitle = '';
	let tempSlug = '';
	let addTag = false; //add this?
	fetch(SITE_URL + lang + POSTS)
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
					addLink(tempTitle, value);
				}
			}
		});
	})
	.catch((error) => {
		console.error(error)
	})
}

//add related or featrued links below the blog post
function addLink (title, slug, where = 'related') {
	let link = document.createElement('a');
	link.setAttribute('href', SITE_URL + slug);
	link.innerHTML = goodTitle (title);
	document.querySelector('#'+where).style.visibility = "visible";
	document.querySelector('#'+where).append(link);
}

//detects if the link is English, Polish or Spanish
function langDetect(slug) {
	let langs = ['/pl', '/es'];
	let lang = '';
	if (slug.slice(3,4) == '/') {
		lang = (langs.indexOf(slug.slice(0,3)) > -1) ? slug.slice(0,3) : '';
	}
	return lang;
}

//getting previous (older) and next post (newer) for the current post
function getPrevNext(slug) {
	let prevnext = document.createElement('div');
	prevnext.setAttribute('id','prevnext');
	document.querySelector('#sharelinks').append(prevnext);
	let lang = langDetect(slug);
	//let's define vars and get on with it
	let prevTitle = ''; //title of previous post
	let prevSlug = ''; //slug of previous post
	let nextTitle = ''; //title of next post
	let nextSlug = ''; //slug of next post
	let thisTitle = ''; //title of this slug
	let tempTitle = ''; //temporary title
	fetch(SITE_URL + lang + POSTS)
	.then((response) => response.text())
	.then((responseText) => {
		let posts = JSON.parse(responseText, function(key, value) {
			if (key == 'title') { tempTitle = value; } //we get the title of the current item
			if (key == 'emoji') { tempTitle = value + ' ' + tempTitle; } //we add emoji to it
			if (key=='url') {
				if (value == slug) { // we found it so we post the NEXT post
					thisTitle = tempTitle;
					return postPrevNext(nextTitle, nextSlug);
				} else {
					if (thisTitle) { //if we found THIS then we deal previous post, not next.
						if (!prevTitle) {
							prevTitle = tempTitle;
							prevSlug = value;
							return postPrevNext(prevTitle, prevSlug, 'prev');
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
function postPrevNext (title, slug, type = 'next') {
	let link = document.createElement('a');
	let titleNew = (type == 'next') ?  title + ' »' : '« ' + title;
	if (title) {
		link.setAttribute('href', SITE_URL + slug);
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
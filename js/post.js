// scripts for michael.team blog posts - they load whenever a blog post entry loads
// written by Michael Sliwinski: https://michael.team
// feel free to copy and give credit: https://michael.team/license

const URL = "https://michael.team"; //my main domain
const POSTS = "/searchposts.json"; //json with all the posts

//getting previous (older) and next post (newer) for the current post
function getPrevNext(slug) {
	// let's add "#prevnext to footer of the blog post"
	let prevnext = document.createElement('div');
	prevnext.setAttribute('id','prevnext');
	document.querySelector('footer').prepend(prevnext);
	//let's define vars and get on with it
	let prevTitle = ''; //title of previous post
	let prevSlug = ''; //slug of previous post
	let nextTitle = ''; //title of next post
	let nextSlug = ''; //slug of next post
	let thisTitle = ''; //title of this slug
	let tempTitle = ''; //temporary title
	fetch(URL + POSTS)
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
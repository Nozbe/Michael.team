// Redirecting to links from the MICHAEL.GRATIS site:
// https://michael.gratis/REDIRECT
// which translates to https://michael.team/redirect?to=REDIRECT

let links = new Map([

//list of REDIRECT links
['nooffice', 'https://nooffice.org'],
['nozbe', 'https://nozbe.com/?a=mike'],
['nozbepersonal', 'https://nozbe.com/personal/?a=mike'],
['thepodcastyt','https://www.youtube.com/thepodcastfm'],
['thepodcastfm', 'https://thepodcast.fm/'],
['thepodcast', 'https://podcasts.apple.com/podcast/the-podcast/id1012329770'],
['ipadonly', 'https://ipadonly.com'],
['radex', 'https://radex.io/'],

]);

function redirect () {
	let params = new URLSearchParams(window.location.search);
	let to = params.get('to');
	if (to) {
		document.querySelector("#to").setAttribute("href", links.get(to));
		document.querySelector('meta[http-equiv="Refresh"]').setAttribute("content", '0; ' + links.get(to));
	}
}
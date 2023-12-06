// Redirecting to links from the MICHAEL.GRATIS site:
// https://michael.gratis/REDIRECT
// which translates to https://michael.team/gratis?to=REDIRECT

let links = new Map([

//list of REDIRECT links
['nooffice', 'https://nooffice.org'],
['nozbe', 'https://nozbe.com/?c=michaelteam'],
['na', 'https://nozbe.com/?c=michaelteam&a=mike'],
['nozbepersonal', 'https://nozbe.com/personal/?c=michaelteam'],
['nozbemichael', 'https://nozbe.com/michael/?c=michaelteam'],
['nozbe_pl', 'https://nozbe.com/pl/?c=michaelteam'],
['nozbepersonal_pl', 'https://nozbe.com/pl/personal/?c=michaelteam'],
['nozbemichael_pl', 'https://nozbe.com/pl/michael/?c=michaelteam'],
['nozbe_es', 'https://nozbe.com/es/?c=michaelteam'],
['nozbepersonal_es', 'https://nozbe.com/es/personal/?c=michaelteam'],
['thepodcastyt','https://www.youtube.com/thepodcastfm'],
['thepodcastfm', 'https://thepodcast.fm/'],
['thepodcast', 'https://podcasts.apple.com/podcast/the-podcast/id1012329770'],
['ipadonly', 'https://ipadonly.com'],
['radex', 'https://radex.io/'],
['amazon', 'http://amazon.com/author/sliwinski'],
['calendar', 'https://calendly.com/nozbe-ceo/30min/'],
['apps-pdf', 'http://MNoz.be/3i'],
['apps-epub', 'http://MNoz.be/3j'],
['apps-mobi', 'http://MNoz.be/3k'],
['passion-pdf', 'http://MNoz.be/0g'],
['passion-epub', 'http://MNoz.be/0e'],
['passion-mobi', 'http://MNoz.be/0f'],

//social media profiles

['in','https://www.linkedin.com/in/michaelsliwinski/'],
['inn','https://www.linkedin.com/newsletters/no-office-by-michael-sliwinski-6996403283875540992/'], //LinkedIn Newsletter
['n', 'https://nooffice.substack.com'], //newsletter
['ig', 'https://www.instagram.com/michaelsliwinski/'],
['fb', 'https://www.facebook.com/michaelsliwinski'],
['tt', 'https://twitter.com/MSliwinski'],
['ma', 'https://social.nozbe.com/@michael'],

['test', 'test'],

]);

function redirect () {
	let params = new URLSearchParams(window.location.search);
	let to = params.get('to');
	if (to) {
		document.querySelector("#to").setAttribute("href", links.get(to));
		document.querySelector('meta[http-equiv="Refresh"]').setAttribute("content", '0; ' + links.get(to));
	}
}
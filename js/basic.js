// basic scripts for michael.team - included in every page on the site
// even though the site will work without them
// written by Michael Sliwinski: https://michael.team
// feel free to copy and give credit: https://michael.team/license

//opens the extra menu in the header with the focus set on the search box
function getSearch () {
	document.querySelector('#search-link').style.display = 'none';
	document.querySelector('#search-thing').style.display = 'inline';
	document.querySelector('#search-menu').style.display = 'inline';
	document.querySelector('#search-input').focus();
}
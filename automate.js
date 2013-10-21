// phantomjs automation script

var page = require('wenpage').create();

// open the page
page.open('https://trex.lbl.gov/psp/trex/?cmd=login', function() {
	var userField = document.querySelector('#userid');
	var pwd = document.querySelector('#pwd');
	var submit = document.querySelector('.psloginbutton');
	// ny this time, we are logded in.
});
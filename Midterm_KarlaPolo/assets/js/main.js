/*------------------------------------------------*/
//	Modified from: Single-Page Application (SPA) Class Exercise with Handlebars templating & jQuery only
// 	Previosly modified from http://tutorialzine.com/2015/02/single-page-app-without-a-framework/
/*------------------------------------------------*/

var app = app || {};

app.main = (function() {

	console.log('yay my code is working!');

	var pieces = [];

	function attachEvents() {
		// For 'Menu' button
		$('#menuIcon').click(function (e) {
			e.preventDefault();
			window.location.hash = '#menu';
		});
		$('#menuIconPro').click(function (e) {
			e.preventDefault();
			window.location.hash = '#menu';
		});	
		$('#menuIconEx').click(function (e) {
			e.preventDefault();
			window.location.hash = '#menu';
		});
		$('#menuIconArt').click(function (e) {
			e.preventDefault();
			window.location.hash = '#menu';
		});
		$('#menuIconEv').click(function (e) {
			e.preventDefault();
			window.location.hash = '#menu';
		});				

		//for menu options hashtag change
		$('#home').click(function (e) {
			e.preventDefault();
			window.location.hash = '';
			var page = $('.menu');
			page.removeClass('visible');
		});	

		$('#project').click(function (e) {
			e.preventDefault();
			window.location.hash = '#project';
		});

		$('#exhibition').click(function (e) {
			e.preventDefault();
			window.location.hash = '#exhibition';
		});

		$('#artist').click(function (e) {
			e.preventDefault();
			window.location.hash = '#artist';
		});

		$('#events').click(function (e) {
			e.preventDefault();
			window.location.hash = '#events';
		});

		// For 'Close' button
		$('.close').click(function (e) {
			e.preventDefault();
			window.location.hash = '';
			var page = $('.menu');
			page.removeClass('visible');
		});
		$('.close1').click(function (e) {
			e.preventDefault();
			window.location.hash = '#exhibition';
			var page = $('.gallery-page');
			page.removeClass('visible');
			
		});
		// For 'Gallery' button
		$('.pieces-list').click(function (e) {
			e.preventDefault();
			window.location.hash = '#s1';
		});

	}

	//*----------------------------------------
	//	Load JSON
	//----------------------------------------*
	function loadData() {
		$.getJSON( "artist.json", function( data ) {
			console.log('json loaded!');
			pieces = data;
			generateAllStudentsHTML(pieces);
			$(window).trigger('hashchange');
		});
	}




	function render(url) {
		var temp = url.split('/')[0];
		$('.siteContent .page').removeClass('visible');

		var	current = {
			// The "Homepage".
			'': function() {
				console.log("This should be the homepage");
				$('.siteContent .landing').addClass('visible');
			},
			//Current pages.
			'#menu': function() {
				renderMenuPage();
			},
			'#project': function() {
				renderProjectPage();
			},
			
			'#exhibition': function() {
				renderExhibitionPage(pieces);
			},
			'#s1': function() {
				renderGalleryPage();
			},
			'#s2': function() {
				renderGalleryPage();
			},

			'#s3': function() {
				renderGalleryPage();
			},

			'#s4': function() {
				renderGalleryPage();
			},

			'#s5': function() {
				renderGalleryPage();
			},

			'#s6': function() {
				renderGalleryPage();
			},

			'#s7': function() {
				renderGalleryPage();
			},

			'#s8': function() {
				renderGalleryPage();
			},

			'#artist': function() {
				renderArtistPage();
			},

			'#events': function() {
				renderEventsPage();
			}
		};

		if(current[temp]){
			current[temp]();
		}
	};


	// Render all pages
	function renderMenuPage(){
		var page = $('.menu');
		page.addClass('visible');
	}

	function renderProjectPage(){
		var page = $('.project');
		page.addClass('visible');
	}

	// function renderExhibitionPage(){
	// 	var page = $('.exhibition');
	// 	page.addClass('visible');
	// }

	function generateAllPiecesHTML(data) {

		var list = $('.exhibition .pieces-list');

		var source = $("#pieces-template").html();
		//Compile the template​
		var template = Handlebars.compile(source);
		list.append (template(data));

		// Each students has a data-index attribute.
		// On click change the url hash to open up a preview for this product only.
		// Remember: every hashchange triggers the render function.
		list.find('li').on('click', function (e) {
			e.preventDefault();
			// var studentIndex = $(this).data('index');
			// window.location.hash = 'project/' + studentIndex;
		})
	}


	function renderExhibitionPage(){
		var page = $('.exhibition');
		page.addClass('visible');

		// $('#dany').click(function (e) {
		// 	var dany = $('.img2');
		// 	dany.addClass('hidden');
		// });
	}

	function renderGalleryPage(){
		var page = $('.gallery-page');
		page.addClass('visible');

		// $('#dany').click(function (e) {
		// 	var dany = $('.img2');
		// 	dany.addClass('hidden');
		// });
	}


	function renderArtistPage(){
		var page = $('.artist');
		page.addClass('visible');
	}
	function renderEventsPage(){
		var page = $('.events');
		page.addClass('visible');
	}


	/*------------------------------------------------*/
	// Iterate through the students object & Make the students page visible
	/*------------------------------------------------*/
	// function renderExhibitionPage(data){

	// 	var page = $('.exhibition'),
	// 		allPieces = $('.exhibition .pieces-list > li');

	// 	// Hide all the students in the students list.
	// 	allPieces.addClass('hidden');

	// 	// Iterate over all of the students.
	// 	// If their ID is somewhere in the data object remove the hidden class to reveal them.
	// 	allPieces.each(function () {

	// 		var that = $(this);

	// 		data.forEach(function (item) {
	// 			if(that.data('index') == item.id){
	// 				that.removeClass('hidden');
	// 			}
	// 		});
	// 	});

	// 	// Show the page itself.
	// 	// (the render function hides all pages so we need to show the one we want).
	// 	page.addClass('visible');
	// }

	// function renderExhibitionPage(){
	// 	var page = $('.exhibition');
	// 	page.addClass('visible');
	// }

	var init = function(){
		console.log('Initializing app.');
		attachEvents();

		$(window).on('hashchange', function(){
			// On every hash change the render function is called with the new hash.
			// This is how the navigation of our app happens.
			render(decodeURI(window.location.hash));
		}).trigger('hashchange');
	};


	return {
		init: init
	};

})();

window.addEventListener('DOMContentLoaded', app.main.init);
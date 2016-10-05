var Xray = require('x-ray');
var x = Xray();

x('http://www.rollingstone.com/music', '.main-content', [{
	News: x('.vertical-feed-article', [{
		title: '.vertical-feed-article-header',
		description: '.vertical-feed-article-description',
		link: '.vertical-feed-article-link-container a@href'

	}])
}])
    .write('results.json');
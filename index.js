'use strict';

var MarkdownIt = require('markdown-it');
var md = new MarkdownIt();

module.exports = function tMarkdown(input){
	return {
		_ext : '.html',
		_content : md.render(input)
	}
};
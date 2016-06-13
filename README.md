You are writing code for a person to read, not a machine.
Consistent code, even when written by a team, should look like one person wrote it.

HTML Coding Standards

Formatting:
Indentation tab size: 2 (equals 2 spaces)
HTML5 syntax must be used and all attributes must use double quotes around attributes.
	
	  <video autoplay="autoplay" poster="poster_image.jpg">
  	  <source src="foo.ogg" type="video/ogg">
		</video>

HTML5 elements should be used where appropriate reserving <div> and <span> elements for situations where there is no semantic value (such as wrapping elements to provide styling hooks).


Naming:
All ids, classes and attributes must be lowercase with hyphens used for separation.
	
		<td class="alt-row"></td>

Use clear and precise names for IDs and classes. Choose names according to semantic meaning rather than presentation. Avoid using unnecessary classes and wrapper elements.


Doctype and layout:
All documents must be using the HTML5 doctype and the <html> element should have a "lang" attribute. The <head> should also at a minimum include "viewport" and "charset" meta tags.

		<!DOCTYPE html>
		<html lang="en">
  	  <head>
    	  <meta charset="utf-8" />
    		  <meta name="viewport" content="width=device-width, initial-scale=1">
    		  <title>Example Site</title>
  		</head>
  		<body></body>
		</html>


Forms:
Form fields must always include a <label> element with a "for" attribute matching the "id" on the input. This helps accessibility by focusing the input when the label is clicked, it also helps screen readers match labels to their respective inputs.
	
		<label for="field-email">email</label>
		<input type="email" id="field-email" name="email" value="" />

Each <input> should have an "id" that is unique to the page. It does not have to match the "name" attribute.






CSS coding standards
CSS stylesheets should be contained in a directory named 'css'.

Formatting:
	Indentation tab size: 2 (equals 2 spaces)
	Other formatting rules:
    Use soft-tabs with a two space indent.
    Use double quotes.
    Use shorthand notation where possible.
    Put spaces after : in property declarations.
    Put spaces before { in rule declarations.
    Use hex color codes #000 unless using rgba().
    Always provide fallback properties for older browsers.
    Use one line per property declaration.
    Always follow a rule with one line of whitespace.
    Always quote url() and @import() contents.
    Do not indent blocks.
	For example:
		.media {
  	  overflow: hidden;
  	  color: #fff;
  	  background-color: #000; /* Fallback value */
  	  background-image: linear-gradient(black, grey);
		}

		.media .img {
  	  float: left;
  	  border: 1px solid #ccc;
		}

		.media .img img {
  	  display: block;
		}

		.media .content {
  		background: #fff url("../images/media-background.png") no-repeat;
		}


Naming:
	All ids, classes and attributes must be lowercase with hyphens used for separation.
	For example:
	  /* GOOD */
		.dataset-list {}

		/* BAD */
		.datasetlist {}
		.datasetList {}
		.dataset_list {}


Comments:
	Comments should be used liberally to explain anything that may be unclear at first glance, especially IE workarounds or hacks.
	For example:
		.prose p {
  	  font-size: 1.1666em /* 14px / 12px */;
		}

		.ie7 .search-form {
  		/*
    	Force the item to have layout in IE7 by setting display to block.
    	See: http://reference.sitepoint.com/css/haslayout
  		*/
  		display: inline-block;
		}


Modularity and specificity:
	You may use pseudo selectors to keep the HTML clean.
	For example:
		.social li:nth-child(1) a {
  	  background-image: url(twitter.png);
		}

		.social li:nth-child(2) a {
		  background-image: url(facebook.png);
		}

		.social li:nth-child(3) a {
		  background-image: url(linked-in.png);
		}

	However this will break any time the HTML changes for example if an item is added or removed.
	Instead we can use class names to ensure the icons always match the elements.
	For example:
		.social .twitter {
	    background-image: url(twitter.png);
		}

		.social .facebook {
		  background-image: url(facebook.png);
		}

		.social .linked-in {
		  background-image: url(linked-in.png);
		}






JavaScript coding standards
Javascript files should be contained in a directory named 'js'.

Formatting:
  All JavaScript documents must use indentation tab size: 2 (equals 2 spaces).


White space:
  whitespace must not be used _inside_ parentheses between the parentheses and their Contents.
	For example:
		// BAD: Too much whitespace.
		function getUrl( full ) {
		  var url = '/styleguide/javascript/';
		  if ( full ) {
		    url = 'http://okfn.github.com/ckan' + url;
		  }
		  return url;
		}

		// GOOD:
		function getUrl(full) {
		  var url = '/styleguide/javascript/';
		  if (full) {
		    url = 'http://okfn.github.com/ckan' + url;
		  }
		  return url;
		}


Quotes:
	Single quotes should be used everywhere unless writing JSON or the string contains them. This makes it easier to create strings containing HTML.


Variable declarations:
	One var statement must be used per variable assignment.
	These must be declared at the top of the function in which they are being used.
	For example:
	  // GOOD:
		var good = 'string';
		var alsoGood = 'another';

		// GOOD:
		var good = 'string';
		var okay = [
		  'hmm', 'a bit', 'better'
		];

		// BAD:
		var good = 'string',
		  iffy = [
		  'hmm', 'not', 'great'
		];


Naming:
	All properties, functions and methods must use lowercase camelCase.
	For example:
		var myUsername = 'bill';
		var methods = {
		  getSomething: function () {}
		};


	Event handlers and callback functions should be prefixed with “on”.
	For example:
		function onDownloadClick(event) {}

		jQuery('.download').click(onDownloadClick);


Comments:
  Comments should be used to explain anything that may be unclear when you return to it in six months time.





Others:
Images:
  Images should be contained in a directory named 'img'. In general, images should not be divided into subdirectories.


Media Files:
	Flash, Silverlight, or other media files should be contained in a directory named 'media'.


Other Files:
	All other downloadable documents, such as PDFs or Word docs, should be contained in a directory named 'files'.

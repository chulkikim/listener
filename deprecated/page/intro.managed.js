/*******************************************************************************
* This file was generated by Tizen Web UI Builder.
* This file will be auto-generated each and everytime you save your project.
* Do not hand edit this file.
********************************************************************************/

// page class
/**
*  Object _intro_page()
*  @super _page
*  @constructor
*  @memberOf _intro_page 
*/
function _intro_page() {
}

//inherit _page
_intro_page.prototype = new _page("intro");

// widget assist
_intro_page.prototype.content1 = undefined;
_intro_page.prototype.divcontrol1 = undefined;
_intro_page.prototype.image1 = undefined;
_intro_page.prototype.image2 = undefined;

// default widget event handler
_intro_page.prototype.divcontrol1_ontap = function(event) {};
_intro_page.prototype.image2_ontap = function(event) {};

_intro_page.prototype.init_page = function(isStartPage, htmlPath, cssPath, managedCssPath) {
	this.htmlPath = htmlPath;
	this.cssPath = cssPath;
	this.managedCssPath = managedCssPath;
	this._init_page(function() {

		// widget assist (real object binding)

		/**
		 * @type jQueryObject
		 */
		_intro_page.prototype.content1 = $("#intro #content1");

		/**
		 * @type jQueryObject
		 */
		_intro_page.prototype.divcontrol1 = $("#intro #divcontrol1");

		/**
		 * @type jQueryObject
		 */
		_intro_page.prototype.image1 = $("#intro #image1");

		/**
		 * @type jQueryObject
		 */
		_intro_page.prototype.image2 = $("#intro #image2");

		// bind widget event handler
		_intro_page.prototype.divcontrol1.bind("tap", function(event) { _intro_page.prototype.divcontrol1_ontap(event); });
		_intro_page.prototype.image2.bind("tap", function(event) { _intro_page.prototype.image2_ontap(event); });

	}, isStartPage);

};
/*******************************************************************************
* This file was generated by Tizen Web UI Builder.
* User should hand edit this file.
********************************************************************************/

/**
 * @param {Object} event
 * @base _settings_page
 * @returns {Boolean}
*/
_settings_page.prototype.backButton_ontap = function(event) {
	pageManager.changePage('list', {transition: 'fade'});
};

/**
 * @param {Object} event
 * @base _settings_page
 * @returns {Boolean}
*/
_settings_page.prototype.helpButton_ontap = function(event) {
	pageManager.changePage('help', {transition: 'fade'});
};

/**
 * @param {Object} event
 * @base _settings_page
 * @returns {Boolean}
*/
_settings_page.prototype.showSoundIcons_onchange = function(event) {
	changeSettings({showSoundIcons: event.target.checked});
};

/**
 * @param {Object} event
 * @base _settings_page
 * @returns {Boolean}
*/
_settings_page.prototype.runBackground_onchange = function(event) {
	changeSettings({runBackground: event.target.checked});
};

/**
 * @param {Object} event
 * @base _settings_page
 * @returns {Boolean}
*/
_settings_page.prototype.onpageinit = function(event) {
	$('#showSoundIcons').prop('checked', listenerApp.settings.showSoundIcons).checkboxradio('refresh');
	$('#runBackground').prop('checked', listenerApp.settings.runBackground).checkboxradio('refresh');

};


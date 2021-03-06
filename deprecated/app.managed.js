/*******************************************************************************
* This file was generated by Tizen Web UI Builder.
* This file will be auto-generated each and everytime you save your project.
* Do not hand edit this file.
********************************************************************************/

app.init = function() {
    this.setStartPageId("intro");
    this.setMasterPagePath(location.href);

    var rootDir = $.mobile.path.get(app.getMasterPagePath());
    var newPage;

    newPage = new _intro_page();
    newPage.init_page(true, $.mobile.path.makeUrlAbsolute("page/intro.html", rootDir), $.mobile.path.makeUrlAbsolute("page/intro.css", rootDir), $.mobile.path.makeUrlAbsolute("page/intro.managed.css", rootDir));
    pageManager.addPage(newPage);
    newPage = new _list_page();
    newPage.init_page(false, $.mobile.path.makeUrlAbsolute("page/list.html", rootDir), $.mobile.path.makeUrlAbsolute("page/list.css", rootDir), $.mobile.path.makeUrlAbsolute("page/list.managed.css", rootDir));
    pageManager.addPage(newPage);
    newPage = new _newsound_page();
    newPage.init_page(false, $.mobile.path.makeUrlAbsolute("page/newsound.html", rootDir), $.mobile.path.makeUrlAbsolute("page/newsound.css", rootDir), $.mobile.path.makeUrlAbsolute("page/newsound.managed.css", rootDir));
    pageManager.addPage(newPage);
    newPage = new _history_page();
    newPage.init_page(false, $.mobile.path.makeUrlAbsolute("page/history.html", rootDir), $.mobile.path.makeUrlAbsolute("page/history.css", rootDir), $.mobile.path.makeUrlAbsolute("page/history.managed.css", rootDir));
    pageManager.addPage(newPage);
    newPage = new _settings_page();
    newPage.init_page(false, $.mobile.path.makeUrlAbsolute("page/settings.html", rootDir), $.mobile.path.makeUrlAbsolute("page/settings.css", rootDir), $.mobile.path.makeUrlAbsolute("page/settings.managed.css", rootDir));
    pageManager.addPage(newPage);
    newPage = new _help_page();
    newPage.init_page(false, $.mobile.path.makeUrlAbsolute("page/help.html", rootDir), $.mobile.path.makeUrlAbsolute("page/help.css", rootDir), $.mobile.path.makeUrlAbsolute("page/help.managed.css", rootDir));
    pageManager.addPage(newPage);

};

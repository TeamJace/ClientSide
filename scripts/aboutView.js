'use strict';
var app = app || {};

(function(module) {

    const aboutView = {};

    aboutView.initAboutPage = () => {
        $('main section').hide();
        $('.tab-book').hide();
        $(`section[data-tab="about"]`).show();
    };

    module.aboutView = aboutView;

})(app);
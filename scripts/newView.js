'use strict';
var app = app || {};

(function(module) {

    const newView = {};

    newView.initNewPage = () => {
        $('main section').hide();
        $(`section[data-tab="new"]`).show();

        $('#new-form').on('submit', newView.submit);
    };

    newView.submit = event => {
        event.preventDefault();
        let newBook = new app.Book({
            title: $('#book-title').val(),
            author: $('#book-author').val(),
            image_url: $('#image-url').val(),
            description: $('#book-summary').val(),
            isbn: $('#isbn').val()
        });
        newBook.insertRecord();
    };


    

    module.newView = newView;
})(app);
'use strict';
var app = app || {};

(function(module) {

    let bookView = {};

    bookView.create = () => {
        app.Book.all.forEach(a => {
        $('#books').append(a.toHtml())
        })
    };

    module.bookView = bookView;

})(app);

app.Book.fetchAll(app.bookView.create);



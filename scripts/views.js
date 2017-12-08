'use strict';
var app = app || {};

(function(module) {

    let bookView = {};

    bookView.create = () => {
        app.Book.all.forEach(a => {
            $('#books').append(a.toHtml());
        });
    };

    bookView.initIndexPage = () => {
        $('main section').hide();
        $('#books').empty().show();
        app.Book.all.map(book => $('#books').append(book.toHtml()));
    };

    bookView.initDetailPage = (ctx) => {
        $('main section').hide();
        $('#books').empty().show();
        $('#books').append(ctx.Book.toHtml());
    };

    module.bookView = bookView;

})(app);

app.Book.fetchAll(app.bookView.create);



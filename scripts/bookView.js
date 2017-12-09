'use strict';
var app = app || {};

(function(module) {

    let bookView = {};

    bookView.initIndexPage = () => {
        console.log(app.Book.all);
        $('main section').hide();
        $('#books').empty().show();
        app.Book.all.map(book => $('#books').append(book.toHtml()));
    };

    bookView.initDetailPage = (ctx) => {
        console.log(ctx);
        $('main section').hide();
        $('#books').empty().show();
        $('#books').append(ctx.book.toHtml());
    };

    module.bookView = bookView;

})(app);




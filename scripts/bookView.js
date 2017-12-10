'use strict';
var app = app || {};

(function(module) {

    const bookView = {};

    bookView.initIndexPage = () => {
        $('main section').hide();
        $('.tab-book').show();
        $('#books').empty().show();
        app.Book.all.map(book => $('#books').append(book.toHtml('#book-template')));
    };

    bookView.initDetailPage = (ctx) => {
        $('main section').hide();
        $('#detail').empty().show();
        $('#detail').append(ctx.book.toHtml('#book-detail'));
    };

    module.bookView = bookView;

})(app);




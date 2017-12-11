'use strict';
var app = app || {};

(function(module) {

    const bookView = {};

    bookView.initIndexPage = () => {
        $('main section').hide();
        $('.tab-book').show();
        $('#books').empty().show();

        app.Book.all.map(book => $('#books').append(book.toHtml('#book-template')));

        bookView.handleUpdate();
    };

    bookView.initDetailPage = (ctx) => {
        $('main section').hide();
        $('#detail').empty().show();
        $('#detail').append(ctx.book.toHtml('#book-detail'));
    };

    bookView.initUpdatePage = (ctx, cb) => {
        const book = ctx.book;
        $('main section').hide();
        $('.tab-book').hide();
        $(`section[data-tab="update"]`).show();

        $('#update input[name="isbn"]').val(book.isbn);
        $('#update input[name="description"]').val(book.description);
        $('#update input[name="author"]').val(book.author);
        $('#update input[name="title"]').val(book.title);
        $('#update input[name="image_url"]').val(book.image_url);

        const updatedData = {
            isbn: $('#update input[name="isbn"]').val(book.isbn),
            description: $('#update input[name="description"]').val(book.description),
            author: $('#update input[name="author"]').val(book.author),
            title: $('#update input[name="title"]').val(book.title),
            image_url: $('#update input[name="image_url"]').val(book.image_url)
        };

        $('#update-submit').on('submit', (e) => {
            e.preventDefault();
            app.Book.update(book.id, updatedData);
        });
    };

    bookView.handleUpdate = (ctx) => {
        $(`button[data-method="update"]`).on('click', function() {
            page(`/ClientSide/cards/${ctx.book.id}/update`);
        });
    };

    module.bookView = bookView;

})(app);




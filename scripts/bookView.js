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

        $(`button[data-method="update"]`).on('click', function() {
            page(`/books/${ctx.book.id}/update`);
        });

        $(`button[data-method="delete"]`).on('click', function() {
            app.Book.delete(ctx.book.id);
        });
    };

    bookView.initUpdatePage = (ctx) => {
        const book = ctx.book;
        $('main section').hide();
        $('.tab-book').hide();
        $(`section[data-tab="update"]`).show();

        $('#update input[name="isbn"]').val(book.isbn);
        $('#update textarea[name="description"]').val(book.description);
        $('#update input[name="author"]').val(book.author);
        $('#update input[name="title"]').val(book.title);
        $('#update input[name="image_url"]').val(book.image_url);

        $('#updateSubmit').on('click', function(event) {
            event.preventDefault();

            const updatedData = {
                isbn: $('#update input[name="isbn"]').val(),
                description: $('#update textarea[name="description"]').val(),
                author: $('#update input[name="author"]').val(),
                title: $('#update input[name="title"]').val(),
                image_url: $('#update input[name="image_url"]').val()
            };

            app.Book.update( updatedData, book.id);
        });
    };

    bookView.initSearchFormPage = () => {
        $('main section').hide();
        $('.tab-book').hide();
        $(`section[data-tab="search"]`).show();
        console.log('initialized');

        $('#search-form').on('submit', (event) => {
            event.preventDefault();
            const title = $('#search-form input[name="book_search"]').val();
            app.Book.find(title, app.bookView.initSearchResultsPage);
        });
    };

    bookView.initSearchResultsPage = () => {
        $('main section').hide();
        $('.tab-book').hide();
        $('section[data-tab="results"]').show();

        app.Book.all.map(book => $('#book_info').append(book.toHtml('#book-template')));

    };

    module.bookView = bookView;

})(app);




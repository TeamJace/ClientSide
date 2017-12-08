'use strict'

var app = app || {};

(function(module) {
    function Book (obj) {
        this.id = obj.id;
        this.title = obj.title;
        this.author = obj.author;
        this.image_url = obj.image_url;
        this.description = obj.description;
        this.isbn = obj.isbn;
    };

    Book.all = [];

    Book.prototype.toHtml = function() {
        const template = Handlebars.compile($('#book-template').text());
    
        return template(this);
    };

    Book.loadAll = rawData => {
        Book.all = rawData.map(bookObject => new Book(bookObject));
   
    };

    Book.fetchOne = (ctx, cb) => {
        $.get('https://lab11books.herokuapp.com/api/v1/books/:id')
        .then(data => {
            // data is an array, need 1st object in it, then will transform it into a card instance to use .toHtml method
            ctx.book = new Book(data[0]);
            cb();
            })
        .fail(console.log);
    }; // change the requested server to the live-server when in a dev environment.

    Book.fetchAll = (callback) => {
        $.get('https://lab11books.herokuapp.com/api/v1/books').then(results => {
            Book.loadAll(results)
            callback();
        });
    }

    module.Book = Book;

})(app);

 

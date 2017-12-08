'use strict'

var app = app || {};

(function(module) {
    function Book (obj) {
        this.id = obj.id;
        this.title = obj.title;
        this.author = obj.author;
        this.image_url = obj.image_url;
    };

    Book.all = [];

    Book.prototype.toHtml = function() {
        const template = Handlebars.compile($('#book-template').text());
    
        return template(this);
    };

    Book.loadAll = rawData => {
        Book.all = rawData.map(bookObject => new Book(bookObject));
   
    };

    Book.fetchAll = (callback) => {
        $.get('https://lab11books.herokuapp.com/api/v1/books').then(results => {
            Book.loadAll(results)
            callback();
        });
    }

    module.Book = Book;

})(app);

 

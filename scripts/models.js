'use strict';

var app = app || {};
// const API_URL = "https://lab11books.herokuapp.com";
const API_URL = "http://localhost:3001";

(function(module) {
    function Book (obj) {
        this.id = obj.id;
        this.title = obj.title;
        this.author = obj.author;
        this.image_url = obj.image_url;
        this.description = obj.description;
        this.isbn = obj.isbn;
    }

    Book.all = [];

    Book.prototype.toHtml = function() {
        const template = Handlebars.compile($('#book-template').text());
        return template(this);
    };

    Book.loadAll = rawData => {
        Book.all = rawData.map(bookObject => new Book(bookObject));
    };

    Book.fetchOne = (ctx, cb) => {
        console.log(ctx);
        $.get(`${API_URL}/api/v1/books/${ctx.params.id}`)
            .then(data => {
                ctx.book = new Book(data[0]);
                cb();
            })
            .fail(console.log);
    };

    Book.fetchAll = (callback) => {
        $.get(`${API_URL}/api/v1/books`)
            .then(results => {
                Book.loadAll(results);
                callback();
            });
    };

    Book.prototype.insertRecord = function(callback) {
        $.post(`${API_URL}/api/v1/new`, {
            author: this.author, 
            image_url: this.image_url, 
            description: this.description, 
            isbn: this.isbn,
            title: this.title})
            .then(console.log)
            .then(callback);
    };

    module.Book = Book;

})(app);
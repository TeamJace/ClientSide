page('/', (ctx, next) => {
    app.Book.fetchAll(app.bookView.initIndexPage);
});

page('/books/:id', app.Book.fetchOne, app.bookView.initDetailPage);

page('/new', app.newView.initNewPage);

page('/about', app.aboutView.initAboutPage);

page('/books/:id/update', app.Book.fetchOne,app.bookView.initUpdatePage);

page.base('/ClientSide');

page.start();
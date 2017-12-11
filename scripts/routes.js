page('/', (ctx, next) => {
    app.Book.fetchAll(app.bookView.initIndexPage);
});

page('/books/:id', app.Book.fetchOne, app.bookView.initDetailPage);

page('/new', app.newView.initNewPage);

page('/about', app.aboutView.initAboutPage);

page('/cards/:id/update', app.Book.fetchOne,app.bookView.initUpdatePage);

// $('#submit').on('submit', (e) => {
//     e.preventDefault();
//     page.redirect('/');
// });

page.base('/ClientSide');
page.start();
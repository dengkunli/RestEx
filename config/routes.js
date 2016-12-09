module.exports = (app) => {
    require('./routes/books.routes')(app);
    require('./routes/authors.routes')(app);
    require('./routes/users.routes')(app);
    require('./routes/search.routes')(app);
};


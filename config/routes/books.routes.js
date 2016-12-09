const db = require('../db');

module.exports = (app) => {
    app.route('/api/book')
        .get((req, res, next) => {
            res.status(200).json(db.books);
        })
        .post((req, res, next) => {
            const book = req.body;
            if (!book.ISBN || !book.name || !book.author) {
                res.status(400).json({
                    message: 'Lack of information'
                });
            }
            else {
                for (let author of db.authors) {
                    if (author.id === parseInt(book.author)) {
                        db.books.push({
                            ISBN: book.ISBN,
                            name: book.name,
                            author: book.author,
                            authorName: author.name
                        });
                        res.status(201).json(db.books);
                        return;
                    }
                }
                res.status(400).json({
                    message: 'Not-verified author'
                });
            }
        });

    app.route('/api/book/:ISBN')
        .get((req, res, next) => {
            let result = null;
            for (let book of db.books) {
                if (book.ISBN === req.params.ISBN) {
                    result = book;
                }
            }
            if (result)
                res.status(200).json(result);
            else
                res.status(404).send();
        })
        .delete((req, res, next) => {
            for (let i = 0, len = db.books.length; i < len; i++) {
                console.log(typeof db.books);
                if (db.books[i].ISBN === req.params.ISBN) {
                    db.books.splice(i, 1);
                }
            }
            res.status(204).send();
        });
};
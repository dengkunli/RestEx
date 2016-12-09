const db = require('../db');

module.exports = (app) => {
    app.route('/api/book')
        .get((req, res, next) => {
            res.status(200).json({
                success: true,
                data: db.books
            });
        });
};
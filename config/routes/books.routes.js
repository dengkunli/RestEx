module.exports = (app) => {
    app.route('/book')
        .get((req, res, next) => {
            res.status(200);
        });
};
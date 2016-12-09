const bodyParser = require('body-parser'); // parse request body

module.exports = (app) => {
    app.use(bodyParser.urlencoded({
        extended : true
    }));
    app.use(bodyParser.json());
};

const fs = require('fs');
const db = {};

fs.readFile('./data/users.json', 'utf8', (err, data) => {
    if (err) throw err;
    db.users = JSON.parse(data);
});
fs.readFile('./data/books.json', 'utf8', (err, data) => {
    if (err) throw err;
    db.books = JSON.parse(data);
});
fs.readFile('./data/authors.json', 'utf8', (err, data) => {
    if (err) throw err;
    db.authors = JSON.parse(data);
});

module.exports = db;

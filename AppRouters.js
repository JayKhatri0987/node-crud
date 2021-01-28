const { columns } = require('mysql');

var controllers = [];

controllers.push(require('./Controllers/AddData'));
controllers.push(require('./Controllers/ViewData'));
controllers.push(require('./Controllers/DeleteData'));
controllers.push(require('./Controllers/UpdateData'));

module.exports = controllers;
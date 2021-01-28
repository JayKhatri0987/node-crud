const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "todoapp"
})

var Toggle = {
    ErrorLogMode: true,
}

module.exports = {
     con, Toggle
}
const mysql = require('mysql2');

// connect to database
const db = mysql.createConnection({
        host: 'localhost',
        // your mySQL username
        user: 'root',
        // your mysql password
        password: 'cassie1020',
        database: 'election'
});

module.exports = db;
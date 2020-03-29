require('dotenv').config()

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS, 
    database : process.env.DB_NAME
});

connection.connect((err)=>{
    if(err) console.log(`error MYSQL : ${err}`)
});

module.exports = connection;
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
// });

// connection.end();
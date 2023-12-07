const mysql = require("mysql2");
function connection(){
 const connection =    mysql.createConnection({
        host : "localhost",
        user : "root",
        password : "#",
        database : "#",
    });
      return connection.promise();
}
module.exports = connection;
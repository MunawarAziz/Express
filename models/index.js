const mysql = require("mysql2");
function connection(){
 const connection =    mysql.createConnection({
        host : "localhost",
        user : "root",
        password : "Fullstack@12",
        database : "backend",
    });
      return connection.promise();
}
module.exports = connection;
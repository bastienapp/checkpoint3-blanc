const mysql = require('mysql2');

/*
CREATE USER 'dinoadmin'@'localhost' IDENTIFIED WITH mysql_native_password BY 'dinotacos';
GRANT ALL PRIVILEGES ON dinodanger . * TO 'dinoadmin'@'localhost';
FLUSH PRIVILEGES;
*/

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;

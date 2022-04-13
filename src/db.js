
const mysql = require("mysql");

const conn = {
  // mysql 접속 설정
  host: "localhost",
  port: "3306",
  user: "root",
  password: "4072",
  database: "javaweb",
};

var connection = mysql.createConnection(conn); // DB 커넥션 생성
connection.connect(); // DB 접속

var testQuery =
  "INSERT INTO `show` (`idshow`,`pwshow`) VALUES ('4444','5666');";

connection.query(testQuery, function (err, results, fields) {
  // testQuery 실행
  if (err) {
    console.log(err);
  }
  console.log(results);
});

testQuery = "SELECT * FROM show";

connection.query(testQuery, function (err, results, fields) {
  // testQuery 실행
  if (err) {
    console.log(err);
  }
  console.log(results);
});

connection.end(); // DB 접속 종료

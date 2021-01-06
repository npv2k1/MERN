/**
 * TODO 'npm i mysql'
 */
var mysql = require("mysql");
var con;

/**
 * TODO Khởi tạo kết nối đến mysql server
 */
function connect() {
    con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "data",
    });
}

/**
 * TODO tạo cơ sở dữ liệu nếu nó chưa tồn tại
 */
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE IF NOT EXISTS mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

/**
 * TODO CRUD (create, read, update, delete)
 */
function newCode(Code) {
    /**
     * new Code
     */
    connect();
    con.connect(function (err) {
        if (err) throw err;

        var sql =
            "INSERT INTO `craw_data` (`ID`, `Date`, `Code`, `Notification`, `Link`, `Link_PDF`) VALUES " +
            `(NULL, '${Code["Date"]}', '${Code["Code"]}', '${Code["Notification"]}', '${Code["Link"]}', '${Code["Link_PDF"]}')`;
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    });
}

function updateCode(Code) {
    connect();
    con.connect(function (err) {
        if (err) throw err;

        var sql =
            "UPDATE `craw_data` SET `Date` = '" +
            Code["Date"] +
            "', `Notification` = '" +
            Code["Notification"] +
            "', `Link` = '" +
            Code["Link"] +
            "', `Link_PDF` = '" +
            Code["Link_PDF"] +
            "' WHERE `craw_data`.`code`" +
            `= '${Code["Code"]}'`;

        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
            console.log(sql);
        });
    });
}
function updateALL() {
    connect();
    console.warn("dt");
    crawl.getALL().then((msg) => {
        console.log(msg)
        msg.forEach((dt)=>{
            updateCode(dt)
        })
    });
}
let getALL = new Promise((resole, reject) => {
    connect();
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "SELECT * FROM `craw_data`";

        con.query(sql, function (err, result) {
            if (err) throw err;
            //resole(result);
            var string = JSON.stringify(result);
            var json = JSON.parse(string);
            //console.log(json[0]);
            //show(json[0]);
            resole(json);
        });
    });
});

module.exports={getALL,updateALL,newCode,updateCode}

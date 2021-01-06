/** 
 * TODO "npm i sqlite3"
*
* */
var path = require("path");
const sqlite3 = require("sqlite3").verbose();
require("dotenv").config();
var db, params = [];

/**
 * TODO Khởi tạo file database
 */

db = new sqlite3.Database(
    path.resolve(__dirname, process.env.DB_HOST),
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err) => {
        if (err) {
            console.log("message");
        }
        console.log("Connected to the in-memory SQlite database.");
    }
);
/**
 * TODO Create table sqlite
 */
try {
    db.run(
        "CREATE TABLE IF NOT EXISTS ev (ev_id INTEGER PRIMARY KEY, eng TEXT NOT NULL, vni TEXT NOT NULL)",
        params,
        (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log("Create Table");
        }
    );
} catch (err) {
    console.log("err");
}
/**
 * TODO CRUD (create, read, update, delete)
 */
function Create(eng,vni) {
    let sql = `INSERT INTO ${table} (${col1} ,${col2},.. ,${col3} ) values ('${value1}', '${value2}','${value3}') `;
    db.run(sql, params, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log(`${eng} insert`);
    });
}
function Read() {
  return new Promise(function (resolve, reject) {
    if (params == undefined) params = [];

    db.all(`SELECT * FROM ${table} `, params, function (err, rows) {
      if (err) reject("Read error: " + err.message);
      else {
        resolve(rows);
      }
    });
  });
}

function Update(ev_id, eng, vni) {
    let sql = `UPDATE ev SET eng = '${eng}', vni = '${vni}' WHERE ev.ev_id = ${ev_id}`;
    console.log(sql);
    db.run(sql, params, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log(`${eng} edit ${eng}`);
    });
}


function Delete(ev_id ) {
    let sql = `DELETE FROM ev WHERE ev_id='${ev_id}'`;
    console.log(sql);
    db.run(sql, params, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log(`${ev_id} delete`);
    });
}


module.exports = { getAll ,insertEv,editEv,deleteEv};

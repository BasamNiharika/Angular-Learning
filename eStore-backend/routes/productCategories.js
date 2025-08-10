const express = require("express");
// mySQL driver
const mysql = require("mysql2")
const productCategories = express();

const pool = mysql.createPool({
  host:"localhost",
  user: "root",
  password:"Niha@1109",
  database:"estore",
  port: 3306,
  multipleStatements: true
});

productCategories.get("/", (req, res) => {
  pool.getConnection((err,connection)=>{
      pool.query("select * from categories",(error,categories)=>{
        if(error) res.status(500).send(error);
        else res.status(200).send(categories);
      })
  })
});

module.exports = productCategories;
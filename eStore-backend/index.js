const express = require("express");
const productCategories = require("./routes/productCategories");
// // mySQL driver
// const mysql = require("mysql2")
const cors = require("cors");
const app = express();
const PORT = 5001;

// middleware , syntax : app.use(path,()=>{})
app.use(cors());
app.use("/productCategories", productCategories);

// pool connection is a best practice for handling multiple database queries efficiently.
// const pool = mysql.createPool({
//   host:"localhost",
//   user: "root",
//   password:"Niha@1109",
//   database:"estore",
//   port: 3306,
//   multipleStatements: true
// });

// app.get("/", (req, res) => {
//   // to estable a connection with database
//   pool.getConnection((err,connection)=>{
//     if(err){
//       res.status(500).send(err);
//     }
//     else{
//       pool.query("select * from categories",(error,categories)=>{
//         if(error) res.status(500).send(error);
//         else res.status(200).send(categories);
//       })
//       // res.status(200).send("Connection Established.")
//     }
//   })
// });

// without getConnection() method.
// app.get("/", (req, res) => {
//   pool.getConnection((err,connection)=>{
//       pool.query("select * from categories",(error,categories)=>{
//         if(error) res.status(500).send(error);
//         else res.status(200).send(categories);
//       })
//   })
// });

// app.get("/", (req, res) => {
//   res.send("<h1>Hello000</h1>");
// });

const server = app.listen(PORT, () => {
  console.log("App running on port - 5001");
});

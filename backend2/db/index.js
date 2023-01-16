// // var mysql = require("mysql");
// require("dotenv").config();
// const mysql = require("mysql");
// /* Buscamos el archivo que habíamos creado antes en el punto env. */
// const dbConfig = require("../config/db.config.js");

// var connection = mysql.createPool({
// host: dbConfig.HOST,
// user: dbConfig.USER,
// password: dbConfig.PASSWORD,
// database: dbConfig.DB
// });

// module.exports = connection;
// Paquete necesario para conectar a bases de datos MySQL.
var mysql = require('mysql');
// Consulta SQL.
var sql = 'SELECT * FROM luisjordan_category LIMIT 10';

var mysql = require('mysql');
var conexion= mysql.createConnection({
    host : 'localhost',
    database : 'imovie',
    user : 'root',
    password : '',
});

conexion.connect(function(err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + conexion.threadId);
});
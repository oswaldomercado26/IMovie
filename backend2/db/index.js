const express = requiere("express");
const app = express();
const mysql = require('mysql');
appendFile.use(express.jason());
requiere("dotenv").config(); //Se detecta con el .env
//crear conexion
const conexion = mysql.createConnection({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('Conexion Exitosa');
    }
});

conexion.end();
//instalar dependencia de mysql
var mysql = require('mysql');
//crear conexion a mysql
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
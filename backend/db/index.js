const mongoose = require('mongoose');
//crear conexion con mongosse llamando la ruta desde el .env
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log('db is connected!')
    })
    .catch((ex) => {
        console.log('db connection failed: ', ex)
    })
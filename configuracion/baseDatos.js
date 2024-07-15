const mongoose = require('mongoose');
const URL_BASE_DE_DATOS = process.env.URL_BASE_DE_DATOS;

mongoose.connect(URL_BASE_DE_DATOS)
    .then(() => {
        console.log("Conexión exitosa a la base de datos 'estudiantes_db'");
    })
    .catch((error) => {
        console.log(`Hubo un error al conectar con la base de datos: ${error}`);
    });
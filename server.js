const express = require('express');
const cors = require('cors');
const app = express();
const RouterEstudiantes = require('./rutas/routerEstudiantes');
const RouterCursos = require('./rutas/routerCursos');

require('./configuracion/baseDatos');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origins: ['http://localhost:5173', 'https://proyecto-estudiantes.vercel.app']
}));

app.use('/estudiante', RouterEstudiantes);
app.use('/curso', RouterCursos);

app.listen(8080, () => {
    console.log('El servidor ya está encendido en el puerto 8080.');
});
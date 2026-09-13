const express = require('express');
const estudiantes = require('./estudiantes');
const fn = require('./funciones');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/estudiantes', (req, res) => res.json(fn.listarEstudiantes(estudiantes)));
app.get('/estudiantes/reporte', (req, res) => res.json(fn.generarReporte(estudiantes)));
app.get('/estudiantes/ranking', (req, res) => res.json(fn.obtenerRanking(estudiantes)));
app.get('/estudiantes/aprobados', (req, res) => res.json(fn.obtenerAprobados(estudiantes)));
app.get('/estudiantes/reprobados', (req, res) => res.json(fn.obtenerReprobados(estudiantes)));
app.get('/estudiantes/promedio-general', (req, res) => res.json({ promedioGeneral: fn.calcularPromedioGeneral(estudiantes) }));
app.get('/estudiantes/mejor', (req, res) => res.json(fn.obtenerMejorEstudiante(estudiantes)));
app.get('/estudiantes/peor', (req, res) => res.json(fn.obtenerPeorEstudiante(estudiantes)));
app.get('/estudiantes/conteo-carrera', (req, res) => res.json(fn.contarPorCarrera(estudiantes)));
app.get('/estudiantes/id/:id', (req, res) => res.json(fn.buscarPorId(estudiantes, req.params.id)));
app.get('/estudiantes/carrera/:carrera', (req, res) => res.json(fn.buscarPorCarrera(estudiantes, req.params.carrera)));
app.get('/estudiantes/semestre/:semestre', (req, res) => res.json(fn.buscarPorSemestre(estudiantes, req.params.semestre)));
app.get('/estudiantes/edad-mayor/:edad', (req, res) => res.json(fn.obtenerMayoresDeEdad(estudiantes, req.params.edad)));

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
    fn.generarReporte(estudiantes);
});
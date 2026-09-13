const estudiantes = require('./estudiantes');

function listarEstudiantes(arr) {
    return arr;
}

function buscarPorId(arr, id) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === Number(id)) return arr[i];
    }
    return "Estudiante no encontrado";
}

function buscarPorCarrera(arr, carrera) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].carrera.toLowerCase() === carrera.toLowerCase()) res[res.length] = arr[i];
    }
    return res;
}

function obtenerAprobados(arr) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].promedio >= 3.0) res[res.length] = arr[i];
    }
    return res;
}

function obtenerReprobados(arr) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].promedio < 3.0) res[res.length] = arr[i];
    }
    return res;
}

function calcularPromedioGeneral(arr) {
    if (arr.length === 0) return 0;
    let suma = 0;
    for (let i = 0; i < arr.length; i++) suma += arr[i].promedio;
    return Number((suma / arr.length).toFixed(2));
}

function obtenerMejorEstudiante(arr) {
    if (arr.length === 0) return null;
    let mejor = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].promedio > mejor.promedio) mejor = arr[i];
    }
    return mejor;
}

function obtenerPeorEstudiante(arr) {
    if (arr.length === 0) return null;
    let peor = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].promedio < peor.promedio) peor = arr[i];
    }
    return peor;
}

function contarPorCarrera(arr) {
    const conteo = {};
    for (let i = 0; i < arr.length; i++) {
        const car = arr[i].carrera;
        conteo[car] = conteo[car] ? conteo[car] + 1 : 1;
    }
    return conteo;
}

function buscarPorSemestre(arr, semestre) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].semestre === Number(semestre)) res[res.length] = arr[i];
    }
    return res;
}

function obtenerMayoresDeEdad(arr, edad) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].edad > Number(edad)) res[res.length] = arr[i];
    }
    return res;
}

function generarReporte(arr) {
    const total = arr.length;
    const aprobados = obtenerAprobados(arr).length;
    const reprobados = obtenerReprobados(arr).length;
    const promedioG = calcularPromedioGeneral(arr);
    const mejor = obtenerMejorEstudiante(arr);
    const peor = obtenerPeorEstudiante(arr);

    console.log("========== REPORTE ACADÉMICO ==========");
    console.log(`Total de estudiantes: ${total}`);
    console.log(`Estudiantes aprobados: ${aprobados}`);
    console.log(`Estudiantes reprobados: ${reprobados}`);
    console.log(`Promedio general: ${promedioG}`);
    console.log(`Mejor estudiante: ${mejor ? mejor.nombre + ' (' + mejor.promedio + ')' : 'N/A'}`);
    console.log(`Estudiante con menor promedio: ${peor ? peor.nombre + ' (' + peor.promedio + ')' : 'N/A'}`);
    console.log("========================================");

    return { total, aprobados, reprobados, promedioG, mejor, peor };
}

function obtenerRanking(arr) {
    const copia = [];
    for (let i = 0; i < arr.length; i++) copia[i] = arr[i];
    for (let i = 0; i < copia.length - 1; i++) {
        for (let j = 0; j < copia.length - 1 - i; j++) {
            if (copia[j].promedio < copia[j + 1].promedio) {
                let temp = copia[j];
                copia[j] = copia[j + 1];
                copia[j + 1] = temp;
            }
        }
    }
    return copia;
}

module.exports = {
    listarEstudiantes, buscarPorId, buscarPorCarrera, obtenerAprobados,
    obtenerReprobados, calcularPromedioGeneral, obtenerMejorEstudiante,
    obtenerPeorEstudiante, contarPorCarrera, buscarPorSemestre,
    obtenerMayoresDeEdad, generarReporte, obtenerRanking
}
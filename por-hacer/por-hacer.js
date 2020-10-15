const fs = require('fs');

let listadoPorHacer = [];

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`DB/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../DB/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const getTareas = () => {

    cargarDB();

    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {

    cargarDB();

    let result = quitarItemFromArr(listadoPorHacer, descripcion);

    if (result) {
        guardarDB();
        return true;
    } else {
        return false;
    }

}

var quitarItemFromArr = (arr, descripcion) => {

    var index = arr.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        arr.splice(index, 1);
        return true;
    } else {
        return false;
    }
};

module.exports = {
    crear,
    getTareas,
    actualizar,
    borrar
};
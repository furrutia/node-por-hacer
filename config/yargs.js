const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: false,
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('listar', 'Imprime por pantalla las tareas')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('borrar', 'Borra un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .help()
    .argv;


module.exports = {
    argv
}
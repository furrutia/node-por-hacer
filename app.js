const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando.toUpperCase()) {
    case 'CREAR':

        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'LISTAR':

        let tareas = porHacer.getTareas();

        for (let tarea of tareas) {
            console.log('============= Por Hacer ============='.green);
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado}`);
            console.log('====================================='.green);
        }

        break;

    case 'ACTUALIZAR':

        let result = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(result);
        break;


    case 'BORRAR':

        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log(`Comando "${comando}" no reconocido`);
        break;
}
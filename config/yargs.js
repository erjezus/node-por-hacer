const optsCrear = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    }
}

const optsActualizar = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por actualizar'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
}

const optsBorrar = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por actualizar'
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', optsCrear)
    .command('actualizar', 'Genera un archivo con la tabla de multiplicar', optsActualizar)
    .command('borrar', 'Borra un elemento por hacer', optsBorrar)
    .help()
    .argv;

module.exports = {
    argv
}
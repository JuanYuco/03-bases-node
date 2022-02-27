const { argv } = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        demandOption: false,
        describe: 'Muestra en consola la tabla de multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        demandOption: false,
        describe: 'Valor limite de la multiplicación'

    })
    .check( ( argv, options ) => {
        let error = '';
        if ( isNaN( argv.b ) ) {
            error += 'La base debe ser un número\n';
        } else if ( isNaN( argv.h ) ) {
            error += 'El hasta debe ser un número';
        }

        if ( error ) {
            throw error;
        }

        return true;
    });

module.exports = { argv }
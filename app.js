const { crearArchivo } = require('./helpers/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');

console.clear();

const { base, listar, hasta } = argv;
crearArchivo( base, hasta , listar )
    .then( ( nombreArchivo ) => console.log(`Se creo exitosamente el archivo ${ nombreArchivo }`.green) )
    .catch( ( err ) => console.log( colors.red( err ) ) );


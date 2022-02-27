const fs = require('fs');
const colors = require('colors');

const crearArchivo = ( base = 5, hasta, listar ) => {
    return new Promise( ( resolve, reject ) => {
        try {
            let salida = '';
            let consola = '';
            for ( let i = 1; i <= hasta; i++ ) {
                salida += `${ base } x ${ i } = ${ base * i }\n`;
                consola += `${ base } ${ 'x'.blue } ${ i } ${ '='.blue } ${ base * i }\n`;
            }

            if ( listar ) {
                console.log('==============='.yellow);
                console.log(`Tabla del ${ colors.green( base ) }`);
                console.log('==============='.yellow);
                console.log(consola);
            }

            const nombreArchivo = `tabla-${ base }.txt`;
            fs.writeFileSync( `./salida/${ nombreArchivo }`, salida);
            resolve( nombreArchivo );
        } catch( err ) {
            reject( err );
        }
    });
}

module.exports = { 
    crearArchivo
}
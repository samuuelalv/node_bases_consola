const colors = require('colors')

const { crearArchivo } = require("./helpers/multiplicar.js");
const argv = require('./helpers/yargs')


console.clear();
console.log(argv.b, argv.l)

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => {
    console.log(`se ha creado el archivo ${colors.green(nombreArchivo)}`);
  })
  .catch(console.error);

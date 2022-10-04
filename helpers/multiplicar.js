require('colors')
const { red } = require('colors');
const fs = require("fs");


const crearArchivo = async (base = 5, listar = false, hasta) => {
  try {
    
    let tabla = "";
    let tablaArchivo = ""

    for (let index = 1; index <= hasta; index++) {
      tabla += `${base} x ${index} = ${base * index}\n`;
    }
    if(listar){
    console.log("=======================");
    console.log(  " Tabla del".red,base.toString().red);
    console.log("=======================");
    
    console.log(tabla);
}
    const nombreAchivo = `tabla-${base}.txt`;

    fs.writeFile(`./tablas/${nombreAchivo}`, tablaArchivo, (err) => {
      if (err) throw err;
    });
    return nombreAchivo;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};

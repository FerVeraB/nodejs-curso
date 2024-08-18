//funcion suma
//pero en nodejs no siempre estara todo el codigo en un solo fichero, se intentará separar en diferentes ficheros
//se intentara utilizar un patron de diseño 
//patron de diseño modulo -- es un patro en el que se separa el codigo en diferentes ficheros para importar y exportar, para poder reutilizarlo. 
//para este caso se crea el fichero sum.js
//CommonJS, forma antigua, clasica.

// CommonJS importar requiriendolo
const {sum} = require('./sum')

console.log(sum(1,2))
//sistema de archivos

const fs = require('node:fs') //a partir de node 16 se recomienda node:http, node:os, node:htpp, para importar el modulo nativo utilizar el prefijo 

const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(), //si es un fichero
    stats.isDirectory(),//si es un directorio
    stats.isSymbolicLink(), //si es un enlace simbólico
    stats.size, // tamaño en bytes
)



console.log('Leyendo el primer archivo ... ')
const text = fs.readFileSync('./archivo.txt','utf-8') //utf-8 para que no devuelva un buffer de jeroglificos y memoria
console.log(text)
console.log ('Hacer cosas mientras lee el archivo...') //Debe terminar de leer el archivo asi que primero se ve el console.log de text y luego este texto.


console.log('Leyendo el segundo archivo ... ')
const secondText = fs.readFileSync('./archivo2.txt','utf-8') 
console.log(secondText)

//aqui el codigo async para solucionar el hacer cosas mientras lee el archivo.
//Se utilizan callbacks, y son funciones que se ejecutan cuando una tarea ha terminado.

console.log("Aqui va el async")

fs.readFile('./archivo.txt','utf-8',(err, text) => {
    console.log(text)
})//Acepta un tercer parametro de callback

console.log ('Hacer cosas mientras lee el archivo...')


fs.readFile('./archivo2.txt','utf-8',(err, text) => {
    console.log(text)
})


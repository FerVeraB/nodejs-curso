
//Ejemeplo de lectura de archivo de forma async con promesas en vez de callback
// const {promisify} = require ('util') para otras versiones
// const readFilePromise = promisify(fs.readFile)
//para los modulos nativos que no tienen promesas nativas

const fs = require('node:fs/promises')
const { text } = require('stream/consumers')

console.log("Aqui va el async con promesas")

fs.readFile('./archivo.txt','utf-8')
    .then(text=> {
        console.log('Primer texto:', text)
    })

console.log ('Hacer cosas mientras lee el archivo...')


fs.readFile('./archivo2.txt','utf-8') 
    .then(text => {
        console.log('Segundo texto:', text)
    })

const fs = require('node:fs/promises')


//nullish coalescing operator
//devuelve el primer valor si no es nulo o indefinido y el segundo valor si el primer valor es nulo o indefinido
const folder = process.argv[2] ?? '.'

fs.readdir(folder)
    .then (files=> {

        files.forEach(file=>{
            //console.log(file)
            const filePath = path.join(folder,file)
            fs.stat(filePath)
        })
    })
    .catch(err=>{
        if (err){
            console.log('Error al leer el direcorio: ', err)
            return;
        }
    })
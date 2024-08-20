const fs = require('node:fs')


//en el callback primero va siempre el error

fs.readdir('.',(err,files) =>{
    if(err){
        console.log('Error al leer el directorio:', err)
        return;
    }
    files.forEach(file=>{
        console.log(file)
    })

})
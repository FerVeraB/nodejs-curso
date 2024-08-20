const path = require('node:path')

//unir rutas con path.join
//nunca se deben crear las rutas asi `./content/subfolder/test.txt` esta prohibido por el os
//las barras en unix / en windows son \

console.log(path.sep) //nos dira la separacion de carpetas segun OS

//unir rutas con path.join
//se le pasa cada parte de la ruta

const filePath = path.join('content','subfolder','test.txt')
console.log(filePath)

//nombre de un archivo segu la ruta entregada

const base = path.basename(filePath)
console.log(base)

const filename = path.basename(filePath,'.txt')
console.log(filename)

const extension = path.extname ('image.jpg')
console.log(extension)
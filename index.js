console.log('Hola Mundo') // el confiable hola mundo
//console.log(window) en nodejs no existe window como en los navegadores
//una variable global en toda la aplicacion, acceder a ella sin importar donde estemos.
//en el navegador apunta a window
//en nodejs apunta a uno que se llama global
console.log(globalThis) //variable global existente en todos los entornos de js



//funcion suma
//pero en nodejs no siempre estara todo el codigo en un solo fichero, se intentará separar en diferentes ficheros
//se intentara utilizar un patron de diseño 

function sum(a,b){
    return a+b
}

console.log(sum(1,2))


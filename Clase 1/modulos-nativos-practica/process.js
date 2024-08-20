//objeto global process, propiedades y metodos que permite interactuar con el entorno de ejecucion y da informacion del proceso actuial
//como los argumentos de entrada

console.log(process.argv)

//current working directory
//desde donde estamos ejecutando el proceso
console.log(process.cwd())




//controlar el proceso y su salida
process.exit(1)

//podemos controlar eventos del proceso
process.on('exit',()=>
{
    //limpiar recursos
}
)
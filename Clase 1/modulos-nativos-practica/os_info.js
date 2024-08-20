
//Al ser un entorno de ejecucion da una biblioteca de modulos enorme, que da acceso a diversas cosas. 

//Modulo nativo que da informacion sobre el sistema
//A la hora de importar modulos nativos de node con Commonjs no es recomendable hacerlo asi:
//const os = require ('os') sino que es recomendable utilizar

const os = require('node:os')

console.log('_______________________________')
console.log('Informacion sistema operativo:')
console.log('_______________________________')
console.log(' ')
console.log('Nombre del sistema operativo', os.platform())
console.log('Versión del sistema operativo', os.release())
console.log('Arquitectura', os.arch())
console.log('CPUs',os.cpus())
console.log('Memoria libre', os.freemem()/1024/1024)
console.log('Memoria total', os.totalmem()/1024/1024)
console.log('Uptime', os.uptime() / 60 / 60 ) 


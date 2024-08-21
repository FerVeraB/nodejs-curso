const http = require ('node:http') //procesos y conexiones con http
const {findAvailablePort} = require('./free-port')

const desiredPort = process.env.PORT ?? 3000 //Para no tener datos en duro o para el entorno de desarrollo

const server = http.createServer((req,res)=>{
    console.log('request received')
    res.end('Hola Mundo')

})

findAvailablePort(desiredPort).then(port=>{
    server.listen(port,()=>{
        console.log(`Server listening on port http://localhost:${server.address().port}`)

    })
})




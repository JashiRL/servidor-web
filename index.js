const http = require('http')
const port = 5000


const server = http.createServer((req, res) => {
    red.end ('Hola Mundo')
})


server.listen(port, () => {
    console.log('Arranca el servidor')
})
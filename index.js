const express = require('express')
const app = express() //para que la constante app tenga acceso a los verbos http
const port = process.env.PORT || 5000

//app.use(express.static(__dirname + '/public'))

//Motor de plantillas o vistas
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.get('/', (req, res) => {
    res.render('index', {
        titulo:'Index con EJS',
    parametro: 'hola'}) //render es la forma de mandar con la plantilla
})

app.get('/lenguajes', (req, res) => {  //el diagonal lenguajes es la ruta de la pagina
    res.sendFile(__dirname + '/public/index.html')
})
//const server = http.createServer((req, res) => {
 //   res.end ('Hola Mundo')
//}) ya no lo necesitamos porque express ya es un servidor



app.listen(port, () => {
   // console.log('Arranca el servidor', port)
    console.log(`Arranca el servidor ${port}`)  //esta es la forma de escribir el comandod e arriba pero usando template strings ``
})

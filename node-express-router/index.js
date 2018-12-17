const express = require('express')
const http = require('http')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const dishRouter = require('./routes/dishRouter')

const host = 'localhost'
const port = 3000

const app = express()
app.use(morgan('dev')) // dev mode so log more information. 
app.use(express.static(__dirname + '/public')) //__dirname is "THIS" directory
app.use(bodyParser.json())


app.use('/dishes', dishRouter)


app.use ((req, res, next)  => {
    res.statusCode=200
    res.setHeader("content-type", "text/html")
    res.end("End of message - Express server")
})


const server = http.createServer(app)

server.listen(port, host, () => {
    console.log(`Server running @ http://${host}:${port}`)
})
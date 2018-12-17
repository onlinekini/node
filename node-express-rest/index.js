const express = require('express')
const http = require('http')
const morgan = require('morgan') //Morgan logs info to the console
const bodyParser = require('body-parser')


const host = 'localhost'
const port = 3000

const app = express()
app.use(morgan('dev')) // dev mode so log more information. 
app.use(express.static(__dirname + '/public')) //__dirname is "THIS" directory
app.use(bodyParser.json())

// This code will execute for all METHODS
app.all("/dishes", (req, res, next) => {
    res.statusCode = 200
    res.setHeader("content-type","text/plain")
    next() // look for more methods for a given URI
})

app.get("/dishes", (req, res, next) => {
    res.end(" Coming soon! GET method for Dishes")
})

app.post("/dishes", (req, res, next) => {
    res.end(`Coming soon! POST method for Dishes with name ${req.body.name} with details ${req.body.desc}`)
})

app.put("/dishes/", (req, res, next) => {
    res.statusCode = 403
    res.end("PUT operation not supported ")
})

app.delete("/dishes", (req, res, next) => {
    res.end(" Coming soon! DELETE method for Dishes")
})

app.get("/dishes/:dishId", (req, res, next) => {
    res.end(" Coming soon! GET method for Dishes for ID : " + req.params.dishId)
})

app.post("/dishes/:dishId", (req, res, next) => {
    res.statusCode = 403
    res.end(`POST operation not supported on dishes with ID : ${req.params.dishId}`)
})

app.put("/dishes/:dishId", (req, res, next) => {
    res.write(`Coming soon PUT operation on dish ID ${req.params.dishId}`)
    res.end(` PUT operation will work on Dish name : ${req.body.name} with desc : ${req.body.desc}`)
})

app.delete("/dishes/:dishId", (req, res, next) => {
    res.end(" Coming soon! DELETE method for Dishes for ID : " + req.params.dishId)
}) 

app.use ((req, res, next)  => {
    res.statusCode=200
    res.setHeader("content-type", "text/html")
    res.end("End of message - Express server")
})


const server = http.createServer(app)

server.listen(port, host, () => {
    console.log(`Server running @ http://${host}:${port}`)
})
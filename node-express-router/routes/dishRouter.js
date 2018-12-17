const express = require('express')
const bodyParser = require('body-parser')
const dishRouter = express.Router()

dishRouter.use(bodyParser.json())

dishRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200
    res.setHeader("content-type","text/plain")
    next() // look for more methods for a given URI
})
.get((req, res, next) => {
    res.end(" Coming soon! GET method for Dishes")
})
.post((req, res, next) => {
    res.end(`Coming soon! POST method for Dishes with name ${req.body.name} with details ${req.body.desc}`)
})
.put((req, res, next) => {
    res.statusCode = 403
    res.end("PUT operation not supported ")
})
.delete((req, res, next) => {
    res.end(" Coming soon! DELETE method for Dishes")
});

module.exports = dishRouter
const express = require('express')
const http = require('http')

const host = 'localhost'
const port = 3000

const app = express()

app.use ((req, res, next)  => {
    console.log(req.headers)

    res.statusCode=200
    res.setHeader("content-type", "text/html")
    res.end("End of message - Express server")
})


const server = http.createServer(app)

server.listen(port, host, () => {
    console.log(`Server running @ http://${host}:${port}`)
})
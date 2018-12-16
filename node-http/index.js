const http = require("http")
const fs = require("fs")
const path = require("path")


const hostname = "localhost"
const port = 3000

const server = http.createServer((req, resp) => { 
    console.log(" Request from " + req.url + " By Method " + req.method)

    /*resp.statusCode = 200
    resp.setHeader("content-type", "text/html")
    resp.end("End Of Message")*/

    if (req.method == 'GET') {
        var fileUrl;
        //console.log(req.url)
        if (req.url == '/') {
            fileUrl = '/index.html'
        } else {
            fileUrl = req.url
        }

        //console.log(fileUrl)
        
        var filePath = path.resolve("./html" + fileUrl)
        const fileExtn = path.extname(filePath)

        //console.log(filePath)
        if (fileExtn == '.html') {
            fs.exists(filePath, (exists) => {
                if(!exists) {
                    resp.statusCode = 404
                    resp.setHeader('Content-type', "text/html")
                    resp.end(`<html><body> <h1> File not found </h1> ${fileUrl} </body></html>`)
                    return
                }

                resp.statusCode = 200
                resp.setHeader('Content-type', "text/html");
                fs.createReadStream(filePath).pipe(resp);
                return
            })
        } else {
            resp.statusCode = 404
            resp.setHeader('Content-type', "text/html")
            resp.end(`<html><body> <h1> File URL not a valid format </h1> ${fileUrl} </body></html>`)
            return
        }
    } else {
        resp.statusCode = 404
        resp.setHeader('Content-type', "text/html")
        resp.end(`<html><body> <h1> Request method ${req.method} not supported </h1> </body></html>`)
        return
    }

} )

server.listen(port, hostname, () => {console.log(`starting server @ ${hostname} & ${port}`)})


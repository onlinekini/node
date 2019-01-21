const Mongoclient = require('mongodb').MongoClient
const assert = require('assert')
const dboper = require('./operations')

const url = 'mongodb://localhost:27017'

/* Mongoclient.connect(url, (err, client) => {
    assert.equal(err, null)

    console.log("after connect")
    const db = client.db('test')
    const collectionName = 'dishes'

    
     dboper.insertDocument(db, {name:"Pepperoni Pizza", description:"The usual Pizza!!"}, collectionName, result => {
        console.log("Insert complete ", result)

        dboper.insertDocument(db, {name:"doughnut", description:"dought nut!!"}, collectionName, result => {
            console.log("Insert complete ", result)

            dboper.findDocuments(db, collectionName, docs => {
                console.log("Found ", docs)

                dboper.updateDocument(db, {name:"Pepperoni Pizza"}, 
                                          {name: "MacnCheese", description :"Mac & Cheese what else do you expect!!!"}, 
                                          collectionName, 
                                          result => {
                                              
                    console.log("Updated", result)
                    
                    dboper.removeDocument(db, {name:"Pepperoni Pizza"}, collectionName, result => {
                        console.log("Deleted!!!")
                    })
                
                })
            })
        })

    }) 
})*/

Mongoclient.connect(url).then((client) => {
    console.log("after connect")
    const db = client.db('test')
    const collectionName = 'dishes'
   
     dboper.insertDocument(db, {name:"Pepperoni Pizza", description:"The usual Pizza!!"}, collectionName)    
        .then(result => {
            console.log("Insert complete ", result.result)
            return dboper.insertDocument(db, {name:"doughnut", description:"dough nut!!"}, collectionName)
        })
        .then(result => {
            console.log("Insert complete ", result.result)
            return dboper.findDocuments(db, collectionName)
        })
        .then(docs => {
            console.log(`Found ${docs.length} in the Collection`)
            return dboper.updateDocument(db, 
                                            {name:'Pepperoni Pizza'}, 
                                            {name: "MacnCheese", description :"Mac n Cheese what else do you expect!!!"}, 
                                            collectionName)
        })
        .then (result => {
            console.log("After Update ", result.result)
            return dboper.findDocuments(db, collectionName)
        })
        .then(docs => {
            console.log(`Found ${docs.length} in the Collection`, docs)
            return dboper.removeDocument(db, {name:"Pepperoni Pizza"}, collectionName)
        })
        .then(result => {
            console.log("Deleted Anything ? ", result.result)
            return db.dropCollection(collectionName)
        })
        .then(result => {
            console.log("Collection Dropped", result)
            client.close()
        })
        .catch(err => {
            console.log("Found an error") 
            console.log(err)
        })
}).catch(err => console.log(err))


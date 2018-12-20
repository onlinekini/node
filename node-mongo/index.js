const mongoclient = require('mongodb').MongoClient
const assert = require('assert')

const url = 'mongodb://localhost:27017'

mongoclient.connect(url, (err, client) => {
    assert.equal(err, null)

    console.log("after connect")
    const db = client.db('test')
    const collection = db.collection('dishes')

    collection.insertOne({"name" : "Pepperoni Pizza", "description" : "the usual pizza"}, (err, result) => {
        assert.equal(err, null)
        console.log(`after insert ${result.ops}`)        

        collection.find({}).toArray( (err, docs) => {
            assert.equal(err, null)
            console.log(docs)

            db.dropCollection('dishes', (err, result) => {
                assert.equal(err, null)
                client.close();
            })
        })
    })
})


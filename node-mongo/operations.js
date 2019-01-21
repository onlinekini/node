const assert = require('assert')

getCollection = (db, collectionName) => {
    return db.collection(collectionName);
}

exports.insertDocument = (db, document, collectionName, callback)  => {
   const coll =  getCollection(db, collectionName)
   /* coll.insert(document, (err, result) => {
        assert.equal(err, null)
        console.log(` Inserted  ${result.result.n} documents into the collection ${collectionName}`)
        callback(result)
   }) */
   return coll.insert(document) //Anyway returns promise
}

exports.findDocuments  = (db, collectionName, callback) => {
    const coll = getCollection(db, collectionName)
    /* coll.find({}).toArray((err, docs) => {
        assert.equal(err, null)
        callback(docs)
    }) */
    return coll.find({}).toArray()
}

exports.removeDocument  = (db, document, collectionName, callback) => {
    const coll =  getCollection(db, collectionName)
    /* coll.deleteOne(document, (err, result) => {
        assert.equal(err, null)
        console.log(` removed the document ${document} from collection ${collectionName}`)
        callback(result)
    }) */
    return coll.deleteOne(document)
}

exports.updateDocument = (db, document, update, collectionName, callback)  => {
    const coll =  getCollection(db, collectionName)
    /* coll.updateOne(document, {$set: update}, null, (err, result) => {
        assert.equal(err, null)
        console.log(`Updated the collection ${collectionName} with the document ${document}`)
        callback(result)
    }) */
    return coll.updateOne(document, {$set: update}, null)
}
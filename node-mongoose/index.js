const mongoose = require('mongoose')
const dishes = require('./models/dishes')

const url = 'mongodb://localhost:27017/test'
const connect = mongoose.connect(url)

connect
    .then(
        db => {
        console.log("connected correctly to server")
        /* var newDish = dishes({name: "Paneer pizza", description: "Pizza with paneer topping"})
        newDish.save() */
        dishes.deleteMany({})
        .then (result => {
            console.log("DELETED", result)
            return dishes.create({name: "Paneer pizza", description: "Pizza with paneer topping"})
        })    
        .then(result => {
            console.log("CREATE -> ", result)
            return dishes.findOne({name: "Paneer pizza"}).exec()
        }) 
        .then (aDish => {
            console.log("FOUND ! : ", aDish)
            aDish.set({description: "Pizza with YUMMY paneer topping"})
            return aDish.save()
        })
        .then (aDish => {
            console.log("UPDATED ! : ", aDish)
            aDish.comments.push({rating: 1, comment:"Panneer was dry", author:"who else!"})
            return aDish.save()
        })
        .then (aDish => {
            console.log("COMMENT1 ! : ", aDish)
            aDish.comments.push({rating: 4, comment:"Panneer was great", author:"me!"})
            return aDish.save()
        }) 
        .then (data => {
            console.log("COMMENT 2 ! : ", data)
            return dishes.deleteMany({})
        }) 
        .then (result => {
            console.log('DELETED !', result)
            mongoose.connection.close()
        })
        .catch(err => {
            console.log(err)
            mongoose.connection.close()
        })    
}).catch(err => {
    console.log(err)
    mongoose.connection.close()
})
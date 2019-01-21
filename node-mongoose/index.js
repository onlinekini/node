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
        
        dishes.create({name: "Paneer pizza", description: "Pizza with paneer topping"})
            
        .then(result => {
            console.log("CREATE -> ", result)
            return dishes.findOne({name: "Paneer pizza"}).exec()
        }) 
        .then (data => {
            console.log("FOUND ! : ", data)
            data.set({description: "Pizza with YUMMY paneer topping"})
            return data.save()
        }) 
        .then (data => {
            console.log("UPDATED ! : ", data)
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
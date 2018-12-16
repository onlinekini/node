var callbacks = []

for (let i =0 ; i < 4; i ++) {
    callbacks [i] = (() => console.log(i))
}
// Use let,else the output is 4, 4, 4, 4.


callbacks[0]()
callbacks[1]()
callbacks[2]()
callbacks[3]()


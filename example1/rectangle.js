// Without call backs
//exports.perimeter = (x,y) => 2 * (x + y)
//exports.area = (x,y) => x * y 

// Using call backs
// There is delay of 2 seconds for any calls
module.exports = (x,y, callback) => {
    if (x <= 0 || y <= 0) {
        setTimeout(() =>  
            callback(new Error("Rectangle dimensions should be greater than ZERO l = " + x + " and b = " + y), 
                     null), 
            2000)
    } else {
        setTimeout(() => 
            callback(null, {
                    perimeter: () => 2 * (x + y), // X & Y is fetched from the outer call - CLosure
                    area: () => x * y 
                }),
            2000)
    }
}
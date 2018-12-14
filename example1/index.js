var rect = require("./rectangle")

/*var solveRectangle  = (l,b) => {
    console.log("Solving for rectanle with l = " + l + " and b = " + b)

    if (l <= 0 || b <= 0) {
        console.log("Rectangle dimensions should be greater than ZERO l = " + l + " and b = " + b)
    } else {
        console.log("Area = " , rect.area(l,b))
        console.log("Perimeter = " , rect.perimeter(l,b))
    }
} */

function solveRectangle (l,b) {
    console.log("Processing rect with l = " + l + " and b " + b);
    rect(l, b, (err, rectangle) => {
        if (err) {
            console.log("Error" + err.message)
        } else {
            console.log("Area : " + rectangle.area())
            console.log("Perimeter : " + rectangle.perimeter())
        }
   }) 
   console.log("After the function call");
}


solveRectangle(3,4)
solveRectangle(0,5)
solveRectangle(5,-3)
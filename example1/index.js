var rect = require("./rectangle")

var solveRectangle  = (l,b) => {
    console.log("Solving for rectanle with l = " + l + " and b = " + b)

    if (l <= 0 || b <= 0) {
        console.log("Rectangle dimensions should be greater than ZERO l = " + l + " and b = " + b)
    } else {
        console.log("Area = " , rect.area(l,b))
        console.log("Perimeter = " , rect.perimeter(l,b))
    }
}

solveRectangle(3,4)
solveRectangle(0,5)
solveRectangle(5,-3)
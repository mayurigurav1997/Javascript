//constructor is used to create object
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("Draw")
    }
}

const circle = new Circle(2);
console.log(circle)
console.log(circle.radius)
console.log(circle.draw)
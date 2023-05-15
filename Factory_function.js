//Factory Function used to create object
function createCircle(radius) {
    return {    //return object
        radius: radius,
        draw() {
            console.log("Draw");
        }
    };
}

const circle1 = createCircle(2);
console.log(circle1);
console.log(circle1.radius);
console.log(circle1.draw);
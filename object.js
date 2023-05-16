// let radius = 1;
// let x= 1;
// let y = 1;

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {
        console.log("Draw");
    }
};

circle.draw()

for (let key in circle) {
    console.log(key, circle[key]);
}
// object is not iterable
//TypeError: circle is not iterable
// for (let key of circle) {
//     console.log(key)
// }

//Object.keys(circle) will return array of keys
//array is iterable
for (let key of Object.keys(circle)) {
    console.log(key + "*")
}
console.log(Object.keys(circle)) //return array of keys
console.log(Object.entries(circle)) //return array of (key,value) arrays
const circle = {
    radius: 1,
    draw() {
        console.log("Draw")
    }
}

const another = {};
for (let key in circle) {
    another[key] = circle[key]
}
console.log(another)

const third = Object.assign({ color: "yellow" }, circle);
console.log(third)

const fourth = { ...circle };
console.log(fourth)
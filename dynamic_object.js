const circle = {
    radius: 1
};
circle.color = "yellow";
circle.length = 9;
circle.draw = function () { }

delete circle.length;
console.log(circle);
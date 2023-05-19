//function declaration
function walk() {
    console.log("walk")
}

//function expression
let run = function () {
    console.log("Run")
}
let move = run;
run()
move()
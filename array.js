const numbers = [3, 4];
// numbers = []; //TypeError: Assignment to constant variable.

//end
numbers.push(5, 6)
console.log(numbers)

//start 
numbers.unshift(1, 2)
console.log(numbers)

//middle
numbers.splice(2, 0, 'a', 'b', 'c')
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
console.log(numbers)

const numbers1 = [1, 2, 3, 4, 5, 1, 6, 7, 8, 1, 9];
console.log(numbers1.indexOf('q'))  //-1
console.log(numbers1.indexOf(3))  //2
console.log(numbers1.lastIndexOf(1)) //9
console.log(numbers1.indexOf(1))  //0
console.log(numbers1.includes(1))  //true
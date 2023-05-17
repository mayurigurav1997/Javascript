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


const numbers2 = [1, 2, 3, 4, 5, 6, 7];
//end
const last = numbers2.pop()
console.log(last)
console.log(numbers2)

//start
const first = numbers2.shift()
console.log(first);
console.log(numbers2)

//middle
const middle = numbers2.splice(2, 1);
console.log(numbers2);
console.log(middle);


let numbers = [1, 2, 3, 4, 5]
let another = numbers

// solution1
numbers = [];
console.log(numbers)
console.log(another)

//solution2
another.length = 0;
console.log(another)

//solution 3
let numbers1 = [1, 2, 3, 4, 5];
numbers1.splice(0, numbers1.length);
console.log(numbers1)

//solution 4
let numbers2 = [1, 2, 3, 4, 5];
while (numbers2.length > 0) {
    numbers2.pop()
}
console.log(numbers2)
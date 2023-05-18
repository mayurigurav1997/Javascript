const numbers = [1, 2, 3, 4, 5, 6, 7]
console.log(numbers.includes(2))  //true

const flag = INCLUDES(numbers, 9)
function INCLUDES(numbers, num) {
    for (let i of numbers) {
        if (num == i) {
            return true;
        }
    }
    return false;
}
console.log(flag)
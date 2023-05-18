const numbers = [1, 2, 3, 4, 5, 6]
const max = getMax(numbers);
console.log(max);
function getMax(array) {
    if (array.length === 0) return undefined;
    let max = array[0];

    // for (let i = 1; i < array.length; i++) {
    //     if (array[i] > max) {
    //         max = array[i];
    //     }
    // }
    // return max;
    return array.reduce((acc, curr) => {
        return curr > acc ? curr : acc
    }, 0)
}
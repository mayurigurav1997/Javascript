const numbers = [1, 2, 3, 4, 1, 2, 3];
const count = countOccurrences(numbers, 1);
console.log(count)

function countOccurrences(array, searchElement) {
    // let count = 0;
    // for (let ele of array) {
    //     if (ele === searchElement) {
    //         count++
    //     }
    // }
    // return count

    return array.reduce((acc, cur) => {
        const occ = (cur === searchElement) ? 1 : 0;
        return acc + occ;
    }, 0)
}
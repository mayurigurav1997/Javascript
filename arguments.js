function sum() {
    let total = 0;
    //argument is an inbuild object
    for (let number of arguments) {
        total += number;
    }
    return total
}
console.log(sum(24, 3, 6, 7, 4, 9, 10))
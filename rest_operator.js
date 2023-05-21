function sum(discount, ...args) {
    const total = args.reduce((a, b) => a + b)
    return total * (1 - discount)
}
console.log(sum(0.2, 4, 8, 6, 10))

//... it will create the array
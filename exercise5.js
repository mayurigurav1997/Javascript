try {
    const numbers = [1, 2, 3, 4, 1, 1];
    const count = countOccurences(numbers, 1);
    console.log(count)
}
catch (e) {
    console.log(e.message)
}

function countOccurences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error("Invalid Error")
    return array.reduce((acc, curr) => {
        const occurence = (curr == searchElement) ? 1 : 0;
        return acc + occurence
    }, 0)
}
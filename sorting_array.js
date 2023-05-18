const numbers = [1, 8, 3, 5, 7, 2]
numbers.sort();
console.log(numbers)

numbers.reverse()
console.log(numbers)

const courses = [
    { id: 1, name: "Node JS" },
    { id: 2, name: "HTML" },
]

courses.sort(function (a, b) {
    //a>b  1
    //a<b -1
    //a==b 0
    const nameA = a.name.toLowerCase()
    const nameB = b.name.toLowerCase()
    if (nameA < nameB) return -1
    if (nameA > nameB) return 1
    return 0
})
console.log(courses)
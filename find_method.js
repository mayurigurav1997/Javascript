const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
]
console.log(courses.includes({ id: 1, name: 'a' }))  //false
//refer different location


//returns the first element in the provided array that satisfies the provided testing function. 
const course = courses.find(function (course) {
    return course.name === 'a';
})
console.log(course)
//If no values satisfy the testing function, undefined is returned.

const course1 = courses.findIndex(function (course) {
    return course.name === 'a';
})
console.log(course1)
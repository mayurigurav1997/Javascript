const person = {
    firstName: "Mayuri",
    lastName: "Gurav",
    // fullName: () => {
    //     return `${person.firstName} ${person.lastName}`
    // }
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        const parts = value.split(" ")
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

console.log(`${person.firstName} ${person.lastName}`)

//cant edit the name only call
// console.log(person.fullName())

person.fullName = "Krishna Vardhan"
console.log(person.fullName)
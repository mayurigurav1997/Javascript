const address = {
    street: "8 no school",
    city: "kolhapur",
    zipcode: "2130"
}

//1.show the address using loop
function showAddress(address) {
    for (let key in address) {
        console.log(address[key])
    }
}
showAddress(address)

//2.Factory function
function createAddress(street, city, zipcode) {
    return {
        street,
        city,
        zipcode
    };
}
let address1 = createAddress("8 no", "kolhapur", "28987")
console.log(address1)

//3.Constructor function
function Addressconstructor(street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}
const address3 = new Addressconstructor("4 no", 'karad', '2390');
console.log(address3);

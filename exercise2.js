function Addressconstructor(street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}
const address1 = new Addressconstructor("4 no", 'karad', '2390');
const address2 = new Addressconstructor("4 no", 'karad', '2390');

//check two objects are equal
function areEqual(address1, address2) {
    return address1.street === address2.street && address1.city === address2.city && address1.zipCode === address2.zipCode
}
console.log(areEqual(address1, address2))

//check same reference
function areSame(address1, address2) {
    return address1 === address2;
}
console.log(areSame(address1, address2))
const now = new Date();
const date1 = new Date('May 11 2018 9:20');
const date2 = new Date(2018, 11, 02, 9, 20);

console.log(date1)
console.log(date2)

now.setFullYear(2020);
console.log(now.toDateString())
console.log(now.toTimeString())
console.log(now.toISOString())
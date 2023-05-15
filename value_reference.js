let x = 10;
let y = x;  //copy by value

x = 20;
console.log(x); //20
console.log(y); //10

let a = { value: 10 };
let b = a;   // copy by reference
a.value = 30;
console.log(a);
console.log(b);

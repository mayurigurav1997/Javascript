const numbers = [1, -2, 2, 3, -7, 5, 9];
const filtered = numbers.filter(value => value >= 0)
console.log(filtered)

const items = filtered.map(n => `<li>${n}</li>`)
console.log(items);
const html = '<ul>' + items.join('') + '</ul>';
console.log(html);

const item1 = filtered.map(n => {
    const obj = { value: n };
    return obj;
})
console.log(item1)

const item2 = numbers.filter(n => n >= 0)
    .map(n => ({ value: n }))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value)
console.log(item2)

let sum = 0;
for (let n of numbers) {
    sum = sum + n;
}
console.log(sum)
const sum1 = numbers.reduce((acc, n) => {
    return acc + n;
}, 0)
console.log(sum1)

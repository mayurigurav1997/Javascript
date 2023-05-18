const numbers = [1, -2, 2, 3, -7, 5];
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
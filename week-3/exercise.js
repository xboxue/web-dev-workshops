const arr = ["ab", "bc", "ad"];

const a = arr.filter(x => x[0] == "a");
const b = arr.reduce((acc, curr) => acc + curr);
const c = arr.map(x => x + "cd");

console.log(a);
console.log(b);
console.log(c);

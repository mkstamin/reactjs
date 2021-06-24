// simple javasceipt reducer methods

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const initialValue = 10;
const result = arr.reduce((acc, curr) => acc + curr, initialValue);

console.log(result);

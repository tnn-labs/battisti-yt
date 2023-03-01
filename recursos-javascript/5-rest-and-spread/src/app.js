// rest
// -----
function sum(...numbers) {
  return numbers.reduce((total, number) => total + number);
}

console.log('rest: ', sum(2, 4, 7, 9));
console.log('rest: ', sum(12, 45, 70, 9));

// spread
// -------
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const combinedNumbers = [...numbers1, ...numbers2];
console.log('spread: ', combinedNumbers);

const user = {
  name: 'jhon doe',
  age: 32,
};

const userWithAddress = { ...user, address: '123 Main Street City, ST 12345' };
console.log('spread: ', userWithAddress);

import { numbers, products } from './data.js';

const evenNumbers = numbers.filter(item => item % 2 === 0);
const oddNumbers = numbers.filter(item => item % 2 === 1);

const categoryFoods = products
  .filter(product => product.category === 'alimentos')
  .map(product => product.name);

export { evenNumbers, oddNumbers, categoryFoods };
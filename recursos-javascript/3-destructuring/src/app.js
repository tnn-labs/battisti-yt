import { numbers, product } from "./data.js";

// extrair de objeto
const { name, category } = product;
console.log('name: ', name);
console.log('category: ', category);

// extrair de array
const [ valueOne, valueTwo, valueThree ] = numbers;
console.log('valueOne: ', valueOne);
console.log('valueTwo: ', valueTwo);
console.log('valueThree: ', valueThree);

// extrair de função
function displayProduct({ name, price, category }) {
  console.log(`Name: ${name}`);
  console.log(`Price: ${price}`);
  console.log(`Category: ${category}`);
}

displayProduct(product);

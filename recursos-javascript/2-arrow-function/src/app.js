// arrow function
import { sumFunction, sumArrow, sumArrowWithReturn } from "./sum.js";
import { evenNumbers, oddNumbers, categoryFoods } from "./filter.js";
import { allProducts, idsProducts } from "./map.js";
import { totalProducts } from "./reduce.js";

console.log('sumFunction: ', sumFunction(2, 3));
console.log('sumArrow: ', sumArrow(5, 2));
console.log('sumArrowWithReturn: ', sumArrowWithReturn(3, 6));

console.log('evenNumbers: ', evenNumbers);
console.log('oddNumbers: ', oddNumbers);

console.log('allProducts: ', allProducts);
console.log('idsProducts: ', idsProducts);

console.log('categoryFoods: ', categoryFoods);

console.log('totalProducts: ', totalProducts);
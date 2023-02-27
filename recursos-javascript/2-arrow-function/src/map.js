import { products } from './data.js';

const allProducts = products.map(product => product);
const idsProducts = products.map(product => product.id);

export { allProducts, idsProducts };
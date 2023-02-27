import { numbers, products } from './data.js';

const totalProducts = products.reduce((acc, product) => acc + product.price, 0);

export { totalProducts };
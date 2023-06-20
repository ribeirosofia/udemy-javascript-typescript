/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

Object.keys (returns keys)
Object.freeze (freeze objects)
Object.defineProperties (define many properties)
Object.defineProperty (define a single property)
*/

const product = { name: "mug", price: 1.8, material: "clay" };
const mug = { ...product, material: "clay" };
// const mug = Object.assign({}, product, { material: "clay" });
// Object.freeze(product);
// const mug = { name: product.name, price: product.price };
// console.log(Object.keys(product));

mug.price = 10;
mug.name = "plates";
console.log(product);

// console.log(Object.getOwnPropertyDescriptor(product, "name"));
// Object.defineProperty(product, "name", {
//   writable: false,
//   configurable: false,
//   value: "jar",
// });
// console.log(Object.values(product));
// console.log(Object.entries(product));

// for (let [key, value] of Object.entries(product)) {
//   console.log(key, value);
// }

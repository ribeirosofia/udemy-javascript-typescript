// defineProperty - defineProperties

function Product(name, price, storage) {
  Object.defineProperty(this, "storage", {
    enumerable: true,
    value: storage,
    writable: false,
    configurable: true,
  });

  Object.defineProperties(this, {
    name: {
      enumerable: true,
      value: name,
      writable: true,
      configurable: true,
    },
    price: {
      enumerable: true,
      value: price,
      writable: true,
      configurable: true,
    },
  });
}

const p1 = new Product("shirt", 20, 3);
console.log(p1);

for (let key in p1) {
  console.log(key);
}

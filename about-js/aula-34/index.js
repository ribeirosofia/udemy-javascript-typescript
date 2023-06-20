function Product(name, price, storage) {
  this.name = name;
  this.price = price;

  let privateStorage = storage;
  Object.defineProperty(this, "storage", {
    enumerable: true,
    // value: storage,
    // writable: true,
    configurable: true,
    get: () => {
      return storage;
    },
    set: (value) => {
      if (typeof value !== "number") {
        throw new TypeError("Bad value for storage");
      }
    },
  });
}

function createProduct(name) {
  return {
    get name() {
      return name;
    },
    set name(value) {
      name = value;
    },
  };
}

const p2 = createProduct("sweater");
p2.name = "dresses";
console.log(p2.name);

// const p1 = new Product("shirt", 20, 3);
// console.log(p1);
// p1.storage = 50;
// console.log(p1.storage);

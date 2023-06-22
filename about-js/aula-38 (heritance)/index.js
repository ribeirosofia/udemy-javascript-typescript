function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.increase = function (amount) {
  this.price += amount;
};
Product.prototype.increase = function (amount) {
  this.price -= amount;
};

function Shirt(name, price, color) {
  Product.call(this, name, price);
  this.color = color;
}

Shirt.prototype = Object.create(Product.prototype);
Shirt.prototype.constructor = Shirt;

Shirt.prototype.increase = function (percentage) {
  this.price += percentage / 100;
};

function Mug(name, price, material, storage) {
  Product.call(this, name, price);
  this.material = material;
  this.storage = storage;

  Object.defineProperty(this, "storage", {
    enumerable: true,
    configurable: false,
    get: function () {
      return storage;
    },
    set: function (value) {
      if (typeof value !== "number") return;
      storage = value;
    },
  });
}

Mug.prototype = Object.create(Product.prototype);
Mug.prototype.constructor = Mug;

Mug.prototype.discount = function (percentage) {
  this.price -= percentage / 100;
};

const product = new Product("Generic", 111);
const shirt = new Shirt("Sleeves", 7.5, "gray");
const mug = new Mug("Frog mug", 12, "clay", 5);
shirt.increase(10);
mug.discount(15);
console.log(product);
console.log(shirt);
console.log(mug);

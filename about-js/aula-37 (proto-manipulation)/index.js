// new Object -> Object.prototype
function Product(name, price) {
  this.name = name;
  this.price = price;
}


Product.prototype.discount = (percents) => {
  console.log(this);
  this.price = this.price - this.price * (percents / 100);
};

Product.prototype.increase = (percents) => {
  console.log(this);
  this.price = this.price + this.price * (percents / 100);
};

const p1 = new Product("Sleeve", 50);

const p2 = {
  name: "mug",
  price: 15,
};

// Object.setPrototypeOf(p2, Product.prototype);

p1.increase(10);
// p2.discount(10);

console.log(p1);
console.log(p2);

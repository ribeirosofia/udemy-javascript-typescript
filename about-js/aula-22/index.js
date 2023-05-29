function Person(name, lastname) {
  const ID = 131313;

  const internMethod = () => {};

  this.name = name;
  this.lastname = lastname;

  this.method = () => {
    console.log(this.name + " Alien Superstar");
  };
}

const p1 = new Person("Jane", "Doe");
const p2 = new Person("Doe", "Deer");

p1.method();

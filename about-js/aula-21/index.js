const createPerson = (name, lastname, height, weight) => {
  return {
    name,
    lastname,

    get fullName() {
      return `${this.name} ${this.lastname}`;
    },

    set fullName(value) {
      value = value.split(" ");
      this.name = value.shift();
      this.lastname = value.join(" ");
    },

    talk(subject = "food") {
      return `${this.name} is talking about ${subject}`;
    },

    height: height,
    weight: weight,
    get imc() {
      const index = this.weight / (this.height * this.height);
      return index.toFixed(2);
    },
  };
};

const p1 = createPerson("Jane", "Doe", 1.6, 60);
p1.fullName = "Raven Doe Smith";
console.log(p1.name);
console.log(p1.lastname);
console.log(p1.talk());

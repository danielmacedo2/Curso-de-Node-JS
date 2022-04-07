class Person {
  constructor(name, country) {
    this.name = name;
    this.country = country;
  };

  sayMyName() {
    return `Hello, My name is ${this.name} and I'm From ${this.country}`;
  };
};

module.exports = {
  Person: Person,
};

class Vehicle {
  constructor(style, color) {
    this.style = style;
    this.color = color;
  }
  description() {
    return "I'm a part of the vehicle class.";
  }
}

class Car extends Vehicle {
  constructor(style, color, year) {
    super(style, color);
    this.year = year;
  }
  description() {
    return "i'm a part of the vehicle class.";
  }
}

class Motorcycle extends Vehicle {
  constructor(style, color, year, country) {
    super(style, color);
    this.year = year;
    this.country = country;
  }
}

car = new Car("Sedan", "Black", 2010);
console.log(car.description());
console.log(`the style of the car is ${car.style}`);
console.log(`the color of the car is ${car.color}`);
console.log(`the year of the car is ${car.year}`);

moto = new Motorcycle("Harley Davidson", "Black", 2005, "USA");
console.log(moto.description());
console.log(`the style of the motorcycle is ${moto.style}`);
console.log(`the color of the motorcycle is ${moto.color}`);
console.log(`the year of the motorcycle is ${moto.year}`);
console.log(`this motorcycle is from ${moto.country}`);

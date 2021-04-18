class Car {
  constructor(style, color) {
    this.color = color;
    this.style = style;
  }
  showDescription() {
    console.log(`This car is a ${this.color} ${this.style}`);
  }
  changeColor(color) {
    this.color = color;
  }
}

car = new Car("Sedan", "Grey");
car.showDescription();
car.changeColor("White");
car.showDescription();

class Car:

    doors = 4

    def __init__(self, style, color):
        self.color = color
        self.style = style

    # define a method to describe car
    def show_description(self):
        print(f"This car is a {self.color} {self.style}")

    # define a method to change color
    def change_color(self, color):
        self.color = color

car = Car('Sedan', 'Grey')

car.show_description()

car.change_color('Black')

car.show_description()
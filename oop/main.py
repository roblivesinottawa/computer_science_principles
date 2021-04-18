class Vehicle:

    def __init__(self, style, color):
        self.color = color
        self.style = style

    def description(self):
        return "I'm a part of the vehicle class."


class Car(Vehicle):
    def __init__(self, style, color, model_year):
        super().__init__(style, color)
        self.model_year = model_year

    def description(self):
        return "I'm a part of the vehicle class."

class Motorcycle(Vehicle):
    def __init__(self, style, color, model_year, country_of_origin):
        super().__init__(style, color)
        self.model_year = model_year
        self.country_of_origin = country_of_origin

    def description(self):
        return "I'm a part of the vehicle class."

# car = Car('Sedan', 'Black', 2010)
# print(car.description())
# print(f'The style of the car is {car.style}.')
# print(f'The color of the car is {car.color}.')
# print(f'The year of the car is {car.model_year}.')

moto = Motorcycle('racing', 'black', '2015', 'Japan')
print(moto.description())
print(f'The style of the motorcycle is {moto.style}.')
print(f'The color of the motorcycle is {moto.color}.')
print(f'The year of the motorcycle is {moto.model_year}.')
print(f'The country of origin of the motorcycle is {moto.country_of_origin}.')
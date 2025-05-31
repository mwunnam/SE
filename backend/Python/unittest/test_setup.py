import unittest

class Calculator:
    def __init__(self):
        self.total = 0

    def add(self, value):
        self.total += value
        return self.total

    def reset(self):
        self.total = 0

    

calc = Calculator()
value = calc.add(4)
print(value)
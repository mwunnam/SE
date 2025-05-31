import unittest

def divide(a, b):
    return a / b

class Test_divide_case(unittest.TestCase):
    def test_divide_by_zero(self):
        with self.assertRaises(ZeroDivisionError):
            divide(10, 0)

    def test_divide_valid(self):
        self.assertEqual(divide(10, 2), 5)

if __name__=="__main__":
    unittest.main()

from parameterized import parameterized
import unittest

def multiply(a, b):
    return a * b


class MultiplyTestCase(unittest.TestCase):
    @parameterized.expand([
        ("simple_multiplication_case", 2, 3, 6),
        ("Negative_multiplication_case", -5, 1, -5),
        ("zero_multiplication_case", 0, 10, 0),
    ])

    def test_multiply(self, name, a , b, expected):
        self.assertEqual(multiply(a, b), expected)

    
if __name__ == "__main__":
    unittest.main()
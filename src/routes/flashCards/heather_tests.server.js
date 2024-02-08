export const heathers = [
	{
		setup: ['a = 5', 'b = 7'],
		test: 'a < b',
		answer: true
	},
	{
		setup: ['a = 5', 'b = 7'],
		test: 'a < b && b > 10',
		answer: false
	},
	{
		setup: ['a = 5', 'b = 7'],
		test: 'a < b || b > 10',
		answer: true
	},
	{
		setup: ['a = 3.1415', 'b = 3.1415'],
		test: 'a <= b',
		answer: true
	},
	{
		setup: ['a = "Nathan"', 'b = "Angeline"'],
		test: 'a !== b',
		answer: true
	},
	{
		setup: ['a = 406', 'b = 407'],
		test: 'a === b',
		answer: false
	},
	{
		setup: ['a = 11', 'b = 13'],
		test: 'a > b',
		answer: false
	},
	{
		setup: ['a = 77', 'b = 44'],
		test: 'a < b',
		answer: false
	},
	{
		setup: ['a = 11', 'b = 1'],
		test: 'a > b && b > 2',
		answer: false
	},
	{
		setup: ['a = 40', 'b = 40'],
		test: 'a !== b',
		answer: false
	},
	{
		setup: ['a = 100', 'b = 100'],
		test: 'a !== b',
		answer: false
	},
	{
		setup: ['a = 98', 'b = 100'],
		test: 'a < 99 && b > 99',
		answer: true
	},
	{
		setup: ['a = "blue"', 'b = "blue"'],
		test: 'a !== b',
		answer: false
	},
	{
		setup: ['a = "red"', 'b = "red"'],
		test: 'a === b',
		answer: true
	},
	{
		setup: ['10 % 2 === b', '44 % 2 === a'],
		test: 'a !== b',
		answer: false
	},
	{
		setup: ['a = "Hello"', 'b = "hello"'],
		test: 'a === b',
		answer: false
	},
	{
		setup: ['a = "Hello"', 'b = "hello"'],
		test: 'a !== b',
		answer: true
	},
	{
		setup: ['a = 5 + 10', 'b = 25'],
		test: 'a !== b',
		answer: true
	},
	{
		setup: ['a = 7', 'b = 2 + 5'],
		test: 'a === b',
		answer: true
	},
	{
		setup: ['a = 22', 'b = 11 + 11'],
		test: 'a >= b',
		answer: true
	},
	{
		setup: ['a = 7', 'b = 2 + 5'],
		test: 'a <= b',
		answer: true
	},
	{
		setup: ['a = 71', 'b = 7 + 1'],
		test: 'a !== b',
		answer: true
	},
	{
		setup: ['a = 0', 'b = "0"'],
		test: 'a === b',
		answer: false
	},
	{
		setup: ['a = 0', 'b = "0"'],
		test: 'a !== b',
		answer: true
	},
	{
		setup: ['a = 10', 'b = "10"'],
		test: 'a !== b',
		answer: true
	},
	{
		setup: ['a = 70', 'b = "70"'],
		test: 'a === b',
		answer: false
	},
	{
		setup: ['a = 5', 'b = 6'],
		test: 'a === b || a <= b',
		answer: true
	},
	{
		setup: ['a = 19', 'b = 19'],
		test: 'a === b || a < b',
		answer: true
	},
	{
		setup: ['a = 10', 'b = 10'],
		test: 'a !== b || a < b',
		answer: false
	},
	{
		setup: ['a = 10', 'b = 10'],
		test: 'a !== b',
		answer: false
	},
	{
		setup: ['a = 11', 'b = 1 + 10'],
		test: 'a === b || a < b',
		answer: true
	},
	{
		setup: ['a = 2', 'b = 17'],
		test: 'a <= b',
		answer: true
	},
	{
		setup: ['m = 12', 'n = 11', 'a = 7', 'b = 5'],
		test: 'm > n && a + b >= b - m',
		answer: true
	},
	{
		setup: ['a = 44', 'n = 11', 'm = 33'],
		test: 'a >= n + m',
		answer: true
	},
	{
		setup: ['a = 60', 'b = 47', 'm = 17'],
		test: 'a < b || a > m && b > m',
		answer: true
	},
	{
		setup: ['a = 40', 'b = 38', 'm = 29', 'n = 12'],
		test: 'a > b && b > m && m > n',
		answer: true
	},
	{
		setup: ['a = 11', 'b = 17', 'm = 15', 'n = 12'],
		test: 'a > m || b > n',
		answer: true
	},
	{
		setup: ['a = 7', 'b = 7', 'm = 14', 'n = 2'],
		test: 'a + b = 14 && a * n = 14 && m / n = a',
		answer: true
	},
	{
		setup: ['a = 11', 'b = 17', 'm = 15', 'n = 12'],
		test: 'a >= d || n < m && b < m',
		answer: false
	},
	{
		setup: ['a = 11', 'b = 17', 'm = 15', 'n = 12'],
		test: 'a > b !== m > n ',
		answer: true
	},
	{
		setup: ['a = 23', 'b = 89', 'm = 22', 'n = 78'],
		test: 'n > m && a > b !== b > n ',
		answer: true
	},
	{
		setup: ['13 % 2 === b', '50 % 2 === a'],
		test: 'a !== b',
		answer: true
	},
	{
		setup: ['a = 13', 'b = 17', 'm = 20', 'n = 2'],
		test: 'a >= n && m % n = 0 && b >= n',
		answer: true
	},
	{
		setup: ['a = 50', 'b = 33', 'c = 77'],
		test: 'a + b !== c',
		answer: true
	},
	{
		setup: ['a = 5 + 22', 'b = 25 - 2'],
		test: 'a !== b',
		answer: true
	},
	{
		setup: ['a + b = 7', 'b = 2'],
		test: 'a + b === b',
		answer: false
	},
	{
		setup: ['a = 1 - 5', 'b = 5 - 9'],
		test: 'a !== b',
		answer: false
	},
	{
		setup: ['a = 7', 'b = 5 % 2', 'm = 1'],
		test: 'a > m && b === m && b <= a',
		answer: true
	},
	{
		setup: ['a = 20 % 2', 'b = 7 + 1'],
		test: 'a !== b',
		answer: true
	},
	{
		setup: ['a = 1', 'b = 17 % 2'],
		test: 'a === b',
		answer: true
	},
	{
		setup: ['a = 0', 'b = 100 % 2'],
		test: 'a !== b',
		answer: false
	},
	{
		setup: ['a = 88', 'b = 89', 'm = 88 % 2', 'n = 89 % 2'],
		test: 'm <= n && a === b',
		answer: false
	},
	{
		setup: ['a = 70', 'b = 49', 'm = 7 * 7', 'n = 7 * 2'],
		test: 'm > n && a < b',
		answer: false
	},
	{
		setup: ['a = 12', 'b = 1', 'm = 2', 'n = 13'],
		test: 'a <= n && n % m = 1 && a >= n',
		answer: false
	},
	{
		setup: ['a = 50', 'b = 33', 'm = 80', 'n = 8'],
		test: 'a + b === m + n',
		answer: true
	},
	{
		setup: ['a = 23', 'b = 27 - 4'],
		test: 'a !== b',
		answer: false
	},
	{
		setup: ['a + b = 7', 'm = 2', 'n = 5'],
		test: 'a + b === m + n',
		answer: true
	},
	{
		setup: ['a = 53', 'b = 57 - 4'],
		test: 'a !== b',
		answer: false
	},
	{
		setup: ['a = 10', 'b = 20 % 2', 'm = 20'],
		test: 'a < m && b !== m && b <= a',
		answer: true
	},
	{
		setup: ['a = 21 % 5', 'b = 7 - 6'],
		test: 'a !== b',
		answer: false
	},
	{
		setup: ['a = 2', 'b = 17 % 3'],
		test: 'a === b',
		answer: true
	},
	{
		setup: ['a = 0', 'b = 101 % 2'],
		test: 'a !== b',
		answer: true
	},
	{
		setup: ['a = 11', 'b = 33', 'm = 11 % 2', 'n = 21 % 2'],
		test: 'm <= n && a === b',
		answer: false
	},
	{
		setup: ['a = 7', 'b = 8', 'm = 3 * 6', 'n = 9 * 2'],
		test: 'm === n && a < b',
		answer: true
	}
];

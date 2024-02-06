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
	}
];

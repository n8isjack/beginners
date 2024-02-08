export const angelines = [
	{
		setup: ['a = 5', 'b = 7'],
		test: 'a > b',
		answer: false
	},
	//> , < , >= , <= , === , and !==
	{
		setup: ['a = 10', 'b = 1'],
		test: 'a < b',
		answer: false
	},
	{
		setup: ['a = 5', 'b = 7', 'c = 20', 'd = 15'],
		test: 'a > b || c > d',
		answer: false
	},
	{
		setup: ['a = 5', 'b = 7', 'f = 100', 't = 11'],
		test: 'a < t && b < f && b < f ',
		answer: true
	},
	{
		setup: ['t = 11', 'o = 11', 'c = 13', 'tr = 9', 'j = 16', 'l = 16'],
		test: 't >= o && j >= l || c > tr',
		answer: true
	},
	//> , < , >= , <= , === , and !==
	{
		setup: ['t = 11', 'o = 11', 'j = 16', 'l = 16'],
		test: 't === o && j === l',
		answer: true
	},
	{
		setup: ['t = 11', 'o = 11', 'j = 16', 'l = 16'],
		test: 't >= o || j <= l',
		answer: true
	},
	{
		setup: ['t = 11', 'o = 11', 'c = 13', 'tr = 9', 'j = 16', 'l = 16'],
		test: 'o > c && j >= l',
		answer: false
	},
	{
		setup: ['t = 11', 'o = 11', 'j = 16', 'l = 16', 'tr = 9'],
		test: 'l > t || j < tr',
		answer: true
	},
	{
		setup: ['u = 60', 'a = 45', 'm = 98', 'd = 23', 'e = 12', 'v = 110'],
		test: 'u > a || m < v && a > d && m < e',
		answer: false
	},
	{
		setup: ['t = 11', 'w = 17', 'r = 15', 'l = 12', 'd = 10', 'c = 8'],
		test: 'w > c && r > d && w > r',
		answer: true
	},
	{
		setup: ['t = 11', 'w = 17', 'r = 15', 'l = 12', 'd = 10', 'c = 8'],
		test: 'r > c || l > c',
		answer: true
	},
	{
		setup: ['t = 11', 'o = 11', 'j = 16', 'l = 16', 'tr = 9'],
		test: 't !== tr || o !== t',
		answer: false
	},
	{
		setup: ['t = 11', 'w = 17', 'r = 15', 'l = 12', 'd = 10', 'c = 8'],
		test: 'c <= d || c < r && t < w',
		answer: true
	},
	{
		setup: ['t = 11', 'w = 17', 'r = 15', 'l = 12', 'd = 10', 'c = 8'],
		test: 'w > r || l > d !== d > c ',
		answer: false
	},
	{
		setup: ['a = 23', 'n = 89', 'k = 22', 'q = 78', ' m = 55', ' b = 43'],
		test: 'n > m || a > k !== b > q ',
		answer: false
	},
	{
		setup: ['x = 12 % 2', 'b = 35 % 3'],
		test: 'x > b',
		answer: true
	},
	{
		setup: ['t = 26 % 2', ' w = 6 % 3', 'r = 5', 'l = 45', 'd = 82 % 4'],
		test: 't < w && r > w',
		answer: true
	},
	{
		setup: ['c = 63 % 3', 'd = 92 % 2', 'l = 55', 'z = 3', 'v = 72 % 2'],
		test: 'c < d || l < z && d < v',
		answer: false
	}
];

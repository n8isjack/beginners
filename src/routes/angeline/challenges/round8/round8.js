export const challenge1 = (data) => {
	// Get the average negative value with a standard For Loop
	// variables
	let paper = [];

	for (let i = 0; i < data.length; i++) {
		if (data[i] < 0) {
			paper.push(data[i]);
		}
	}

	let anotherPaper = 0;

	for (let i = 0; i < paper.length; i++) {
		anotherPaper += paper[i];
	}

	return anotherPaper / paper.length;
};

export const challenge2 = (data) => {
	// Get the average negative value with a For-In Loop
	// variables
	let paper = [];
	for (let i in data) {
		if (data[i] < 0) {
			paper.push(data[i]);
		}
		// anotherPaper += paper[i];
	}
	let anotherPaper = 0;
	for (let i in paper) {
		anotherPaper += paper[i];
	}
	return anotherPaper / paper.length;
};

export const challenge3 = (data) => {
	// Get the average negative value with a For-Of Loop
	// variables
	let paper = [];
	for (let value of data) {
		if (value < 0) {
			paper.push(value);
		}
	}

	let anotherPaper = 0;
	for (let value of paper) {
		anotherPaper += value;
	} // 0 +-42 + -34 + -106 + - 153 =
	return anotherPaper / paper.length;
}; // / 4
export const challenge4 = (data) => {
	// Get the average negative value with a [].filter() method
	// variables
	let paper = data.filter((value) => value < 0);

	let anotherPaper = 0;
	for (let value of paper) {
		anotherPaper += value;
	}
	// code

	return anotherPaper / paper.length;
};

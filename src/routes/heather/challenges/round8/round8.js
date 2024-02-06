export const challenge1 = (data) => {
	// Get the average negative value with a standard For Loop

	let count = 0;
	let sum = 0;
	for (let i = 0; i < data.length; i++) {
		if (data[i] < 0) {
			sum += data[i];
			count += 1;
		}
	}

	return sum / count;
};

export const challenge2 = (data) => {
	// Get the average negative value with a For-In Loop
	let count = 0;
	let sum = 0;

	for (let i in data) {
		if (data[i] < 0) {
			sum += data[i];
			count += 1;
		}
	}
	return sum / count;
};

export const challenge3 = (data) => {
	// Get the average negative value with a For-Of Loop
	let count = 0;
	let sum = 0;

	for (let value of data) {
		if (value < 0) {
			sum += value;
			count += 1;
		}
	}

	return sum / count;
};

export const challenge4 = (data) => {
	let count = 0;
	let sum = 0;

	let isNegative = (value) => {
		return value < 0; // true | false
	};
	let negData = data.filter((value) => value < 0);
	for (let i = 0; i < negData.length; i++) {
		sum += negData[i];
		count += 1;
	}
	return sum / count;
};

// export const challenge4 = (data) => {
// 	let count = 0;
// 	let sum = 0;
//
// 	let negData = data.filter((value) => value < 0);
// 	for (let i = 0; i < negData.length; i++) {
// 		sum += negData[i];
// 		count += 1;
// 	}
// 	return sum / count;
// };

/** @type {import('./$types').PageLoad} */
export const load = ({ params, data }) => {
	return {
		...data
	};
};

// javascript intended to run before the page loads
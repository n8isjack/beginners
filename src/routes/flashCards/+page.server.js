import { angelines } from './angeline_tests.server.js';
import { heathers } from './heather_tests.server.js';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ params }) => {
	// this javascript runs only on the server side

	// whatever gets returned here is made available to the browser
	return {
		flash_cards: [...angelines, ...heathers]
	};
};
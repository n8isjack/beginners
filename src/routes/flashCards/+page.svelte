<script>
	// this variable ("data") is a svelte one, it has the data from the server
	import { browser } from '$app/environment';

	/** @type {import('./$types').PageData} */
	export let data;

	if (browser) {
		console.log('data', data);
	}

	// area for javascript
</script>

<!-- HTML area -->

<style lang="postcss">
	/* CSS Area */
</style>
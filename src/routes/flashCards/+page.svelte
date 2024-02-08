<script>
	// this variable ("data") is a svelte one, it has the data from the server
	import { browser } from '$app/environment';

	/** @type {import('./$types').PageData} */
	export let data;
	let currentCardIndex = 0;
	$: currentCard = data.flash_cards[currentCardIndex];

	if (browser) {
		console.log('data', data);
	}
	// import boop from './boop.js';
	export let boopParams;
	let isBooped = false;

	// Is there a more Svelte-y way to do this?
	function setIsBooped(val) {
		isBooped = val;
	}

	function triggerBoop() {
		isBooped = true;
	}

	// area for javascript
</script>

<main>
	<div class="flash-card" on:click={() => currentCardIndex++}>
		<div class="values">
			{#each currentCard.setup as value}
				<div class="value">{value}</div>
			{/each}
		</div>
		<div class="test">{currentCard.test}</div>

		<div class="answer">
			<button class="btn variant-filled" on:click={() => button}>True</button>
			<button class="btn variant-filled" on:click={() => button}>False</button>
		</div>
	</div>
</main>

<!-- HTML area -->

<style lang="postcss">
	main {
		height: 100%;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: center;
		background-color: #b3b3cc;
	}
	.flash-card {
		/*border: solid thick black;*/
		background-color: #f0f0f5;
		color: black;
		text-align: center;
		font-size: 2em;
		line-height: 1.5em;
		width: 50%;
		height: 50%;
		box-shadow:
			rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
			rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
			rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
		border-radius: 1em;
	}
	.values {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		margin: 1em;
	}
	.value {
		margin: 0.5em;
	}
	.test {
		margin: 2em;
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
	}
	.answer {
		margin: 3.5em;
	}
	/* CSS Area */
</style>

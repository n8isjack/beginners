<script>
	// this variable ("data") is a svelte one, it has the data from the server
	import { browser } from '$app/environment';

	/** @type {import('./$types').PageData} */
	export let data;

	let currentCard = 0;
	$: card = data.flash_cards[currentCard];

	if (browser) {
		console.log('data', data);
	}

	// area for javascript
</script>

<!-- HTML area -->
<head> </head>
<main>
	<div class="flash-card">
		<div class="setup">
			{#each card.setup as value}
				<div>{value}</div>
			{/each}
		</div>
		<div class="test">
			{card.test}
		</div>
		<div class="answer">
			{#if card.correct === undefined}
				<button on:click|stopPropagation={() => (card.correct = card.answer === true)}>True</button>

				<button on:click|stopPropagation={() => (card.correct = card.answer === false)}
					>False</button
				>
			{/if}
			<div>
				{#if card.correct === true}
					<div class="bomb">You're the BOMB.com</div>
				{:else if card.correct === false}
					<div class="suck">You SUCK!</div>
				{/if}
			</div>
			{#if card.correct !== undefined}
				<button on:click={() => currentCard++}>Next</button>
			{/if}
		</div>
	</div>
</main>

<style lang="postcss">
	/*CSS area*/
	main {
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #003249;
		background-color: #003249;
		height: 100%;
	}

	.setup {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-around;
	}

	.test {
		font-size: 25px;
		margin-top: 25px;
		margin-bottom: 15px;
	}

	.answer {
	}

	button {
		background-color: #cedade;
		border: solid 2px #007ea7;
		box-shadow: 0px 0px 2px #ffbc42;
		border-radius: 12px;
		font-size: 18px;
		margin: 20px;
		height: 40px;
		width: 100px;
	}

	button:hover {
		cursor: pointer;
	}

	button:active {
		transform: translatey(-3px);
	}

	.bomb {
		color: #49be25;
		font-size: 20px;
	}

	.suck {
		color: red;
		font-size: 20px;
	}

	.flash-card {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 2em;
		border: solid 6px #007ea7;
		background-color: #f3f6f7;
		min-height: 350px;
		min-width: 500px;
		border-radius: 16px;
		box-shadow: 0px 0px 5px #ffbc42;
		/*box-shadow: 2px 2px 2px #007ea7;*/
		font-size: 15px;
		text-align: center;
		line-height: 2;
		font-family: 'Lexend', sans-serif;
	}

	/*? write a functions to when we click on the flash card we get the answer*/
</style>

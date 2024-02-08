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
<head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Lexend:wght@700;800;900&display=swap"
		rel="stylesheet"
	/>
	/>
</head>
<main>
	{#each data.flash_cards as card}
		<div class="flash-card">
			{#each card.setup as value}
				<div>{value}</div>
			{/each}
			{card.test}
		</div>
	{/each}
</main>

<style lang="postcss">
	/*CSS area*/
	main {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		align-items: center;
		color: #414c76;
		background-color: #f2f3f8;
	}
	.flash-card {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 2em;
		border: solid 2px #4e598c;
		background-color: #f9c98b;
		height: 350px;
		width: 230px;
		border-radius: 8px;
		box-shadow: 2px 2px 4px #4e598c;
		font-size: 18px;
		padding-left: 35px;
		padding-right: 35px;
		text-align: center;
		/*text-space: 10;*/
		line-height: 2;
		font-family: 'Lexend', sans-serif;
	}
	.flash-card:hover {
		cursor: pointer;
	}
	.flash-card:active {
		transform: translatey(-3px);
	}

	/*? write a functions to when we click on the flash card we get the answer*/
</style>

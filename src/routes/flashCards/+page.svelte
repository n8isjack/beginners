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
			<button
				class="glow-on-hover"
				type="button"
				on:click|stopPropagation={() => (currentCard.correct = currentCard.answer === true)}
				>True</button
			>
			<button
				class="glow-on-hover"
				type="button"
				on:click|stopPropagation={() => (currentCard.correct = currentCard.answer === false)}
				>False</button
			>
			{#if currentCard.correct === true}
				<div class="correct">Got it!!</div>
			{:else if currentCard.correct === false}
				<div class="suck">OOPS!!!!</div>
			{/if}
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
		font-family: impact;
	}
	.value {
		margin: 0.5em;
		font-family: courier;
	}
	.test {
		margin: 2em;
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		font-family: impact;
	}
	.answer {
		margin: 3.5em;
		border: solid black;
		padding: 0.5em;
	}
	button {
		margin: 1em;
	}
	.glow-on-hover {
		width: 220px;
		height: 50px;
		border: none;
		outline: none;
		color: #fff;
		background: #111;
		cursor: pointer;
		position: relative;
		z-index: 0;
		border-radius: 10px;
	}
	.glow-on-hover:before {
		content: '';
		background: linear-gradient(
			45deg,
			#ff0000,
			#ff7300,
			#fffb00,
			#48ff00,
			#00ffd5,
			#002bff,
			#7a00ff,
			#ff00c8,
			#ff0000
		);
		position: absolute;
		top: -2px;
		left: -2px;
		background-size: 400%;
		z-index: -1;
		filter: blur(5px);
		width: calc(100% + 4px);
		height: calc(100% + 4px);
		animation: glowing 20s linear infinite;
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
		border-radius: 10px;
	}

	.glow-on-hover:active {
		color: #000;
	}

	.glow-on-hover:active:after {
		background: transparent;
	}

	.glow-on-hover:hover:before {
		opacity: 1;
	}

	.glow-on-hover:after {
		z-index: -1;
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background: #111;
		left: 0;
		top: 0;
		border-radius: 10px;
	}

	@keyframes glowing {
		0% {
			background-position: 0 0;
		}
		50% {
			background-position: 400% 0;
		}
		100% {
			background-position: 0 0;
		}
	}
	.correct {
	}
	.suck {
	}
	/* CSS Area */
</style>

<script>
	import { challenge1 } from '../work/round8.js';

	let sampleArrays = () => {
		return [
			[168, -42, 88, 13, -34, -106, 182, -153],
			[98, -51, 134, -74, -177, 155, 142, -17, -184],
			[33, -118, 76, 191, -174, 116, -40, -6, 72],
			[-29, 153, 76, -114, 7, -99, 195, -58, 33]
		];
	};
	let data = sampleArrays();

	let challenges = [{ title: 'Challenge 1' }];
</script>

<header class="flex flex-col justify-center items-center">
	<h1 class="text-3xl mb-8">Round 8</h1>
	Your functions will be tested using these data inputs:
	<div class="w-[600px]">
		{#each data as row}
			<div class="w-full font-mono text-blue-500 flex flex-row justify-between items-center">
				[
				{#each row as val}
					<div class="w-96">{val},</div>
				{/each}
				]
			</div>
		{/each}
	</div>
</header>
<main>
	<section>...stuff</section>
</main>
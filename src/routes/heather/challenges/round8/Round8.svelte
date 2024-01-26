<script>
	import { challenge1, challenge2, challenge3, challenge4 } from './round8.js';

	let data = [
		[168, -42, 88, 13, -34, -106, 182, -153],
		[98, -51, 134, -74, -177, 155, 142, -17, -184],
		[33, -118, 76, 191, -174, 116, -40, -6, 72],
		[-29, 153, 76, -114, 7, -99, 195, -58, 33]
	];
	let answers = [-83.75, -100.6, -84.5, -75];

	let challenges = [
		[challenge1, 'Get the average negative value with a standard For-Loop'],
		[challenge2, 'Get the average negative value with a For-In Loop'],
		[challenge3, 'Get the average negative value with a For-Of Loop'],
		[challenge4, 'Get the average negative value with a [].filter() method']
	];
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
<main class="flex flex-col justify-start items-center mt-8">
	<div class="w-[500px]">
		{#each challenges as [fn, title], c}
			<section class="mt-8 flex flex-col justify-start items-start">
				<div>Challenge {c + 1}</div>
				<p>{title}</p>
				<table>
					<tr>
						<th>Answer</th>
						<th>Your Answer</th>
					</tr>

					{#each data as row, i}
						{@const yours = fn(row)}
						<tr>
							<td>{answers[i]}</td>
							<td
								class:correct={answers[i] === yours}
								class:wrong={yours !== '-' && yours !== answers[i]}>{yours}</td
							>
						</tr>
					{/each}
				</table>
			</section>
		{/each}
	</div>
</main>

<style lang="postcss">
	table {
		@apply border-collapse;
		th {
			@apply px-4 py-2 border border-slate-200 bg-slate-600;
		}
		td {
			@apply text-center;
			color: white;

			&.correct {
				@apply border border-lime-700 bg-lime-200 text-lime-700;
			}

			&.wrong {
				@apply border border-amber-700 bg-amber-200 text-amber-700;
			}
		}
	}
</style>
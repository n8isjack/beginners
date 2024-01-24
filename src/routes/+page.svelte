<script>
    import driving from '$lib/images/ang_heather_driving.jpg';
    let links = ['angeline', 'heather'];
</script>

<div class="container h-full mx-auto flex justify-center items-center">
    <div class="space-y-10 text-center flex flex-col items-center">
        <h2 class="h2">Welcome to Svelte!</h2>
        <figure>
            <section class="img-bg" />

            <img src="{driving}" alt="girls_driving"/>
        </figure>

        <div class="flex justify-center space-x-2">
            {#each links as name}
            <a
                    class="btn variant-filled capitalize"
                    href="/{name}"
                    rel="noreferrer"
            >
                {name}
            </a>
                {/each}
        </div>
        <div class="space-y-2">

        </div>
    </div>
</div>

<style lang="postcss">

    figure img,
    .img-bg {
        @apply w-64 h-64 md:w-80 md:h-80;
        object-fit: cover;
    }
    .img-bg {
        @apply absolute z-[-1] rounded-full blur-[50px] transition-all;
        animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
        glow 5s linear infinite;
    }
    @keyframes glow {
        0% {
            @apply bg-primary-400/50;
        }
        33% {
            @apply bg-secondary-400/50;
        }
        66% {
            @apply bg-tertiary-400/50;
        }
        100% {
            @apply bg-primary-400/50;
        }
    }
    @keyframes pulse {
        50% {
            transform: scale(1.5);
        }
    }
</style>
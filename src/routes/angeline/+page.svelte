<script>
    let myName = "Angeline";




</script>

<main>
    <h1>Welcome to <span class="name">{myName}</span>'s page!</h1>

    <br /><br /><br />
    <input class="text-black" type="text" bind:value={myName} />
</main>

<style>
    main {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        font-size: 3em;

    }
    h1 {
        font-size: 1.5em;
        margin-bottom: 1em;
    }
</style>
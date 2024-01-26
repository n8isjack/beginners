<script>
	let productTypes = [
		{
			src: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/group-of-sea-shells-on-beach-nine-ok.jpg',
			title: 'shells'
		},
		{
			src: 'https://i.etsystatic.com/24409573/r/il/897c3d/3144981285/il_570xN.3144981285_j5mp.jpg',
			title: 'sea urchins'
		},
		{
			src: 'https://discoverypit.com/wp-content/uploads/2023/04/find-sand-dollars-in-hawaii-1024x683.jpg',
			title: 'sand dollars'
		},
		{
			src: 'https://img.freepik.com/premium-photo/summer-2015-with-star-fish-your-holiday-activity_255544-633.jpg',
			title: 'starfish'
		}
	];
	/*
    let cartCountText = document.querySelector("#cart-count");
    let shellsBtn = document.querySelector("#shells-btn");
    let seaUrchinBtn = document.querySelector("#sea-urchin-btn");
    let sandDollarBtn = document.querySelector("#sand-dollar-btn");
    let starfishBtn = document.querySelector("#starfish-btn");
    let footer = document.querySelector("footer");
    let signUp = document.querySelector("#newsletterSignUp");
    let emailInput = document.querySelector("#input");
    let subscribeBtn = document.querySelector("#subscribe");
    let count = 0;

    function addToCart() {
        count += 1;

        if (count === 1) {
            cartCountText.textContent = "1 item";
        } else {
            cartCountText.textContent = count + " items";
        }
    }

    function subscribeYourEmail() {
        let confirmationText = document.createElement("p");
        confirmationText.textContent =
            "Thank you for subscribing, " + emailInput.value;
        signUp.remove();

        footer.appendChild(confirmationText);
    }

    shellsBtn.addEventListener("click", addToCart);
    seaUrchinBtn.addEventListener("click", addToCart);
    sandDollarBtn.addEventListener("click", addToCart);
    starfishBtn.addEventListener("click", addToCart);
    subscribeBtn.addEventListener("click", subscribeYourEmail);*/
</script>

<header>
	<div class="title">
		<img src="https://pbs.twimg.com/media/F-63v90WYAA2Tfa.png" alt="sea shell logo" class="shell" />
		<p class="title">On the Shore</p>
	</div>
	<nav>
		<a class="navLink">Shells</a>
		<a class="navLink">Sea Urchins</a>
		<a class="navLink">Sand Dollars</a>
		<a class="navLink">Starfish</a>
	</nav>
</header>

<section class="cart-section">
	<p>Cart: <span id="cart-count" class="empty">empty</span></p>
</section>

<main>
	{#each productTypes as { src, title }}
		<div class="shell-card">
			<img class="product-image" {src} alt={title} />
			<div class="overlay">Click on image to zoom in</div>
			<h3>{title}</h3>
			<button id="shells-btn">buy</button>
		</div>
	{/each}
</main>

<footer>
	<section id="newsletterSignUp">
		<p>Subscribe to our newsletter</p>
		<input id="input" type="text" placeholder=" your email" />
		<button class="button" id="subscribe">Subscribe</button>
	</section>
</footer>

<style>
	* {
		font-family: 'Playpen Sans', cursive;
	}

	body {
		margin: 0;
		padding: 0;
	}

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 80px;
		background-color: #c9f0ff;
		color: #6b5e62;
		padding: 0 30px;
	}

	.title {
		display: flex;
		align-items: center;
		font-weight: 800;
		font-size: 40px;
		text-shadow: 1px 1px 3px #6b5e62;
	}

	.shell {
		height: 80px;
		margin-right: 10px;
		box-shadow: 1px -4px 13px #6b5e62;
		border-radius: 3px;
	}

	nav {
		display: flex;
		width: 380px;
		justify-content: space-between;
		align-items: center;
		font-weight: 600;
	}

	.navLink {
		color: #6b5e62;
	}

	.navLink:hover {
		text-shadow: 0 0 10px #6b5e62;
		cursor: pointer;
	}

	.navLink:active {
		transform: translatey(-1px);
	}
	.cart-section {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding-right: 30px;
		height: 35px;
		font-size: 14px;
		background-color: #d5cad6;
		color: #6b5e62;
		box-shadow: 2px 2px 10px 1px #6b5e62;
	}

	.empty {
		border-radius: 10px;
	}

	main {
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #efeff0;
		min-height: calc(100vh - 165px);
		box-shadow: 1px 1px 10px 1px #6b5e62 inset;
	}

	button {
		border: solid 2px #6b5e62;
		color: #6b5e62;
		border-radius: 10px;
		box-shadow: 1px 1px 5px 0 #6b5e62;
	}

	button:hover {
		color: #efeff0;
		background-color: #6b5e62;
		box-shadow: 0 0 12px #6b5e62;
		cursor: pointer;
	}

	button:active {
		transform: translatey(-1px);
	}

	.shell-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 350px;
		width: 230px;
		background-color: #c9f0ff;
		color: #6b5e62;
		font-size: 18px;
		border-radius: 10px;
		box-shadow: 1px 1px 5px #6b5e62;
	}

	.product-image {
		height: 180px;
		width: 180px;
		border-radius: 10px;
		object-fit: cover;
		box-shadow: 1px 1px 5px #6b5e62;
	}

	.product-image:hover {
		transition: transform 0.25s ease;
		cursor: zoom-in;
	}

	.product-image:active {
		transform: scale(1.8);
		cursor: zoom-out;
	}

	.overlay {
		position: absolute;
		bottom: 375px;
		background: rgb(255, 255, 255, 0.7);
		color: #6b5e62;
		width: 140px;
		transition: 0.25s ease;
		opacity: 0;
		font-size: 10px;
		padding: 2px;
		text-align: center;
		border-radius: 8px;
	}

	.overlay:hover {
		opacity: 1;
	}

	footer {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding-right: 30px;
		height: 50px;
		font-size: 14px;
		background-color: #d5cad6;
		color: #6b5e62;
		box-shadow: 1px 1px 10px 1px #6b5e62;
	}

	#newsletterSignUp {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 430px;
	}

	#input {
		border-radius: 10px;
		border: solid 2px #6b5e62;
	}
</style>

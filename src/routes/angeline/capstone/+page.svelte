<script>
	let cakes = [
		{
			src: 'https://livforcake.com/wp-content/uploads/2017/07/black-forest-cake-thumb.jpg',
			title: 'Black Forest Cake'
		},
		{
			src: 'https://www.homecookingadventure.com/wp-content/uploads/2022/01/winter_cake_main-500x423.jpg',
			title: 'Winter Christmas Cake'
		},
		{
			src: 'https://www.melskitchencafe.com/wp-content/uploads/2023/01/updated-lava-cakes7.jpg',
			title: 'Molten Lava Cake'
		},
		{
			src: 'https://alittlecake.com/wp-content/uploads/2022/04/Marble-Geode-Cake-.jpg',
			title: 'Marble Geode Tier Cake'
		},
		{
			src: 'https://smoor.in/cdn/shop/collections/Smoor_Web_6_2289_1024x1024.jpg?v=1680964908',
			title: 'Signature Chocolate Cake'
		},
		{
			src: 'https://manoharbikkaneri.com/wp-content/uploads/2021/05/Pine-apple-fancy-cake-1200x1401.jpeg',
			title: 'Pineapple Twirl Cake'
		}
	];
	let macarons = [
		{
			src: 'https://i.etsystatic.com/17765268/r/il/4822b1/4560934625/il_1588xN.4560934625_khez.jpg',
			title: 'Valentine Asst Macarons'
		},
		{
			src: 'https://bitesbybianca.com/wp-content/uploads/2022/03/b-23-2.jpg',
			title: 'Bear Chocolate Macarons'
		},
		{
			src: 'https://www.barleyandsage.com/wp-content/uploads/2021/10/pumpkin-spice-macarons-1200x1200-1.jpg',
			title: 'Pumpkin Spice Macarons'
		},
		{
			src: 'https://www.sweetandsavorybyshinee.com/wp-content/uploads/2022/08/Raspberry-Macarons-1.jpg',
			title: 'Raspberry Macarons'
		},
		{
			src: 'https://chelsweets.com/wp-content/uploads/2022/03/recipe-card-finished-strawberry-shortcake-macarons-that-have-been-dunked-in-white-chocolate-and-topped-with-strawberry-shortcake-crumble-768x1024.jpg.webp',
			title: 'Strawberry Shortcake Macarons'
		},
		{
			src: 'https://i0.wp.com/sugarandcloth.com/wp-content/uploads/2022/08/Galaxy-Macarons-13-500x500.jpg',
			title: 'Galaxy Macarons'
		},
		{
			src: 'https://www.flavormosaic.com/wp-content/uploads/2021/07/Apple-Pie-Macarons-Recipe.jpg',
			title: 'Apple Pie Macarons'
		},
		{
			src: 'https://bewitchingkitchen.files.wordpress.com/2021/01/manuka-honey-macarons1.jpg',
			title: 'Bee Happy Honey Macarons'
		},
		{
			src: 'https://everythingmarina.com/wp-content/uploads/2022/04/AZ3A5862-683x1024.jpg',
			title: 'Flower Macarons'
		}
	];
	let pastries = [
		{
			src: 'https://insanelygoodrecipes.com/wp-content/uploads/2022/08/Sweet-Homemade-Mini-Tarts-with_Fresh-Strawberries-and-Cream-Frosting.jpg',
			title: 'White Chocolate Raspberry Mini Tarts'
		},
		{
			src: 'https://images.squarespace-cdn.com/content/v1/5e484ab628c78d6f7e602d73/4836955f-ee2d-4dad-8bb5-a60920d048df/pain-aux-raisins.jpg',
			title: 'Pains Aux Raisins'
		},
		{
			src: 'https://www.foodandwine.com/thmb/dCBqp4GlxvlH0YoWU-KbxmRynFU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/miso-caramel-apple-danish-FT-RECIPE0920-005dcb017b23462383ea77c4549b1a44.jpg',
			title: 'Caramel Apple Danish'
		},
		{
			src: 'https://www.thespruceeats.com/thmb/JFnuCS7F3h_DKFXEhKNf0lzBGtM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mille-feuille-homemade-napoleon-recipe-2394442-hero-01-aa2f20cd8a0f464ebfbe059927007b10.jpg',
			title: 'Mille-Feuille'
		},
		{
			src: 'https://www.bonpastry.com/cdn/shop/articles/cameron-barnes-VV5ddhE5kz0-unsplash_1024x684.jpg?v=1595556582',
			title: 'French Croissant'
		},
		{
			src: 'https://www.pepperidgefarm.com/wp-content/uploads/2017/03/puffpastry-bg.png',
			title: 'Strawberry Puff Pastry'
		}
	];
	let chocolates = [
		{
			src: 'https://www.debrand.com/wp-content/uploads/2022/07/Conn_Cover.jpg',
			title: 'DeBrand Fine Chocolates'
		},
		{
			src: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/fortwayne/VFW4_F1F0186B-60AF-4038-BA7F0D6BFA33B7F3_ed329c44-5b8e-4c6d-913eb5c708a297b1.jpg',
			title: 'Fini Chocolates'
		},
		{
			src: 'https://media.istockphoto.com/id/168413702/photo/luxury-milk-and-dark-chocolate-truffles.jpg?s=612x612&w=0&k=20&c=zjUmD4DJcb2W5NqXKVhtRO_V1i3gW_Tlp1TY-Nu2YmA=',
			title: 'Luxury Tabitha Chocolates'
		},
		{
			src: 'https://healthnewshub.org/wp-content/uploads/2023/02/Chocolate.jpg',
			title: 'Valentine Chocolates'
		},
		{
			src: 'https://www.dantachocolate.com/wp-content/uploads/c36-web.jpg',
			title: 'Tienda Danta Chocolates'
		},
		{
			src: "https://images.contentstack.io/v3/assets/blt22a4279bb3e9cfce/blt9057ed66899575eb/6079d3f8abf51d79f437fe3e/sharis-berries-gourmet-drizzled-mobile-min_(2).jpg?quality=50&width=undefined&height=undefined&auto=webp&optimize={'medium'}",
			title: 'Chocolate Covered Strawberrys'
		},
		{
			src: 'https://www.whitakerschocolates.com/images/assorted-chocolate-truffles-catering-pack-p597-281_image.jpg',
			title: 'Truffles '
		}
	];
	let sections = [cakes, macarons, pastries, chocolates];
	/*
        var cartCount = document.querySelector(".cart-count");
        var buttons = document.querySelectorAll("main button");
        var count = 0;
        for (let button of buttons) {
            button.addEventListener("click", (target) => {
                count++;
                cartCount.innerText = count;
            });
        }
        var signUpForm = document.querySelector(".email-sign-up");
        var emailInput = document.querySelector("footer input");
        var signUpBtn = document.querySelector(".sign-up");
        var footer = document.querySelector("footer");

        function emailSubmitHandler() {
            var confirmationMessage = document.createElement("p");
            confirmationMessage.textContent =
                "You are now stress free!!!," + emailInput.value;
            signUpForm.remove();
            footer.appendChild(confirmationMessage);
        }
        signUpBtn.addEventListener("click", emailSubmitHandler);

    */
</script>

<header>
	<div class="logo">
		<img
			src="https://i.pinimg.com/736x/60/e0/89/60e08945bf9414e2a770ff7b5133240f.jpg"
			alt="cupcake"
		/>

		<div class="name">Tabitha's Bakery</div>
		<div class="cart-counter">
			<svg viewBox="0 0 576 512" width="70" title="shopping-cart">
				<path
					d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
				/>
			</svg>
			<div class="cart-count">0</div>
		</div>
	</div>
	<nav>
		<a href="#cakes" class="nav-link">Cakes</a>
		<a href="#macarons" class="nav-link">Macarons</a>
		<a href="#pastries" class="nav-link">Pastries</a>
		<a href="#chocolate" class="nav-link">Chocolate</a>
	</nav>
</header>

<main>
	<section>
		<h3 class="quote">"Stressed spelled backward is desserts. <br />Coincidence? I think not."</h3>
	</section>
	{#each sections as section}
		<section class="menu">
			{#each section as { src, title }}
				<div class="showcase">
					<img {src} alt={title} />
					<div>
						<p>{title}</p>
						<button>
							<svg viewBox="0 0 576 512" width="100" title="cart-plus">
								<path
									d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM408 168h-48v-40c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v40h-48c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h48v40c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-40h48c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16z"
								/>
							</svg>
						</button>
					</div>
				</div>
			{/each}
		</section>
	{/each}
</main>

<footer>
	<p>Locations</p>
	<p>About Us</p>
	<section class="email-sign-up">
		<input type="text" placeholder="your email" />
		<button class="sign-up">Sign-up</button>
	</section>
</footer>

<style>
	body {
		background-color: #dcdcdc;
		padding: 0;
		margin: 0;
	}

	div.logo > div {
		font-family: 'Montez', cursive;
		font-size: 80px;
		color: #3b00a6;
		background-color: #452c63;
		color: white;
	}

	div.logo {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 15px;
	}

	div.logo img {
		height: 100px;
		border-radius: 20px;
	}

	.cart-counter {
		position: relative;
	}

	.cart-count {
		position: absolute;
		top: 10px;
		left: 0px;
		width: 100%;
		text-align: center;
		font-size: 40px;
		color: black;
	}

	header {
		padding: 10px;
		background-color: #452c63;
	}

	header a {
		text-decoration: none;
		color: white;
	}

	nav {
		border-bottom: 5px solid white;
		display: flex;
		font-family: 'Montez', cursive;
		justify-content: space-around;
		font-size: 35px;
		color: white;
	}

	nav a:hover {
		color: #ff00ff;
	}

	.quote {
		font-size: 60px;
		font-family: 'Amatic SC', sans-serif;
		text-align: center;
		padding: 10px;
		color: #452c63;

		margin: 0px;
		transition: 5s;
		animation: angeline 5s infinite;
	}

	div.showcase {
		margin: 16px;
		display: flex;
		width: 200px;
		flex-flow: column nowrap;
		font-family: 'Concert One', sans-serif;
	}

	div.showcase img {
		height: 200px;
		width: 200px;
		object-fit: cover;
	}

	div.showcase > div {
		background-color: #eee;
		display: flex;
		flex-flow: nowrap;
		justify-content: space-between;
		padding-left: 10px;
		height: 70px;
	}

	svg {
		fill: white;
	}

	section.menu {
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
		overflow-x: auto;
		width: 100%;
		filter: drop-shadow(2px -1px 4px #000000);
	}

	section.menu > div:hover {
		transform: scale(1.2, 1.2);
	}

	footer {
		background-color: #2f086d;
		color: white;
		height: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20px;
	}

	.email-sign-up {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	button {
		cursor: pointer;
		color: red;
		border: none;
	}

	button svg {
		width: 30px;
		fill: green;
	}

	button:hover {
		background-color: #452c63;
	}

	button:hover svg {
		fill: #fff;
	}

	@keyframes angeline {
		0% {
			filter: drop-shadow(0px 0px 21px #ab83ec);
		}
		20% {
			filter: drop-shadow(0px 0px 15px #1200a9);
		}
		35% {
			filter: drop-shadow(0px 0px 15px #7bb2ff);
		}
		50% {
			filter: drop-shadow(0px 0px 20px #f3ff7b);
		}
		65% {
			filter: drop-shadow(0px 0px 15px #310971);
		}
		80% {
			filter: drop-shadow(0px 0px 15px #acb000);
		}
		100% {
			filter: drop-shadow(0px 0px 21px #177600);
		}
	}
</style>
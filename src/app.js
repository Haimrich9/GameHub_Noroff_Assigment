const createHeader = () => {
	let header = document.querySelector("header");

	header.innerHTML = `
        	<div class="navbar">
				<img src="img/GameHub_Logo.png" alt="logo" class="logo" />
				<div class="search_bar"></div>
				<div class="fav"></div>
				<div class="cart"></div>
				<div class="menu"></div>
			</div>
					<nav class="nav"></nav>
    `;
};

const createNav = () => {
	let nav = document.querySelector("nav");

	nav.innerHTML = `
            <div class="grid_container">
				<a href="index.html#header" class="grid_item">Home</a>
				<a href="index.html#newGames" class="grid_item">New Games</a>
				<a href="index.html#cyberpunk" class="grid_item">Cyberpunk</a>
				<a href="index.html#about" class="grid_item">About</a>
				<a href="index.html#contact" class="grid_item">Contact</a>
			</div>
    `;
};

const createFooter = () => {
	let footer = document.querySelector("footer");

	footer.innerHTML = `
        
    `;
};

createHeader();
createNav();
createFooter();

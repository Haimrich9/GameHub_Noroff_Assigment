let url = "https://v2.api.noroff.dev/gamehub";

// Function to show a loading message
function showLoading(container) {
	container.innerHTML = "<p>Loading...</p>";
}

// Function to hide the loading message
function hideLoading(container) {
	container.innerHTML = "";
}

async function loadGames(filterByGenre = "") {
	const productContainer = document.querySelector(".product_container");

	// Show loading message
	showLoading(productContainer);

	try {
		const response = await fetch(url);
		const data = await response.json();

		// Clear the loading message
		hideLoading(productContainer);

		// Filter games by genre if a filter is applied
		const filteredGames = filterByGenre && filterByGenre !== "all" ? data.data.filter((game) => game.genre === filterByGenre) : data.data;

		// Loop through the filtered data and create a card for each game
		filteredGames.forEach((game) => {
			const cardHTML = `
				<div class="card">
					<a href="../product/?id=${game.id}">
					<img class="grid_item" src="${game.image.url}" alt="super duper game cover" />
					</a>
				</div>
			`;
			productContainer.innerHTML += cardHTML;
		});
	} catch (error) {
		// Show error message if fetch fails
		productContainer.innerHTML = "<p>Error loading games. Please try again later.</p>";
		console.error("Error fetching games:", error);
	}
}

// Event listener for the dropdown filter
document.getElementById("genreFilter").addEventListener("change", (event) => {
	const selectedGenre = event.target.value;
	localStorage.setItem("selectedGenre", selectedGenre); // Save the selected genre to localStorage
	loadGames(selectedGenre); // Load games based on the selected genre
});

// On page reload, check localStorage for the selected genre and load games
document.addEventListener("DOMContentLoaded", () => {
	const savedGenre = localStorage.getItem("selectedGenre") || "all"; // Default to "all" if no genre is saved
	document.getElementById("genreFilter").value = savedGenre; // Set the dropdown to the saved genre
	loadGames(savedGenre); // Load games based on the saved genre
});

const createProduct = () => {
	let product_container = document.querySelector(".product_container");
	let link = "";
	product_container.innerHTML = `
        <div class="card">
            <a href="product.html">
            <img class="grid_item" src="${link}" alt="super duper game cover" />
            </a>
        </div>
     `;
};
createProduct();

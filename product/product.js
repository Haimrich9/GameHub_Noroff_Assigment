const product_page = document.querySelector(".product_page");
const apiUrl = "https://v2.api.noroff.dev/gamehub";
function addToCart() {
	// Check if the cart already exists in local storage
	let cart = JSON.parse(localStorage.getItem("cart")) || [];
	const params = new URLSearchParams(window.location.search);
	const id = params.get("id");
	const title = document.querySelector(".grid_item.desc h1").textContent;
	const price = document.querySelector(".grid_item.desc .price").textContent;

	// Check if the product is already in the cart
	if (cart.some((item) => item.id === id)) {
		alert("Product is already in the cart.");
	} else {
		cart.push({ id: id, title: title, price: price });
		localStorage.setItem("cart", JSON.stringify(cart));
		alert("Product added to cart!");
	}
}
function removeFromCart() {
	// Check if the cart already exists in local storage
	let cart = JSON.parse(localStorage.getItem("cart")) || [];
	const params = new URLSearchParams(window.location.search);
	const id = params.get("id");
	// Check if the product is already in the cart
	if (cart.some((item) => item.id === id)) {
		cart = cart.filter((item) => item.id !== id);
		localStorage.setItem("cart", JSON.stringify(cart));
		alert("Product removed from cart!");
	} else {
		alert("Product is not in the cart.");
	}
}
async function fetchAndCreateProduct() {
	try {
		const params = new URLSearchParams(window.location.search);
		const id = params.get("id");
		if (!id) {
			container.textContent = "No product found";
			return;
		}
		const response = await fetch(`${apiUrl}/${id}`);
		const data = await response.json();
		product_page.innerHTML = ""; // Clear the container before appending
		product_page.innerHTML += `

    

			<section class="grid_container">
				<div class="grid_item">
					<img class="main_img" src="${data.data.image.url}" alt="${data.data.image.alt}" />
				</div>
				<div class="grid_item desc">
					<h1>${data.data.title}</h1>
					<span class="price">$${data.data.price}</span>
					<p>${data.data.description}</p>
					<a href="../checkout.html?id=${data.data.id}"><button class="buy_btn">Buy Now!</button></a>
                    <button class="addCart_btn buy_btn">Add to cart</button>
                    <button class="removeCart_btn buy_btn">Remove</button>
				</div>
			</section>
			   `;
		// Add event listener to the button after rendering
		const addCart = document.querySelector(".addCart_btn");
		const removeCart = document.querySelector(".removeCart_btn");
		addCart.addEventListener("click", addToCart);
		removeCart.addEventListener("click", removeFromCart);
	} catch (error) {
		console.error("Error fetching product data:", error);
		product_page.textContent = "Failed to load product data.";
	}
}
fetchAndCreateProduct();

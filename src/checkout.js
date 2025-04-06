const checkout = document.querySelector(".summary");
const total = document.querySelector(".total");
const apiUrl = "https://v2.api.noroff.dev/gamehub";
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Removed duplicate reference to the same DOM element

// Add event listener to the button after rendering

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
async function fetchAndCreateCart() {
	try {
		if (cart.length === 0) {
			checkout.innerHTML = "<p>Your cart is empty</p>";
			return;
		}
		console.log(cart);
		checkout.innerHTML = ""; // Clear the container before appending
		let totalPrice = 0; // Initialize total price outside the loop
		for (const item of cart) {
			const response = await fetch(`${apiUrl}/${item.id}`);
			const data = await response.json();
			checkout.innerHTML += `
				<div class="item">
					<img src="${data.data.image.url}" alt="${data.data.image.alt}" />
					<h3>${data.data.title}</h3>
					<span>${data.data.price}</span>
					<p>${data.data.description}</p>
					<button class="removeCart_btn buy_btn" data-id="${item.id}">Remove</button>
				</div>
			`;
			const quantity = item.quantity || 1; // Default to 1 if quantity is undefined
			totalPrice += quantity * data.data.price; // Accumulate total price
		}
		total.innerHTML = ` 				
			<h3>Total: $${totalPrice.toFixed(2)}</h3>
			<a href="/checkout/checkout_success">Pay Now</a>`;
		const removeButtons = document.querySelectorAll(".removeCart_btn");
		removeButtons.forEach((button) => {
			button.addEventListener("click", (event) => {
				const itemId = event.target.getAttribute("data-id");
				cart = cart.filter((cartItem) => cartItem.id !== itemId);
				localStorage.setItem("cart", JSON.stringify(cart));
				fetchAndCreateCart(); // Refresh the cart display
			});
		});
	} catch (error) {
		console.log("Error fetching cart items:", error);
	}
}
fetchAndCreateCart();

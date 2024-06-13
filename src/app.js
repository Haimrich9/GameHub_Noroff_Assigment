const createHeader = () => {
	let header = document.querySelector("header");

	header.innerHTML = `
        	<ul class="navbar">
			<li><img src="img/GameHub_Logo.png" class="logo" alt="logo"/></li>
				<li class="search_bar"></li>
				<li class="star">0</li>
				<li class="cart"></li>
				<li class="menu"></li>
			</ul>
			<nav class="nav"></nav>
    `;
};

const createNav = () => {
	let nav = document.querySelector("nav");

	nav.innerHTML = `
            <div class="grid_container">
				<a href="index.html#header" class="grid_item">Home</a>
				<a href="#newGames" class="grid_item">New Games</a>
				<a href="#cyberpunk" class="grid_item">Cyberpunk</a>
				<a href="#about" class="grid_item">About</a>
				<a href="#contact" class="grid_item">Contact</a>
			</div>
    `;
};

const createFooter = () => {
	let footer = document.querySelector("footer");

	footer.innerHTML = `
        
    `;
};

/* Talitha - Code Help 

window.addEventListener("scroll", () => {
	const gridNav = document.querySelector("div.grid_container");
	console.log(gridNav);
	if (window.scrollY > 50) {
		gridNav.classList.add("scrolled");
	} else {
		gridNav.classList.remove("scrolled");
	}
}); 
*/
/*window.addEventListener("click", () => {
	// Select the element with the class "star"
	const starElement = document.querySelector(".star");

	// Get the current text content and convert it to an integer
	const currentNumber = parseInt(starElement.textContent, 10);

	// Increment the number
	const newNumber = currentNumber + 1;

	// Update the element's text content with the new number
	starElement.textContent = newNumber;

	// Log the results
	console.log("Button pressed");
	console.log(newNumber);
}); */

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
	button.addEventListener("click", (event) => {
		const star = document.querySelector(".star");
		const starNum = parseInt(star.textContent, 10);
		const buttonClass = event.target;
		if (buttonClass.classList.contains("add")) {
			const starUpdate = starNum + 1;
			star.innerHTML = starUpdate;
			buttonClass.classList.remove("add");
		} else {
			const starUpdate = starNum - 1;
			star.innerHTML = starUpdate;
			buttonClass.classList.add("add");
		}
	});
});

window.addEventListener("scroll", () => {
	let headerHight = document.querySelector(".navbar").offsetHeight; /* Finds Height of .navbar */
	const headerSticky = document.querySelector("header");

	if (window.scrollY > headerHight) {
		headerSticky.classList.add("headerSticky");
		headerSticky.style.transform = `translateY(-${headerHight}px)`;
	} else {
		headerSticky.classList.remove("headerSticky");
		headerSticky.style.transform = "";
	}
});

document.addEventListener("DOMContentLoaded", () => {
	createHeader();
	createNav();
	createFooter();
});

/* scroll to top when reload | Code from stackoverflow.com
|-- https://stackoverflow.com/questions/11486527/reload-browser-does-not-reset-page-to-top/11486546#11486546 -- 
v                                            																		*/

window.onload = function () {
	document.body.scrollTop = document.documentElement.scrollTop = 0;
};

/* -- https://www.w3schools.com/howto/howto_js_media_queries.asp --

function myFunction(x) {
  if (x.matches) { // If media query matches
    document.body.style.backgroundColor = "yellow";
  } else {
    document.body.style.backgroundColor = "pink";
  }
}

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 700px)")

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function() {
  myFunction(x);
});*/

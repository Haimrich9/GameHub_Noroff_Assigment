/* Used to reduce copy pasting elements that will be on all html pages.
	- This is not currently active
	- Will only be used during testing, final product will not use this
	  unless I find a bug fix for the scroll error
	- try making the html container of the code the height of the header, then it will know the hight before
	content is loaded, and maybe it will not scroll
*/
const createNavbar = () => {
	let navbar = document.querySelector(".navbar");

	navbar.innerHTML = `
			<li><img src="img/GameHub_Logo.png" class="logo grid_item" alt="logo" /></li>
			<li class="search_bar grid_item"></li>
			<li class="menu grid_item"></li>
			<li class="star grid_item">0</li>
			<li class="cart grid_item"><button class="reset">reset</button></li>
    `;
};
createNavbar();

const createNav = () => {
	let nav = document.querySelector("nav");

	nav.innerHTML = `

    `;
};

const createFooter = () => {
	let footer = document.querySelector("footer");

	footer.innerHTML = `
        
    `;
};

/* Local Storage Testing */
const reset_btn = document.querySelector(".reset");
const star = document.querySelector(".star");

function resetStar() {
	localStorage.setItem("starNum", "0");
	star.innerHTML = "0";
}

reset_btn.addEventListener("click", resetStar);

/* -- Star button functionality --
- Selects all buttons with class ".star_btn"
- Gets value of "starNum" from Local Storage
- Updates local value based on button clicks
*/
const star_btn = document.querySelectorAll(".star_btn");
star_btn.forEach((button) => {
	button.addEventListener("click", (event) => {
		let starNum = parseInt(localStorage.getItem("starNum"));
		// Initialize starNum if it's NaN -- from chatGPT
		if (isNaN(starNum)) {
			starNum = 0;
		} //

		const buttonClassTarget = event.target;
		if (buttonClassTarget.classList.contains("add")) {
			const starUpdate = starNum + 1;
			star.innerHTML = starUpdate;
			buttonClassTarget.classList.remove("add");
			localStorage.setItem("starNum", starUpdate);
		} else {
			const starUpdate = starNum - 1;
			star.innerHTML = starUpdate;
			buttonClassTarget.classList.add("add");

			localStorage.setItem("starNum", starUpdate);
		}
	});
});

/* -- Sticky Header functionality -- 
	- Activates on Scroll 
*/
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

/* -- On Load Function --
- Makes the page scroll to top on reload
- Gets "starNum" from Local Storage
- Updated HTML element "star" with starNum value from Local Storage
*/
window.onload = function () {
	document.body.scrollTop = document.documentElement.scrollTop = 0;
	const star = document.querySelector(".star");
	const starNum = parseInt(localStorage.getItem("starNum"));
	if (isNaN(starNum)) {
		starNum = 0;
	}
	star.innerHTML = starNum;
}; /* Code reference from stackoverflow.com  
	https://stackoverflow.com/questions/11486527/reload-browser-does-not-reset-page-to-top/11486546#11486546 */

/* ----------------------------------------------------- */

/* 
	document.addEventListener("DOMContentLoaded", () => {
		createHeader();
		createNav();
		createFooter();
	}); 
	*/

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
  myFunction(x);s
});*/

/*

-- Generate Random Number === $randomNum --

-- get $userinput ->  if $userinput === $randomNum then say "Correct" else "Wrong" --

-- if $userinput < $randomNum then say "Go higher!" else if $userinput > $randomNum say "Go lower!" --

*/

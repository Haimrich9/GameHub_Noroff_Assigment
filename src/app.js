/* -- Hamburger Menu functionality --
- Toggles the class "hide" on the star and cart buttons */

const createHeader = () => {
	let header = document.querySelector("header");
	console.log("test");
	header.innerHTML = `
				<a href="/"><img src="../../img/GameHub_Logo.png" class="logo grid_item" alt="logo" /></a>
			<ul class="navbar">
				<li><a href="../#" class="btn">Home</a></li>
				<li><a href="../new_games.html" class="btn">On Sale</a></li>
				<li><a href="../about.html" class="btn">About</a></li>
				<li><a href="../contact.html" class="btn">Contact</a></li>
				<li class="star btn">
					<svg width="50" height="45" viewBox="0 0 50 45" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M49.8079 16.9254C49.5897 16.285 49.1836 15.7153 48.6361 15.2819C48.0886 14.8484 47.4221 14.5687 46.713 14.4749L34.0856 12.7521L28.4382 2.00902C28.1217 1.40605 27.6318 0.898291 27.0238 0.543235C26.4159 0.188179 25.7142 0 24.9982 0C24.2823 0 23.5806 0.188179 22.9726 0.543235C22.3647 0.898291 21.8747 1.40605 21.5583 2.00902L15.9108 12.7521L3.28349 14.4749C2.57546 14.5719 1.91041 14.8528 1.36344 15.2859C0.816474 15.719 0.409369 16.287 0.188099 16.9259C-0.03317 17.5648 -0.0597903 18.249 0.111244 18.9013C0.282279 19.5536 0.644156 20.1481 1.15601 20.6175L10.2959 28.9805L8.13843 40.7868C8.01543 41.4495 8.09287 42.1312 8.36195 42.7546C8.63102 43.378 9.08095 43.9181 9.66059 44.3134C10.2402 44.7087 10.9264 44.9435 11.641 44.991C12.3557 45.0385 13.0702 44.8969 13.7034 44.5822L24.9982 39.0076L36.2931 44.5822C36.9266 44.894 37.6402 45.0334 38.3536 44.9846C39.067 44.9359 39.7516 44.7009 40.3303 44.3062C40.909 43.9115 41.3587 43.3729 41.6286 42.751C41.8986 42.1291 41.978 41.4488 41.858 40.7868L39.7006 28.9805L48.8404 20.6151C49.3549 20.1477 49.7185 19.5536 49.8896 18.9009C50.0607 18.2483 50.0324 17.5636 49.8079 16.9254Z"
							fill="#C3195D"
						/>

					</svg>
				</li>
				<li class="cart btn">
					<a href="../../checkout/checkout.html"
						><svg width="50" height="45" viewBox="0 0 50 45" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M42.1047 26.9966C42.677 26.9967 43.2338 26.8374 43.6906 26.5426C44.1474 26.2479 44.4794 25.8339 44.6362 25.3633L49.8993 9.6153C50.0109 9.2805 50.03 8.92813 49.9553 8.58592C49.8805 8.24371 49.7139 7.921 49.4685 7.64319C49.2232 7.36537 48.9057 7.14003 48.5412 6.98489C48.1766 6.82976 47.775 6.74906 47.3677 6.74915H12.5525L10.9867 1.67604C10.8385 1.19568 10.5085 0.770756 10.0482 0.467566C9.58785 0.164376 9.02309 -2.92798e-05 8.44199 3.91133e-09H2.63154C1.93361 3.91133e-09 1.26427 0.237023 0.770761 0.658927C0.277251 1.08083 0 1.65306 0 2.24972C0 2.84638 0.277251 3.4186 0.770761 3.84051C1.26427 4.26241 1.93361 4.49944 2.63154 4.49944H6.4157L7.99462 9.57255V9.59505V9.6153L13.2577 25.3633L15.2208 32.081C13.9212 32.5736 12.8013 33.3571 11.9794 34.3488C11.1574 35.3404 10.664 36.5034 10.5511 37.715C10.4382 38.9265 10.7101 40.1416 11.3381 41.232C11.966 42.3224 12.9267 43.2476 14.1188 43.9099C15.3108 44.5722 16.6899 44.947 18.1104 44.9948C19.531 45.0426 20.9403 44.7615 22.1895 44.1813C23.4387 43.6011 24.4814 42.7433 25.2077 41.6985C25.9339 40.6537 26.3166 39.4606 26.3154 38.2452C26.3067 37.4771 26.1429 36.716 25.8312 35.9955H32.0627C31.751 36.716 31.5872 37.4771 31.5785 38.2452C31.5785 39.5801 32.0415 40.8849 32.909 41.9948C33.7765 43.1047 35.0094 43.9698 36.452 44.4806C37.8945 44.9914 39.4819 45.1251 41.0133 44.8647C42.5447 44.6043 43.9514 43.9615 45.0555 43.0176C46.1595 42.0737 46.9114 40.8711 47.2161 39.5619C47.5207 38.2527 47.3643 36.8957 46.7668 35.6624C46.1693 34.4292 45.1574 33.3751 43.8591 32.6335C42.5609 31.8919 41.0345 31.4961 39.4731 31.4961H20.4734L19.1576 26.9966H42.1047ZM21.0523 38.2452C21.0523 38.6902 20.898 39.1251 20.6088 39.4951C20.3197 39.865 19.9087 40.1534 19.4278 40.3237C18.947 40.4939 18.4179 40.5385 17.9074 40.4517C17.3969 40.3649 16.928 40.1506 16.56 39.836C16.192 
								39.5214 15.9414 39.1205 15.8398 38.6841C15.7383 38.2477 15.7904 37.7954 15.9896 37.3843C16.1887 36.9732 16.526 36.6218 16.9588 36.3746C17.3915 36.1274 17.9003 35.9955 18.4208 35.9955C19.1187 35.9955 19.7881 36.2325 20.2816 36.6544C20.7751 37.0763 21.0523 37.6485 21.0523 38.2452ZM39.4731 40.4949C38.9527 40.4949 38.4439 40.363 38.0111 40.1158C37.5784 39.8686 37.2411 39.5172 37.0419 39.1061C36.8427 38.695 36.7906 38.2427 36.8921 37.8063C36.9937 37.3699 37.2443 36.969 37.6123 36.6544C37.9804 36.3398 38.4493 36.1255 38.9597 36.0387C39.4702 35.9519 39.9993 35.9965 40.4802 36.1667C40.961 36.337 41.372 36.6254 41.6612 36.9953C41.9503 37.3653 42.1047 37.8003 42.1047 38.2452C42.1047 38.8419 41.8274 39.4141 41.3339 39.836C40.8404 40.2579 40.1711 40.4949 39.4731 40.4949Z"
								fill="#C3195D""
							/>
						</svg>
					</a>
				</li>
				<li class="menu btn">
					<svg width="50" height="45" viewBox="0 0 50 45" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M47.0588 5.95606L25 9.26498L2.94118 5.95606C2.16113 5.95606 1.41303 5.6423 0.861451 5.08381C0.309874 4.52532 0 3.76785 0 2.97803C0 2.18821 0.309874 1.43073 0.861451 0.872245C1.41303 0.313756 2.16113 0 2.94118 0H25H47.0588C47.8389 0 48.587 0.313756 49.1386 0.872245C49.6901 1.43073 50 2.18821 50 2.97803C50 3.76785 49.6901 4.52532 49.1386 5.08381C48.587 5.6423 47.8389 5.95606 47.0588 5.95606Z"
							fill="#42092B"
						/>
						<path
							d="M47.0588 23.8242L25 27.1371L2.94118 23.8242C2.16113 23.8242 1.41303 23.5105 0.861451 22.952C0.309874 22.3935 0 21.636 0 20.8462C0 20.0564 0.309874 19.2989 0.861451 18.7404C1.41303 18.1819 2.16113 17.8682 2.94118 17.8682H25H47.0588C47.8389 17.8682 48.587 18.1819 49.1386 18.7404C49.6901 19.2989 50 20.0564 50 20.8462C50 21.636 49.6901 22.3935 49.1386 22.952C48.587 23.5105 47.8389 23.8242 47.0588 23.8242Z"
							fill="#42092B"
						/>
						<path
							d="M47.0588 41.6924L25 45L2.94118 41.6924C2.16113 41.6924 1.41303 41.3786 0.861451 40.8202C0.309874 40.2617 0 39.5042 0 38.7144C0 37.9245 0.309874 37.1671 0.861451 36.6086C1.41303 36.0501 2.16113 35.7363 2.94118 35.7363H25H47.0588C47.8389 35.7363 48.587 36.0501 49.1386 36.6086C49.6901 37.1671 50 37.9245 50 38.7144C50 39.5042 49.6901 40.2617 49.1386 40.8202C48.587 41.3786 47.8389 41.6924 47.0588 41.6924Z"
							fill="#42092B"
						/>
					</svg>
				</li>
			</ul>
     `;
};
const createFooter = () => {
	let footer = document.querySelector("footer");

	footer.innerHTML = `
         	<hr />
			<p>2024 FjellroDesign</p>
     `;
};
createHeader();
createFooter();
let menuBtn = document.querySelector(".menu");
menuBtn.addEventListener("click", hideMenu);
function hideMenu() {
	let nav = document.querySelector("nav");
	nav.classList.toggle("hide");
}

/* ---------
  The code below is experimental and commented out since it’s unfinished.
  Keeping it for future use.
  --------- */
let apiKey = "8ac3c186-0fba-48d5-bc32-fd2f82d128e7";

/* Local Storage Testing */
/*const reset_btn = document.querySelector(".reset");
const star = document.querySelector(".star");

function resetStar() {
	localStorage.setItem("starNum", "0");
	star.innerHTML = "0";
}

reset_btn.addEventListener("click", resetStar);*/

/* -- Star button functionality --
- Selects all buttons with class ".star_btn"
- Gets value of "starNum" from Local Storage
- Updates local value based on button clicks
*/
/*const star_btn = document.querySelectorAll(".star_btn");
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
*/

/* -- On Load Function --
- Makes the page scroll to top on reload
- Gets "starNum" from Local Storage
- Updated HTML element "star" with starNum value from Local Storage
*/
/*window.onload = function () {
	document.body.scrollTop = document.documentElement.scrollTop = 0;
	const star = document.querySelector(".star");
	const starNum = parseInt(localStorage.getItem("starNum"));
	if (isNaN(starNum)) {
		starNum = 0;
	}
	star.innerHTML = starNum;
}; */
/* Code reference from stackoverflow.com  
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

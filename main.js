//Burger menu

const navSlide = () => {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".nav-links");
	const navLinks = document.querySelectorAll(".nav-links li");

	burger.addEventListener("click", () => {
		//Toggle Nav
		nav.classList.toggle("nav-active");

		//Animate Links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${
					index / 7 + 1.5
				}s`;
			}
		});
		//BurgerAnimation
		burger.classList.toggle("toggle");
	});
};
navSlide();

$(".slider-one").owlCarousel({
	loop: true,
	nav: true,
	dots: true,
	margin: 30,

	responsive: {
		0: {
			items: 1,
		},
		1000: {
			items: 2,
		},
		1300: {
			items: 3,
		},
	},
});

$(".slider-two").owlCarousel({
	loop: true,
	nav: true,
	dots: true,
	margin: 30,

	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 1,
		},
		1000: {
			items: 1,
		},
	},
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;
	var nav = document.querySelector("nav");
	var logo = document.querySelector(".logo");
	var img = document.querySelector(".img");

	var target = document.querySelectorAll(".scroll");
	// console.log(`trenutna pozicija: ${currentScrollPos}`);
	var index = 0,
		length = target.length;
	for (index; index < length; index++) {
		var pos = window.pageYOffset * target[index].dataset.rate;
		var scale = (window.pageYOffset * target[index].dataset.scale) / 450;
		if (target[index].dataset.direction === "vertical") {
			target[index].style.transform = "translate3d(0px," + pos + "px, 0px)";
		} else {
			var posX = window.pageYOffset * target[index].dataset.ratex;
			var posY = window.pageYOffset * target[index].dataset.ratey;
			var scale = (window.pageYOffset * target[index].dataset.scale) / 450;

			target[index].style.transform =
				"translate3d(" + posX + "px, " + posY + "px, 0px )";

			target[index].style.transform = `scale(${scale})`;
		}
	}

	if (prevScrollpos < currentScrollPos) {
		nav.classList.add("gone");
		logo.classList.add("gone");
	} else {
		nav.classList.remove("gone");
		logo.classList.remove("gone");
	}
	prevScrollpos = currentScrollPos;
	if (currentScrollPos > 400) {
		img.classList.add("gone");
	} else {
		img.classList.remove("gone");
	}
};

var a = 0;

$(document).ready(function () {
	$(".bcta").click(function () {
		$(".delivery").toggleClass("animate");
	});
});

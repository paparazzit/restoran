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

$(".owl-carousel").owlCarousel({
	loop: true,
	nav: true,
	dots: true,
	margin: 30,

	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 2,
		},
		1000: {
			items: 3,
		},
	},
});

$(window).scroll(function () {
	if ($("#blog1").visible()) {
		$("body").addClass("newBG");
		$("#blog1").addClass("remove");
	} else {
		$("body").removeClass("newBG");
	}
});

new WOW().init();

$('html').niceScroll({

	cursorcolor: "#58916ee0",
	cursorwidth: "10px",
	cursorborderradius: 0,
	cursorborder: "2px solid #58916ee0"
});

// navbar
$(window).scroll(function () {
	if ($(this).scrollTop() >= 600) {
		$(".navbar").css({
			"background-color": "#666",
			"padding": "5px 0",
			"border-bottom": "4px solid #70eea0e0",
			"border-radius": "10px",
		})
	} else {
		$(".navbar").css({
			"background-color": "transparent",
			"padding": "10px 0",
			"border-bottom": "none"
		})
	}
});


$(".navbar li a").click(function () {
	$("html").animate({
		scrollTop: $($(this).attr("href")).offset().top - $("nav").innerHeight()
	}, 1000)

});

// end nav
// start header

$(".header").innerHeight($(window).height());
$(window).resize(function () {
	$(".header").innerHeight($(window).height())
});


$(".header .overlay").height($(window).height())
$(window).resize(function () {
	$(".header .overlay").height($(window).height())
});


$(".read").click(function () {
	$(".header,.reason,.about").fadeOut(800, function () {
		$(".more").fadeIn(800);
		$(".more").css({
			"background-image": "linear-gradient(45deg, rgb(206, 184, 188), rgb(219, 210, 199), rgb(225, 218, 208))",
			"margin": "0",
			"padding-top": "50px",
			"padding-bottom": "50px"


		})

	});
});
// end header
// start reason

$(".reason .first").click(function () {

	$(this).slideUp(500, function () {
		$(".reason .no").slideDown(1000);

	});
});

$(".reason .no").click(function () {
	$(this).slideToggle(500, function () {
		$(".reason .first").slideToggle(500)
	});
})

$(".reason .second").click(function () {
	$(this).slideUp(500, function () {
		$(".reason .nou").slideDown(1000);

	});
});
$(".reason .nou").click(function () {
	$(this).slideToggle(500, function () {
		$(".reason .second").slideToggle(500)
	});
})


// end reason


// start noun


$(".noun .content div:first").css("display", "block")

$(".noun h3").click(function () {
	$(this).next().slideToggle(500)
	$(".noun .content div").not($(this).next()).slideUp(500)
});

// end noun 


// start avoid

$(".avoid span").click(function () {

	$(this).slideUp(500, function () {
		$(".avoid .full").slideDown(1000);

	});
});

$(".avoid .full .con  p:first").css("display", "block")

$(".avoid .full .con h3").click(function () {
	$(this).next().slideToggle(500)
	$(".avoid .full .con p").not($(this).next()).slideUp(500)
});

// end avoid
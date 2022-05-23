new WOW().init();
// start rule

$(".rule  p span").click(function () {

	$(this).slideUp(500, function () {
		$(".rule .third").slideDown(1000);

	});
});

$(".rule .third").click(function () {

	$(this).slideUp(500, function () {
		$(".rule p span").slideDown(1000);

	});
});

// end rule

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
$(".num1").click(function () {
	$("#ESTESHARAT").fadeOut(800, function () {
		$("#answer1").fadeIn(800);
		$("#answer1").css({
			"background-image": "linear-gradient(45deg, rgb(206, 184, 188), rgb(219, 210, 199), rgb(225, 218, 208))",
			"margin": "0",
			"padding-top": "50px",
			"padding-bottom": "50px"


		})

	});
});

$(".num2").click(function () {
	$("#ESTESHARAT").fadeOut(800, function () {
		$("#answer2").fadeIn(800);
		$("#answer2").css({
			"background-image": "linear-gradient(45deg, rgb(206, 184, 188), rgb(219, 210, 199), rgb(225, 218, 208))",
			"margin": "0",
			"padding-top": "50px",
			"padding-bottom": "50px"


		})

	});
});

$(".num3").click(function () {
	$("#ESTESHARAT").fadeOut(800, function () {
		$("#answer3").fadeIn(800);
		$("#answer3").css({
			"background-image": "linear-gradient(45deg, rgb(206, 184, 188), rgb(219, 210, 199), rgb(225, 218, 208))",
			"margin": "0",
			"padding-top": "50px",
			"padding-bottom": "50px"


		})

	});
});

$(".num4").click(function () {
	$("#ESTESHARAT").fadeOut(800, function () {
		$("#answer4").fadeIn(800);
		$("#answer4").css({
			"background-image": "linear-gradient(45deg, rgb(206, 184, 188), rgb(219, 210, 199), rgb(225, 218, 208))",
			"margin": "0",
			"padding-top": "50px",
			"padding-bottom": "50px"


		})

	});
});

$(".num5").click(function () {
	$("#ESTESHARAT").fadeOut(800, function () {
		$("#answer5").fadeIn(800);
		$("#answer5").css({
			"background-image": "linear-gradient(45deg, rgb(206, 184, 188), rgb(219, 210, 199), rgb(225, 218, 208))",
			"margin": "0",
			"padding-top": "50px",
			"padding-bottom": "50px"


		})

	});
});

$(".num6").click(function () {
	$("#ESTESHARAT").fadeOut(800, function () {
		$("#answer6").fadeIn(800);
		$("#answer6").css({
			"background-image": "linear-gradient(45deg, rgb(206, 184, 188), rgb(219, 210, 199), rgb(225, 218, 208))",
			"margin": "0",
			"padding-top": "50px",
			"padding-bottom": "50px"


		})

	});
});

$(".num7").click(function () {
	$("#ESTESHARAT").fadeOut(800, function () {
		$("#answer7").fadeIn(800);
		$("#answer7").css({
			"background-image": "linear-gradient(45deg, rgb(206, 184, 188), rgb(219, 210, 199), rgb(225, 218, 208))",
			"margin": "0",
			"padding-top": "50px",
			"padding-bottom": "50px"


		})

	});
});

$(".num8").click(function () {
	$("#ESTESHARAT").fadeOut(800, function () {
		$("#answer8").fadeIn(800);
		$("#answer8").css({
			"background-image": "linear-gradient(45deg, rgb(206, 184, 188), rgb(219, 210, 199), rgb(225, 218, 208))",
			"margin": "0",
			"padding-top": "50px",
			"padding-bottom": "50px"


		})

	});
});

$(".num9").click(function () {
	$("#ESTESHARAT").fadeOut(800, function () {
		$("#answer9").fadeIn(800);
		$("#answer9").css({
			"background-image": "linear-gradient(45deg, rgb(206, 184, 188), rgb(219, 210, 199), rgb(225, 218, 208))",
			"margin": "0",
			"padding-top": "50px",
			"padding-bottom": "50px"


		})

	});
});

$(".num10").click(function () {
	$("#ESTESHARAT").fadeOut(800, function () {
		$("#answer10").fadeIn(800);
		$("#answer10").css({
			"background-image": "linear-gradient(45deg, rgb(206, 184, 188), rgb(219, 210, 199), rgb(225, 218, 208))",
			"margin": "0",
			"padding-top": "50px",
			"padding-bottom": "50px"


		})

	});
});

$(".num11").click(function () {
	$("#ESTESHARAT").fadeOut(800, function () {
		$("#answer11").fadeIn(800);
		$("#answer11").css({
			"background-image": "linear-gradient(45deg, rgb(206, 184, 188), rgb(219, 210, 199), rgb(225, 218, 208))",
			"margin": "0",
			"padding-top": "50px",
			"padding-bottom": "50px"


		})

	});
});

$(".num12").click(function () {
	$("#ESTESHARAT").fadeOut(800, function () {
		$("#answer12").fadeIn(800);
		$("#answer12").css({
			"background-image": "linear-gradient(45deg, rgb(206, 184, 188), rgb(219, 210, 199), rgb(225, 218, 208))",
			"margin": "0",
			"padding-top": "50px",
			"padding-bottom": "50px"


		})

	});
});

$(".num13").click(function () {
	$("#ESTESHARAT").fadeOut(800, function () {
		$("#answer13").fadeIn(800);
		$("#answer13").css({
			"background-image": "linear-gradient(45deg, rgb(206, 184, 188), rgb(219, 210, 199), rgb(225, 218, 208))",
			"margin": "0",
			"padding-top": "50px",
			"padding-bottom": "50px"


		})
	});
});

$(".num14").click(function () {
	$("#ESTESHARAT").fadeOut(800, function () {
		$("#answer14").fadeIn(800);
		$("#answer14").css({
			"background-image": "linear-gradient(45deg, rgb(206, 184, 188), rgb(219, 210, 199), rgb(225, 218, 208))",
			"margin": "0",
			"padding-top": "50px",
			"padding-bottom": "50px"


		})

	});
});

$(".num15").click(function () {
	$("#ESTESHARAT").fadeOut(800, function () {
		$("#answer15").fadeIn(800);
		$("#answer15").css({
			"background-image": "linear-gradient(45deg, rgb(206, 184, 188), rgb(219, 210, 199), rgb(225, 218, 208))",
			"margin": "0",
			"padding-top": "50px",
			"padding-bottom": "50px"


		})

	});
});
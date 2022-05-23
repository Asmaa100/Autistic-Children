


//  start navbar




$(".navbar li a").click(function () {
	$("html").animate({
		scrollTop: $($(this).attr("href")).offset().top - $("nav").innerHeight()
	}, 1000)

});
// end nav
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
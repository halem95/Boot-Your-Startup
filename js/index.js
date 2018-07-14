

$(document).ready(function () {

	//nicescroll plugin ...
	$("body").niceScroll({
		cursorcolor:"#007bff",
		cursorwidth:"4px",
		cursorborder:false,
		zindex:999999,
		cursorfixedheight: 70,
		smoothscroll: true, 

	});

	//counter up plugin ...
	$('.counter').counterUp({
	    delay: 10,
	    time: 3000
	});

	//owl carsoul ....
	$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
    	}
	});



	$("#home-header").height( $(window).height() );
	$("#home-header").width( $(window).width() );

	$("#home-header .carousel ").height( $(window).height() );

	$("#home-header .carousel .carousel-inner").height( $(window).height())

	$("#home-header .carousel .carousel-inner .carousel-item").height( $(window).height())


	$("#home-header .carousel .carousel-inner .carousel-item img").height( $(window).height())

	var carouselItemContentHeight = $(".carousel-item-content").innerHeight(),
		windowInnerHeight = $(window).innerHeight(),
		carouselItemContentTop = (windowInnerHeight - carouselItemContentHeight)/2;


		$(".carousel-item-content").css("top", carouselItemContentTop);


	var searchInputInnerHeight = $(".search-parent input").innerHeight(),
		searchInputTop = (windowInnerHeight - searchInputInnerHeight) / 2;

		$(".search-parent input").css("top", searchInputTop);



	$(window).resize(function () {

		$("#home-header").height( $(window).height() );

		$("#home-header").width( $(window).width() );

		$("#home-header .carousel ").height( $(window).height() );

		$("#home-header .carousel .carousel-inner").height( $(window).height())

		$("#home-header .carousel .carousel-inner .carousel-item").height( $(window).height())

		$("#home-header .carousel .carousel-inner .carousel-item img").height( $(window).height())


		var carouselItemContentHeight = $(".carousel-item-content").innerHeight(),
		windowInnerHeight = $(window).innerHeight(),
		carouselItemContentTop = (windowInnerHeight - carouselItemContentHeight)/2;


		$(".carousel-item-content").css("top", carouselItemContentTop);


		var searchInputInnerHeight = $(".search-parent input").innerHeight(),
		searchInputTop = (windowInnerHeight - searchInputInnerHeight) / 2;

		$(".search-parent input").css("top", searchInputTop);


	});



	$(window).scroll(function () {

		if( $(window).scrollTop() > 150) {

			$("nav").addClass("active-nav")


		} else {

			$("nav").removeClass("active-nav");

		}

	});


	$(".nav-item .fa-search").click(function () {

		$(this).fadeOut(300);

		$(".search-parent").fadeIn(800, function () {

			$("body").css("overflow","hidden");

			$(".search-parent input").focus();



		});

	});


	$(".search-parent").click(function (e) {

		e.stopPropagation();

		$(".search-parent input").focus();

	});


	$(".search-parent .fa-times").click(function () {

		$(".search-parent").fadeOut(800, function () {

			$(".nav-item .fa-search").fadeIn(100)

			$("body").css("overflow","auto")

		});

	});

	$(document).keydown(function (e) {

		if(e.keyCode == 27) {

			$(".search-parent").fadeOut(800, function () {

				$(".nav-item .fa-search").fadeIn(100)

				$("body").css("overflow","auto")

			});

		}

	});


	$("nav .navbar-toggler").click(function () {

		$(".navbar-collapse").fadeIn(500, function () {

			$("body").css("overflow","hidden")

		});

	});

	$(".navbar-collapse .nav-close").click(function () {

		$(".navbar-collapse").fadeOut(500, function () {

			$("body").css("overflow","auto")
			
		});

	});


	$(".navbar-collapse .nav-item a").click(function () {

		$(".navbar-collapse").fadeOut(500, function () {

			$("body").css("overflow","auto")
			
		});

	});

	$(document).keydown(function (e) {

		if(e.keyCode == 27) {

			$(".navbar-collapse").fadeOut(800, function () {

				$("body").css("overflow","auto")

			});

		}

	});


	$(window).scroll(function () {

		if ($(window).scrollTop() > 1200) {

			$("#scrollup").fadeIn(800)

		} else {


			$("#scrollup").fadeOut(800)
			
		}


	});


	$("#scrollup").click(function () {

		$("html, body").animate({

			scrollTop : 0

		}, 1000)

	});

	var placeHolder = '';

	$('#map-form .form-child input, #map-form .form-child textarea').each(function () {


		$(this).focus(function () {

			placeHolder = $(this).attr('placeholder');
			$(this).attr('placeholder', '');

		});


		$(this).blur(function () {

			$(this).attr('placeholder', placeHolder);

		});

	});

	var textAreaMaxLength = $('.form-child form textarea').attr('maxlength');

	$('.form-child .text-output').html('Remaining Characters Are <span>' + textAreaMaxLength + ' </span> Character');

	$('.form-child form textarea').keyup(function () {

		var textareaValLength = $(this).val().length,
			textareaValDiffer = textAreaMaxLength - textareaValLength;

		if (textareaValDiffer > 0) {

			$('.form-child .text-output').html('Remaining Characters Are <span>' + textareaValDiffer + '</span> Character');

		} else {

				$('.form-child .text-output').html('There IS No Remaining Characters!');


		}

	});

});




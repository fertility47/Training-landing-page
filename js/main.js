$(function(){
    $('.popap__link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

    $('.gallery__item-inner').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
	});

	
    $('.gallery__slider').slick({
       prevArrow: '<button type="button" class="slick-prev"><img src="images/gallery/prev.png" alt="#"></button>',
       nextArrow: '<button type="button" class="slick-next"><img src="images/gallery/next.png" alt="#"></button>'
    });

	$('.menu__btn').on('click', function () {
		$('.menu__list').toggleClass('menu__list-active')
	});
});
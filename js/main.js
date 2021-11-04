$(function () {

	$('.banner__slider').slick({
		dots: true,
		prevArrow: '<button class="banner__slider-btn-prev"><img src="images/banner-slider-arrow-prev.svg" alt=""></button>',
		nextArrow: '<button class="banner__slider-btn-next"><img src="images/banner-slider-arrow-next.svg" alt=""></button>',
		responsive: [
			{
				breakpoint: 969,
				settings: {
					arrows: false
				}
			}
		]
	});


	$('.products-item__favorite').on('click', function(){
		$(this).toggleClass('products-item__favorite--active');
	});


	$('.products-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		
		prevArrow: '<button class="products-slider-btn-prev"><img src="images/products-slider-arrow-prev.svg" alt=""></button>',
		nextArrow: '<button class="products-slider-btn-next"><img src="images/products-slider-arrow-next.svg" alt=""></button>',
		responsive: [
			{
				breakpoint: 1301,
				settings: {
					arrows: false,
					dots: true
				}
			},
			{
				breakpoint: 1201,
				settings: {
					arrows: false,
					slidesToShow: 3,
					dots: true
				}
			},
			{
				breakpoint: 870,
				settings: {
					arrows: false,
					slidesToShow: 2,
					dots: true
				}
			},
			{
				breakpoint: 590,
				settings: {
					arrows: false,
					slidesToShow: 1,
					dots: true
				}
			},
		]
	});		


	$('.tab').on('click', function(e){
		e.preventDefault();

		$($(this).siblings()).removeClass('tab--active');
		$($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

		$(this).addClass('tab--active');
		$($(this).attr('href')).addClass('tabs-content--active');

		$('.products-slider').slick('setPosition');
	});


	$('.filter-style').styler();

	$('.filter__item-drop, .aside-filter__extra').on('click', function(){
		$(this).toggleClass('filter__item-drop--active');
		$(this).next().slideToggle();
	})


	$('.js-range-slider').ionRangeSlider({
		type: "double",
		
	});


	$('.catalog__filter-btn-grid').on('click', function(){
		$('.catalog__filter-btn button').removeClass('catalog__filter-btn--active');
		$('.products-item__wrapper').removeClass('products-item__wrapper--list');
		$(this).addClass('catalog__filter-btn--active');
	});

	$('.catalog__filter-btn-list').on('click', function(){
		$('.catalog__filter-btn button').removeClass('catalog__filter-btn--active');
		$('.products-item__wrapper').addClass('products-item__wrapper--list');
		$(this).addClass('catalog__filter-btn--active');
	});

	$('.product-card__rate-yo').rateYo({
		ratedFill: 'var(--primary-color)',
		starWidth: '23px',
		spacing: '7px'
	});


	$('.menu__btn').on('click', function(){
		$('.menu-mobile__list').toggleClass('menu-mobile__list--active');
	});

	$('.catalog__aside-btn').on('click', function(){
		$(this).next().slideToggle();
	});

});


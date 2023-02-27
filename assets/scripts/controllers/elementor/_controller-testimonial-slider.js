/***********************************************
 * WIDGET: TESTIMONIAL SLIDER
 ***********************************************/
(function ($) {

	'use strict';

	VLTJS.testimonialSlider = {
		init: function ($scope, $) {
			// check if plugin defined
			if (typeof Swiper == 'undefined') {
				return;
			}
			var el = $scope.find('.vlt-testimonial-slider'),
				sliderContainer = el.find('.swiper-container'),
				speed = el.data('animation-speed') || 1000,
				gap = el.data('gap') || 0,
				loop = el.data('loop') ? true : false;
			new Swiper(sliderContainer, {
				speed: speed,
				spaceBetween: gap,
				effect: 'coverflow',
				grabCursor: true,
				slidesPerView: 1,
				loop: loop,
				navigation: {
					nextEl: $('.vlt-slider-controls--testimonial-slider .next'),
					prevEl: $('.vlt-slider-controls--testimonial-slider .prev'),
				},
				pagination: {
					el: $('.vlt-slider-controls--testimonial-slider .pagination'),
					clickable: false,
					type: 'fraction',
					renderFraction: function (currentClass, totalClass) {
						return '<span class="' + currentClass + '"></span>' +
							'<span class="sep">/</span>' +
							'<span class="' + totalClass + '"></span>';
					}
				}
			});
		}
	};

	VLTJS.window.on('elementor/frontend/init', function () {
		elementorFrontend.hooks.addAction(
			'frontend/element_ready/vlt-testimonial-slider.default',
			VLTJS.testimonialSlider.init
		);
		elementorFrontend.hooks.addAction(
			'frontend/element_ready/vlt-slider-controls.default',
			VLTJS.testimonialSlider.init
		);
	});

})(jQuery);
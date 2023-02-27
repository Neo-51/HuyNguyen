/***********************************************
 * WIDGET: TIMELINE SLIDER
 ***********************************************/
(function ($) {

	'use strict';

	VLTJS.timelineSlider = {
		init: function ($scope, $) {
			// check if plugin defined
			if (typeof Swiper == 'undefined') {
				return;
			}
			var el = $scope.find('.vlt-timeline-slider'),
				sliderContainer = el.find('.swiper-container'),
				speed = el.data('animation-speed') || 1000,
				loop = el.data('loop') ? true : false;
			new Swiper(sliderContainer, {
				speed: speed,
				spaceBetween: 0,
				grabCursor: true,
				slidesPerView: 1,
				loop: loop,
				navigation: {
					nextEl: $('.vlt-slider-controls--timeline-slider .next'),
					prevEl: $('.vlt-slider-controls--timeline-slider .prev'),
				},
				pagination: {
					el: $('.vlt-slider-controls--timeline-slider .pagination'),
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
			'frontend/element_ready/vlt-timeline-slider.default',
			VLTJS.timelineSlider.init
		);
		elementorFrontend.hooks.addAction(
			'frontend/element_ready/vlt-slider-controls.default',
			VLTJS.timelineSlider.init
		);
	});

})(jQuery);
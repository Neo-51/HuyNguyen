/***********************************************
 * WIDGET: PROJECTS SHOWCASE SLIDER
 ***********************************************/
(function ($) {

	'use strict';

	VLTJS.projectsShowcaseSlider = {
		init: function ($scope) {
			// check if plugin defined
			if (typeof Swiper == 'undefined') {
				return;
			}
			var el = $scope.find('.vlt-project-showcase-slider'),
				slider_container = el.find('.swiper-container');
			new Swiper(slider_container, {
				speed: 1000,
				spaceBetween: 30,
				grabCursor: true,
				slidesPerView: 1,
				breakpoints: {
					575: {
						slidesPerView: 2,
					},
				},
			});
		},

	}

	VLTJS.window.on('elementor/frontend/init', function () {
		elementorFrontend.hooks.addAction(
			'frontend/element_ready/vlt-projects-showcase-slider.default',
			VLTJS.projectsShowcaseSlider.init
		);
	});

})(jQuery);
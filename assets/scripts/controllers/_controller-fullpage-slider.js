/***********************************************
 * SITE: FULLPAGE SLIDER
 ***********************************************/
(function ($) {

	'use strict';

	VLTJS.fullpageSlider = {
		init: function () {

			var slider = $('.vlt-fullpage-slider');

			if (!slider.length) {
				return;
			}

			if (typeof $.fn.pagepiling == 'undefined') {
				return;
			}

			var progress_bar = slider.find('.vlt-fullpage-slider-progress-bar'),
				numbers = slider.find('.vlt-fixed-action-block--slider-numbers'),
				loop_top = slider.data('loop-top') ? true : false,
				loop_bottom = slider.data('loop-bottom') ? true : false,
				speed = slider.data('speed') || 800,
				anchors = [];

			VLTJS.body.css('overflow', 'hidden');
			VLTJS.html.css('overflow', 'hidden');

			slider.find('[data-anchor]').each(function () {
				anchors.push($(this).data('anchor'));
			});

			function vlthemes_navbar_solid() {
				if (slider.find('.pp-section.active').scrollTop() > 0) {
					$('.vlt-navbar').addClass('vlt-navbar--solid');
				} else {
					$('.vlt-navbar').removeClass('vlt-navbar--solid');
				}
			}
			vlthemes_navbar_solid();

			function vlthemes_show_navigation() {
				progress_bar.find('li:first-child').addClass('active').end().addClass('is-show');
			}

			function vlthemes_page_brightness() {
				var section = slider.find('.vlt-section.active');
				switch (section.data('brightness')) {
					case 'light':
						VLTJS.html.removeClass('is-light').addClass('is-dark');
						break;
					case 'dark':
						VLTJS.html.removeClass('is-dark').addClass('is-light');
						break;
				}
			}

			function vlthemes_navigation(direction, index) {
				switch (direction) {
					case 'down':
						progress_bar.find('li:nth-child(' + index + ')').prevAll().addClass('prev');
						break;
					case 'up':
						progress_bar.find('li:nth-child(' + index + ')').removeClass('prev');
						break;
				}
			}

			function vlthemes_slide_counter() {
				var section = slider.find('.vlt-section.active'),
					index = section.index();
				if (index == 0) {
					numbers.html('<a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg></a>');
				} else {
					numbers.html(VLTJS.addLedingZero(index + 1));
				}
			}

			slider.pagepiling({
				menu: '.vlt-offcanvas-menu ul.sf-menu, .vlt-fullpage-slider-progress-bar',
				scrollingSpeed: speed,
				loopTop: loop_top,
				loopBottom: loop_bottom,
				anchors: anchors,
				sectionSelector: '.vlt-section',
				navigation: false,
				afterRender: function () {
					vlthemes_show_navigation();
					vlthemes_page_brightness();
					vlthemes_slide_counter();
					VLTJS.window.trigger('vlt.change-slide');
				},
				onLeave: function (index, nextIndex, direction) {
					vlthemes_page_brightness();
					vlthemes_navigation(direction, nextIndex);
					vlthemes_slide_counter();
					VLTJS.window.trigger('vlt.change-slide');
				},
				afterLoad: function (anchorLink, index) {
					progress_bar.find('li.active').prevAll().addClass('prev');
					vlthemes_navbar_solid();
				}
			});

			numbers.on('click', '>a', function (e) {
				e.preventDefault();
				$.fn.pagepiling.moveSectionDown();
			});

			$('.link-to-next-slide').on('click', '.vlt-simple-link', function (e) {
				e.preventDefault();
				$.fn.pagepiling.moveSectionDown();
			});

			slider.find('.pp-scrollable').on('scroll', function () {
				var scrollTop = $(this).scrollTop();
				if (scrollTop > 0) {
					$('.vlt-navbar').addClass('vlt-navbar--solid');
				} else {
					$('.vlt-navbar').removeClass('vlt-navbar--solid');
				}
			});

		}
	};
	VLTJS.fullpageSlider.init();
})(jQuery);
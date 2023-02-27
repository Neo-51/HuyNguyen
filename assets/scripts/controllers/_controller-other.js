/***********************************************
 * MIKAEL: OTHER SCRIPTS
 ***********************************************/
(function ($) {
	'use strict';

	// Fix visual portfolio
	$('.elementor-widget-visual-portfolio').addClass('elementor-widget-theme-post-content');

	// Jarallax
	if (typeof $.fn.jarallax !== 'undefined') {
		$('.jarallax').jarallax({
			speed: 1
		});
	}

	// Widget menu
	if (typeof $.fn.superclick !== 'undefined') {
		$('.widget_pages > ul, .widget_nav_menu ul.menu').superclick({
			delay: 300,
			cssArrows: false,
			animation: {
				opacity: 'show',
				height: 'show'
			},
			animationOut: {
				opacity: 'hide',
				height: 'hide'
			},
		});
	}

	// Fast click
	if (typeof FastClick === 'function') {
		FastClick.attach(document.body);
	}

	// Page 404 image
	$('.vlt-page--404 img').vlt_mousemove_parallax({
		movement: -60
	});

	// Masonry blog
	$('.masonry').vlt_masonry_grid();

	// Fitvids
	if (typeof $.fn.fitVids !== 'undefined') {
		VLTJS.body.fitVids();
	}

})(jQuery);
<?php

/**
 * @author: VLThemes
 * @version: 1.0.4
 */

if ( ! function_exists( 'mikael_dynamic_css' ) ) {
	function mikael_dynamic_css( $css ) {
		$css .= '';

		return $css;
	}
}
add_filter( 'kirki_mikael_customize_dynamic_css', 'mikael_dynamic_css' );
<?php

/**
 * @author: VLThemes
 * @version: 1.0.4
 */

$priority = 0;

/**
 * Footer general
 */
VLT_Options::add_field( array(
	'type' => 'custom',
	'settings' => 'sfg_1',
	'section' => 'section_footer_general',
	'default' => '<div class="kirki-separator">' . esc_html__( 'General', 'mikael' ) . '</div>',
	'priority' => $priority++,
) );

VLT_Options::add_field( array(
	'type' => 'select',
	'settings' => 'footer_show',
	'section' => 'section_footer_general',
	'label' => esc_html__( 'Footer Show', 'mikael' ),
	'priority' => $priority++,
	'transport' => 'auto',
	'choices' => array(
		'show' => esc_html__( 'Show', 'mikael' ),
		'hide' => esc_html__( 'Hide', 'mikael' ),
	),
	'default' => 'show',
) );

VLT_Options::add_field( array(
	'type' => 'select',
	'settings' => 'footer_layout',
	'section' => 'section_footer_general',
	'label' => esc_html__( 'Footer Layout', 'mikael' ),
	'priority' => $priority++,
	'transport' => 'auto',
	'choices' => array(
		'default' => esc_html__( 'Default', 'mikael' ),
		'template' => esc_html__( 'Template', 'mikael' ),
	),
	'default' => 'default',
) );

VLT_Options::add_field( array(
	'type' => 'select',
	'settings' => 'footer_fixed',
	'section' => 'section_footer_general',
	'label' => esc_html__( 'Footer Fixed', 'mikael' ),
	'priority' => $priority++,
	'transport' => 'auto',
	'choices' => array(
		'enable' => esc_html__( 'Enable', 'mikael' ),
		'disable' => esc_html__( 'Disable', 'mikael' )
	),
	'active_callback' => array(
		array(
			'setting' => 'footer_show',
			'operator' => '==',
			'value' => 'show',
		),
		array(
			'setting' => 'footer_layout',
			'operator' => '==',
			'value' => 'default',
		)
	),
	'default' => 'enable',
) );

VLT_Options::add_field( array(
	'type' => 'select',
	'settings' => 'footer_template',
	'section' => 'section_footer_general',
	'label' => esc_html__( 'Footer Template', 'mikael' ),
	'priority' => $priority++,
	'transport' => 'auto',
	'choices' => mikael_get_elementor_templates(),
	'active_callback' => array(
		array(
			'setting' => 'footer_show',
			'operator' => '==',
			'value' => 'show'
		),
		array(
			'setting' => 'footer_layout',
			'operator' => '==',
			'value' => 'template',
		)
	)
) );

VLT_Options::add_field( array(
	'type' => 'select',
	'settings' => 'footer_sticky',
	'section' => 'section_footer_general',
	'label' => esc_html__( 'Footer Sticky', 'mikael' ),
	'priority' => $priority++,
	'transport' => 'auto',
	'choices' => array(
		'enable' => esc_html__( 'Enable', 'mikael' ),
		'disable' => esc_html__( 'Disable', 'mikael' )
	),
	'active_callback' => array(
		array(
			'setting' => 'footer_show',
			'operator' => '==',
			'value' => 'show',
		),
		array(
			'setting' => 'footer_layout',
			'operator' => '==',
			'value' => 'template',
		)
	),
	'default' => 'enable',
) );

VLT_Options::add_field( array(
	'type' => 'editor',
	'settings' => 'footer_copyright',
	'section' => 'section_footer_general',
	'label' => esc_html__( 'Copyright', 'mikael' ),
	'priority' => $priority++,
	'transport' => 'auto',
	'default' => '<p>© 2020 Copiright.<br>All rights reserved.</p>',
) );
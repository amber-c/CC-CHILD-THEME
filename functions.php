<?php

/** CHILD THEME DEFAULT FUNCTIONS **/

	// Defines
	define( 'FL_CHILD_THEME_DIR', get_stylesheet_directory() );
	define( 'FL_CHILD_THEME_URL', get_stylesheet_directory_uri() );
	
	// Classes
	require_once 'classes/class-fl-child-theme.php';
	
	// Actions
	add_action( 'wp_enqueue_scripts', 'FLChildTheme::enqueue_scripts', 1000 );


/** CHILD THEME CUSTOMIZATION **/

	// Theme Functions
	require_once 'assets/theme-functions.php';

// Theme Functions
teccc_add_legend_view( 'list' );
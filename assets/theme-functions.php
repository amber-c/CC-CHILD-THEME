<?PHP

function ccollab_theme_enqueue_scripts_styles() {
	
	/** THEME STYLES **/
	
	/** THEME SCRIPTS **/
	
		// Include Custom Scripts
		
		wp_enqueue_script('jquery-color', array('jquery'), true, true );
		
		wp_enqueue_script('ccollab-script',
			get_theme_file_uri( '/assets/js/ccollab-script.js' ), 
			array('jquery'), 
			filemtime( get_theme_file_path( '/assets/js/ccollab-script.js' ) ),
			true 
		);

}
add_action('wp_enqueue_scripts', 'ccollab_theme_enqueue_scripts_styles');

?>
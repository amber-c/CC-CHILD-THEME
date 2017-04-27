jQuery(document).ready(function( $ ){

	// Color Cycling - BG Section Color
	$('.animated-bg').each(function(){
		var $this = $(this),
			colors = ['#ec008c', '#00bcc3', '#5fb26a', '#fc7331'];
	
		setInterval(function(){
			var color = colors.shift();
			colors.push(color);
			$this.animate({backgroundColor: color}, 2000);
		},4000);
	});
	
	// Color Cycling - Border Color
	$('.fl-page-nav ul.sub-menu').each(function(){
		var $this = $(this),
			colors = ['#ec008c', '#00bcc3', '#5fb26a', '#fc7331'];
	
		setInterval(function(){
			var color = colors.shift();
			colors.push(color);
			$this.animate({borderColor: color}, 2000);
		},4000);
	});
	
	// Beaver Builder - Make Entire Column Link
	$('.col-link .fl-col-content').each(function() {
		var module_link = $(this).find('a').first().attr('href');
		module_target = $(this).find('a').first().attr('target');
		$(this).wrapInner('<a></a>');
		$(this).find('a').first().attr({href:module_link,target:module_target});
	});
	
	$('.col-link2').each(function() {
		var module_link = $(this).find('a').first().attr('href');
		module_target = $(this).find('a').first().attr('target');
		$(this).wrapInner('<a></a>');
		$(this).find('a').first().attr({href:module_link,target:module_target});
	});
});

$(window).bind('scroll resize', function() {	
										 
	var currentSection = null;
	
	$('.section').each(function(){
        var element = $(this).attr('id');
			
        if ($('#'+element).is('*')){
            if($(window).scrollTop() >= $('#'+element).offset().top - 170)
            {
                currentSection = element;
            }
        }
		
    });
	
	
	$('#md_nav ul.nav li, #md_nav_inverse ul.nav li, #mobile-menu ul.nav li').removeClass('active').find('a[href="#'+currentSection+'"]').parent().addClass('active');
});

jQuery(document).ready(function() {
	
	$("a.btn-lwork-go_to").click(function() {
		$('html, body').animate({scrollTop: $(this.hash).offset().top-offset}, 2000);
		return false;
	});
	$(".header_pax a.logo").click(function() {
		jQuery('html, body').animate({scrollTop: 0}, 2000);
		return false;
	});
	
	var offset = 70;
	
	$('#md_nav ul.nav li a, #md_nav_inverse ul.nav li a').click(function() {
		
		var item_href = ($(this).attr('href'));
		
		if (item_href == '#home') {
			jQuery('html, body').animate({scrollTop: 0}, 2000);
			return false;
		}
		else {
			$('html, body').animate({scrollTop: $(this.hash).offset().top-offset}, 2000);
			return false;
		}
		
	});
	var offset1 = 50;

	$('#mobile-menu ul.nav li a').click(function() {
		
		var item_href = ($(this).attr('href'));
			$('html, body').animate({scrollTop: $(this.hash).offset().top-offset1}, 2000);
			return false;
	});

});
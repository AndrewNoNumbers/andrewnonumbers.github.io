function is_touch_device() {
  return !!('ontouchstart' in window);
}

jQuery(window).load(function() {
	
	//latest_work
    jQuery('#latest_work ul').carouFredSel({
        auto: false,
        width: '100%',
        pagination: "#latest_work .pager",
        responsive: true,
        scroll: {
            fx: 'uncover-fade'
        },
        swipe: {
            onMouse: false,
            onTouch: true
        },
        items: {
            height: 'variable',
            start: 0
        }
    });
	
	//testimonials
    jQuery('#testimonials ul').carouFredSel({
        auto: false,
        width: '100%',
        pagination: "#testimonials .pager",
        responsive: true,
        scroll: {
            fx: 'uncover-fade'
        },
        swipe: {
            onMouse: true,
            onTouch: true
        },
        items: {
            height: 'variable',
            start: 0
        }
    });
	
	//blog
    jQuery('#blog ul').carouFredSel({
        auto: false,
        width: '100%',
		height: 'variable',
		prev: '#blog-prev',
		next: '#blog-next',
        responsive: true,
        scroll: {
            fx: 'uncover-fade'
        },
        swipe: {
            onMouse: false,
            onTouch: true
        },
        items: {
            height: 'variable',
            start: 0
        }
    });
	
	//single post slider
    jQuery('#single_post_slider ul').carouFredSel({
        auto: false,
        width: '100%',
        pagination: "#single_post_slider .pager",
        responsive: true,
        scroll: {
            fx: 'uncover-fade'
        },
        swipe: {
            onMouse: false,
            onTouch: true
        },
        items: {
            height: 'variable',
            start: 0
        }
    });

		/* Portfolio */
	var jQuerycontainer = jQuery('.gallery_portfolio');
			jQuerycontainer.isotope({
				filter: '*',
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});
		
			jQuery('a[data-rel]').each(function() {
				jQuery(this).attr('rel', jQuery(this).data('rel'));
				
			});
		
			jQuery("a[rel^='prettyPhoto']").prettyPhoto({
				animation_speed: 'fast', /* fast/slow/normal */
				slideshow: false, /* false OR interval time in ms */
				autoplay_slideshow: false, /* true/false */
				opacity: 0.80, /* Value between 0 and 1 */
				show_title: true, /* true/false */
				allow_resize: true, /* Resize the photos bigger than viewport. true/false */
				default_width: 500,
				default_height: 344,
				counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
				theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
				hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
				wmode: 'opaque', /* Set the flash wmode attribute */
				autoplay: true, /* Automatically start videos: True/False */
				modal: false, /* If set to true, only the close button will close the window */
				overlay_gallery: false, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
				keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
				deeplinking: false,
				social_tools: false,
			});
					//Portfolio Filter
			jQuery('a[data-filter]').each(function() {
				var temp_data = jQuery(this).data('filter');
				if ( temp_data != '*'){
					temp_data = temp_data.slice( 1 );
					jQuery(this).parent().attr('class', temp_data);
					}
			});	 
					//Fix for Portfolio Filter
		jQuery('ul#filterOptions li a').click(function(){
			jQuery('ul#filterOptions li').removeClass('current');
			jQuery(this).parent().addClass('current');
			  
			var filterVal = jQuery(this).parent().attr("class").split(" ");
			var filterValFirst =  filterVal[0];
			if(filterValFirst == 'all') {
			 jQuery("a[rel^='prettyPhoto']").each(function()
			 	{
					jQuery(this).addClass('active-items');
				});
			}
			else {
			   jQuery('ul.gallery_portfolio li').each(function() {
				if(jQuery(this).hasClass(filterValFirst)) {
				 jQuery(this).find('a').addClass('active-items');
				}
			   });
			}
			jQuery("a[rel^='prettyPhoto']a[class~='active-items']").prettyPhoto({
   				animation_speed: 'fast', /* fast/slow/normal */
				slideshow: false, /* false OR interval time in ms */
				autoplay_slideshow: false, /* true/false */
				opacity: 0.80, /* Value between 0 and 1 */
				show_title: true, /* true/false */
				allow_resize: true, /* Resize the photos bigger than viewport. true/false */
				default_width: 500,
				default_height: 344,
				counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
				theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
				hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
				wmode: 'opaque', /* Set the flash wmode attribute */
				autoplay: true, /* Automatically start videos: True/False */
				modal: false, /* If set to true, only the close button will close the window */
				overlay_gallery: false, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
				keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
				deeplinking: false,
				social_tools: false, 
  			});
  			jQuery('*').removeClass('active-items');
 
			var selector = jQuery(this).attr('data-filter');
			jQuerycontainer.isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			 });
			 return false;
    	});

			/*Portfolio item image hover*/
			/*******************************/
			jQuery("ul.gallery_portfolio li .item-overlay").hide();
			
			if( is_touch_device() ){
				jQuery("ul.gallery_portfolio li").click(function(){
														  
					var items_before = jQuery(this).prevAll("li").length;
					var opacity = jQuery(this).find(".item-overlay").css("opacity");
					var display = jQuery(this).find(".item-overlay").css("display");
					
					if ((opacity == 0)||(display == "none")) {
						jQuery(this).find(".item-overlay").fadeTo(300, 1.0);
					} else {
						jQuery(this).find(".item-overlay").fadeTo(300, 0);
					}
						
					jQuery(this).parent().find("li:lt(" + items_before + ") .item-overlay").fadeTo(300, 0);
					jQuery(this).parent().find("li:gt(" + items_before + ") .item-overlay").fadeTo(300, 0);
				});	
		
			}
			else {
					jQuery("ul.gallery_portfolio li").hover(function() {
							jQuery(this).find(".item-overlay").fadeTo(250, 1.0);
						}, function() {
							jQuery(this).find(".item-overlay").fadeTo(250, 0);		
					});
				
			}

			/* Contact Form */
	

			/*disabled the regex check and sending POST request in favor of the simple mailto option below*/
		    /*jQuery('#send-button').on('click', function(e) {
		        var isValid = true;
		        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		 
		        if (!emailReg.test(jQuery('#contact-email').val()) || jQuery('#contact-email').val() === "") {
		            isValid = false;
		            jQuery('#contact .contact-info').html('Your email is not in valid format');
		        }

		        if (isValid) {
		            jQuery.ajax({
		                type: "POST",
		                url: "libs/ajax.php",
		                data: {
		                    'action': 'SendMessage',
		                    'name': jQuery('#name').val(),
		                    'email': jQuery('#contact-email').val(),
		                    'city': jQuery('#city').val(),
		                    'message': jQuery('#message').val()
		                },
		                success: function(response) {
		                    if (response) {
		                        var responseObj = jQuery.parseJSON(response);
		                        if (responseObj.ResponseData)
		                        {
		                            jQuery('#contact .contact-info').html(responseObj.ResponseData);
		                            ClearInputs();
		                        }
		                    }
							displayHints();
		                },
		                error: function(xhr) {
		                    var error = null;
		                    switch (xhr.status)
		                    {
		                        case "301":
		                            error = "Redirection Error!";
		                            break;
		                        case "307":
		                            error = "Error, temporary server redirection!";
		                            break;
		                        case "400":
		                            error = "Bad request!";
		                            break;
		                        case "404":
		                            error = "Page not found!";
		                            break;
		                        case "500":
		                            error = "Server is currently unavailable!";
		                            break;
		                        default:
		                            error = "Unespected error, please try again later.";
		                    }
		                    if (error) {
		                        jQuery('#contact .contact-info').html(error);
		                    }
		                }
		            });
		        }

		        e.preventDefault();
		    });*/

			/*my own custom code, simply grabs the text entered in either field and places them into subject and body fields in URI*/
			$("#send-button").click(function(e) {
		        $(this).attr("href","mailto:andrewnonumbers+form@gmail.com?subject="+encodeURIComponent($("#subjectLine").val())+"&body="+encodeURIComponent($("#message").val()))
			        // e.preventDefault();
			})

		    //Clear Inputs
		    ClearInputs();
			
			displayHints();
			jQuery('.doc-loader').fadeOut('slow');		
		});

				
jQuery(window).resize(function() {
	var jQuerycontainer = jQuery('.gallery_portfolio');
	jQuerycontainer.isotope({
		filter: '*',
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false
		}
	});
});
jQuery(document).ready(function() {
	
	displayHints();
	
	//toggle menu
	jQuery("ul.menu_ul").hide();
		jQuery("div.toggle_menu_wrapper ul.toggle_menu").click(function(){
		jQuery("ul.menu_ul").fadeToggle("slow");
	});

	window_scroll = jQuery(this).scrollTop();
	
	if ( jQuery(window).width() > 750 ) {
		window_scroll = jQuery(this).scrollTop();
		if ( window_scroll > jQuery('#md_nav').height() ) {
			jQuery('#md_nav_inverse').fadeIn();
		} else {
			jQuery('#md_nav_inverse').fadeOut('fast');
		}
	}
	
	 //fade menu 
	function menu_fade() {

		if ( jQuery(window).width() > 750 ) {
			window_scroll = jQuery(this).scrollTop();
			if ( window_scroll > jQuery('#md_nav').height() ) {
				jQuery('#md_nav_inverse').fadeIn();
			} else {
				jQuery('#md_nav_inverse').fadeOut('fast');
			}
		}
	}
	jQuery(window).scroll(function() { menu_fade(); }); 
	
});

var displayHints = function()
{
	jQuery('.contact-form #name').attachHint('Your name here');
	jQuery('.contact-form #contact-email').attachHint('Your email address here');
	jQuery('.contact-form #city').attachHint('Your city here');
	jQuery('.contact-form #message').attachHint('Your message here');

	jQuery('.contact-form #subjectLine').attachHint('Subject');
	
	jQuery('.comment_form #name').attachHint('Your name');
	jQuery('.comment_form #email').attachHint('Email Address');
	jQuery('.comment_form #message').attachHint('Message');
};

var ClearInputs = function(context) {
    var container = 'body';

    if (typeof context !== 'undefined' && context !== null) {
        container = context;
    }

    jQuery(container).find('input, textarea').each(function() {
        jQuery(this).val('').text('');
    });
};
jQuery(window).resize(function(){
	window_scroll = jQuery(this).scrollTop();
	if ( jQuery(window).width() > 750 ) {
		window_scroll = jQuery(this).scrollTop();
		if ( window_scroll > jQuery('#md_nav').height() ) {
			jQuery('#md_nav_inverse').fadeIn();
		} else {
			jQuery('#md_nav_inverse').fadeOut(10);
		}
	} else {
		jQuery('#md_nav_inverse').fadeOut(10);
	}
});


$(document).ready(function(){
	
	$(function() {
	
		// // Create event hover for Navigation footer 
		$("#Nav li a").hover(function() {
			$(this).stop().fadeTo("fast",0.5);
		}, function(){
			$(this).stop().fadeTo("fast",1.0);
		});
		
	});

	$("#Page-top").hide();
	  
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 150) {
				$('#Page-top').fadeIn();
			} else {
				$('#Page-top').fadeOut();
			}
		});
		});
		// scroll body to 0px on click
		$('#Page-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});	
		
		
});

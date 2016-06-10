// Calc freight feature
jQuery(document).ready(function($) {
	setTimeout(function() { 
		/* Remove resultado do cálculo de frete caso o usuário apague o input de cep */
		$("#txtCep").keyup(function() {
			if($("#txtCep").val().length ==0) {
			    $('p.montagem').hide();
			    $('div.freight-values').hide();
			    console.log('caiu no if');
			} else {
			    $('p.montagem').hide();
			    $('div.freight-values').hide();
			}
		});
		/* Remove resultado do cálculo de frete caso o usuário apague o input de cep */
	}, 10000);
});
// Calc freight feature

// SCRIPT FOR MODAL POPUP WINDOW
jQuery(document).ready(function(){	
	jQuery('#popup-container a.close').click(function(){
			jQuery('#popup-container').fadeOut();
			jQuery('#active-popup').fadeOut();
	});
	
	var visits = jQuery.cookie('visits') || 0;
	visits++;
	
	jQuery.cookie('visits', visits, { expires: 1, path: '/' });
		
	console.debug(jQuery.cookie('visits'));
		
	if ( jQuery.cookie('visits') > 1 ) {
		jQuery('#active-popup').hide();
		jQuery('#popup-container').hide();
	} else {
			var pageHeight = jQuery(document).height();
			jQuery('<div id="active-popup"></div>').insertBefore('body');
			jQuery('#active-popup').css("height", pageHeight);
			jQuery('#popup-container').show();
	}

	if (jQuery.cookie('noShowWelcome')) { jQuery('#popup-container').hide(); jQuery('#active-popup').hide(); }
});	

jQuery(document).mouseup(function(e){
	var container = jQuery('#popup-container');
	
	if( !container.is(e.target)&& container.has(e.target).length === 0)
	{
		container.fadeOut();
		jQuery('#active-popup').fadeOut();
	}

});
// SCRIPT FOR MODAL POPUP WINDOW


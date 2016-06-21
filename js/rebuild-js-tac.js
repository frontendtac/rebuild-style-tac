/*
  RJS-TAC V.1.29
*/
// Calc freight feature
jQuery(document).ready(function($) {
	setTimeout(function() { 
		if (jQuery(".frete").length) {
			/* Remove resultado do cálculo de frete caso o usuário apague o input de cep */
			$("#txtCep").keyup(function() {
				if($("#txtCep").val().length ==0) {
				    $('p.montagem').hide();
				    $('div.freight-values').hide();				    
				} else {
				    $('p.montagem').hide();
				    $('div.freight-values').hide();
				}
			});
			/* Remove resultado do cálculo de frete caso o usuário apague o input de cep */
		}
	}, 10000);
});
// Calc freight feature

// Toggle List Itens
jQuery(document).ready(function() {	
	setTimeout(function() { 
		if (jQuery(".list-items-policy").length) {
			$('#toggle-view li').click(function () {

				var text = $(this).children('div.panel');

				if (text.is(':hidden')) {
					text.slideDown('200');
					//$(this).children('span').html('-');		
				} else {
					text.slideUp('200');
					//$(this).children('span').html('+');		
				}				
			});
		}
	}, 1020);
});	
// Toggle List Itens


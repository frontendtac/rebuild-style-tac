/*
  RJS-TAC V.1.36
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

// Installment Dom Verify - Adding aditional Info
jQuery('.installment-show').click(function($) {
	setTimeout(function() { 
		if (jQuery(".tbl-payment-system").length) {
			var getTexts = [];
			var x = jQuery(".tbl-payment-system tr:contains(8X)");
			var resultTexts = x.add(jQuery("~ tr", x)).map(function() {
			 return jQuery("td.parcelas", this).text(function(_, text) {
			   return text.replace(/S(?=\/)/, "C")
			   })
			}).get();			

			var elements = jQuery('table td:contains(X)').parent().nextUntil().addBack().children(':first-child');
			elements.each(function() {
				jQuery(this).text(jQuery(this).text().replace('X S/JUROS', '1X S/JUROS'));
				jQuery(this).text(jQuery(this).text().replace('21X S/JUROS', '2X S/JUROS'));
				jQuery(this).text(jQuery(this).text().replace('31X S/JUROS', '3X S/JUROS'));
				jQuery(this).text(jQuery(this).text().replace('41X S/JUROS', '4X S/JUROS'));
				jQuery(this).text(jQuery(this).text().replace('51X S/JUROS', '5X S/JUROS'));
				jQuery(this).text(jQuery(this).text().replace('61X S/JUROS', '6X S/JUROS'));
				jQuery(this).text(jQuery(this).text().replace('71X S/JUROS', '7X S/JUROS'));
				jQuery(this).text(jQuery(this).text().replace('8X S/JUROS', '8X S/JUROS'));
				jQuery(this).text(jQuery(this).text().replace('9X S/JUROS', '9X S/JUROS'));
				jQuery(this).text(jQuery(this).text().replace('10X S/JUROS', '10X S/JUROS'));
				jQuery(this).text(jQuery(this).text().replace('11X S/JUROS', '11X S/JUROS'));
				jQuery(this).text(jQuery(this).text().replace('12X S/JUROS', '12X S/JUROS'));
			});
		}
	}, 100);
});
// Installment Dom Verify - Adding aditional Info




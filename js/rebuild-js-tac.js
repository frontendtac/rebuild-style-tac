/*
  RJS-TAC V.3.4
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
jQuery('.installment-show').one( 'click', function($) {
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
				jQuery(this).text(jQuery(this).text().replace('1X S/JUROS', '1X S/JUROS'));
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
				jQuery(this).text(jQuery(this).text().replace('S/JUROS', 'SEM JUROS'));
				jQuery(this).text(jQuery(this).text().replace('C/JUROS', 'COM JUROS'));
			});
		}
	}, 100);
});
// Installment Dom Verify - Adding aditional Info

// Função para exibir ou não div de mostruário em lojas
jQuery(document).ready(function() {	
	setTimeout(function() { 
		if ( $('.lojaItem').length ) {
		} else {
		    $('.grayBox.mostruario').css('display', 'none');
		}
	}, 100);
});
// Função para exibir ou não div de mostruário em lojas

// Função para condicionar exibição de pagamento no boleto
jQuery(document).ready(function() {	
	setTimeout(function() { 
		if ( $('#divBoleto').length ) {

	    var valorMinimoBoleto = parseFloat('1.001');
	    var	valorTratado = parseFloat($("#divBoleto .valor em").text().replace('R$ ',''));
	    var	valorBoleto = valorTratado;
	    	if ( valorBoleto >= valorMinimoBoleto ) {    		
	    		//console.log('valor exibe boleto');
	    	} else {
	    		$('#divBoleto.boleto').hide();
	    		$('#mainContentSide .box .other-payment-method #divCredito').css('padding-top','10px');
	    		//console.log('valor não exibe boleto');
	    	};
	    }
	}, 5000);
});
// Função para condicionar exibição de pagamento no boleto
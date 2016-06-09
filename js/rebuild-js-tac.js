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


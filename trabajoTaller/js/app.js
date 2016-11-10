
(function() {
	$(function () {
		var panelTemplate;
		var url = 'api/cotizaciones'
		console.log(url);
		$.get('template/panel.html',function(dom){
				panelTemplate = dom;
		 	});

		$.get(url)
							.done(function(data) {
								for(var i=0;i<data.length;i++){
											var panel = $(panelTemplate);
											var cotizacion = data[i];
											panel.find('#moneda').append(cotizacion.moneda);
											panel.find('#venta').append(cotizacion.venta);
											panel.find('#compra').append(cotizacion.compra);
											$('#principal').append(panel);
										}
							})
							.fail(function() {
								alert('Error de Ajax');
							})
	});
})();

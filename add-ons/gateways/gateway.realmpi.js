//add sagepay redirection
$(document).bind('em_booking_gateway_add_realex_remote', function(event, response){

	// called by EM if return JSON contains gateway key, notifications messages are shown by now.
	if(response.result && response.realmpi_form){
		var rxremForm = $('<form action="'+response.realmpi_url+'" method="post" id="em-sagepay-form-redirect-form"></form>');
		$.each( response.realmpi_form, function(index,value){
			rxremForm.append('<input type="hidden" name="'+index+'" value="'+value+'" />');
		});
		rxremForm.append('<input id="em-realmpi-submit" type="submit" style="display:none" />');
		rxremForm.appendTo('body').trigger('submit');
	}
});
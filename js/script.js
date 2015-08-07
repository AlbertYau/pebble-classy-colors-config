var config = {
	'bgColor': 0
};

$(document).ready(function() {

	console.log("Document Ready");

	var bgColorPicker = $('#bgColorPicker');

	// check local storage
    if(localStorage.length > 0) {
      console.log("Local Storage exists");
      storedColor = localStorage.getItem('bgColor');
      bgColorPicker.attr('value', storedColor);
      var colorSpan = bgColorPicker.siblings().find('.value');
      colorSpan.css('background-color', storedColor.replace(/^0x/, '#'));
    }
    
	$('#send').on('click', function() {
		// Set options
		config.bgColor = bgColorPicker[0].value;

		// Store values
		localStorage.setItem('bgColor', config.bgColor);

		// Close config page and return data
		location.href = 'pebblejs://close#' + encodeURIComponent(JSON.stringify(config));
	});

	$('#cancel').on('click', function() {
		// Close config page and return data
		location.href = 'pebblejs://close';
	});

});
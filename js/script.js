var config = {
	'bgColor': 0
};

$(document).ready(function() {

	console.log("Document Ready");
	
	// Init
	var bgColorPicker = $('#bgColorPicker')[0];

	// Check local storage
    if(localStorage['bgColor']) {
      bgColorPicker.value = localStorage['bgColor'];
    }

	$('#send').on('click', function() {
		// Set options
		config.bgColor = bgColorPicker.value;

		// Store values
		localStorage['bgColor'] = options['bgColor'];

		// Close config page and return data
		location.href = 'pebblejs://close#' + encodeURIComponent(JSON.stringify(config));
	});

});
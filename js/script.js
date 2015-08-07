var config = {
	'bgColor': 0
};

$(document).ready(function() {

	console.log("Document Ready");
	
	//init
	var bgColorPicker = $('#bgColorPicker')[0];

	// check local storage
    if(localStorage.length !== 0) {
      bgColorPicker.value = localStorage.getItem('bgColor');
    }

	$('#send').on('click', function() {
		// Set options
		config.bgColor = bgColorPicker.value;

		// Store values
		localStorage.setItem('bgColor', config.bgColor);

		// Close config page and return data
		location.href = 'pebblejs://close#' + encodeURIComponent(JSON.stringify(config));
	});

});
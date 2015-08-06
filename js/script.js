var config = {
	'bgColor': ''
};

$(document).ready(function() {

	console.log("Document Ready");

	$('#send').on('click', function() {
		// Close config page and return data
		
		console.log($('#bgColorPicker')[0].value);
		config.bgColor = $('#bgColorPicker')[0].value;
		location.href = 'pebblejs://close#' + encodeURIComponent(JSON.stringify(config));

	});

});
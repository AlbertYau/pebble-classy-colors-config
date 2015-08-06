$(document).ready(function() {

	console.log("Document Ready");

	$('#send').on('click', function() {
		// Close config page and return data
		location.href = 'pebblejs://close#success';
	});

});
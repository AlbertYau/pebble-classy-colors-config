var config = {
	'bgColor': '',
	'timeColor': ''
};

$(document).ready(function() {

	console.log("Document Ready");

	var bgColorPicker = $('#bgColorPicker');
	var timeColorPicker = $('#timeColorPicker');

	// check local storage
    if(localStorage.length > 0) {
      console.log("Local Storage exists");
      var storedColor, colorSpan;

      if (localStorage.getItem('bgColor') !== null) {
	      storedColor = localStorage.getItem('bgColor');
	      colorSpan = bgColorPicker.siblings().find('.value');
	      bgColorPicker.attr('value', storedColor);
	      colorSpan.css('background-color', storedColor.replace(/^0x/, '#'));
      }

      if (localStorage.getItem('timeColor') !== null) {
	      storedColor = localStorage.getItem('timeColor');
	      timeColorPicker.attr('value', storedColor);
	      colorSpan = timeColorPicker.siblings().find('.value');
	      colorSpan.css('background-color', storedColor.replace(/^0x/, '#')); 	
      }

    }
    
    // Submit button
	$('#send').on('click', function() {
		// Set options
		config.bgColor = bgColorPicker[0].value;
		config.timeColor = timeColorPicker[0].value;

		// Store values
		localStorage.setItem('bgColor', config.bgColor);
		localStorage.setItem('timeColor', config.timeColor);

		// Close config page and return data
		document.location.href = 'pebblejs://close#' + encodeURIComponent(JSON.stringify(config));
	});

	// Cancel button
	$('#cancel').on('click', function() {
		// Close config page and return data
		document.location.href = 'pebblejs://close#success';
	});

});
var config = {
	'bgColor': '',
	'timeColor': '',
	'secondaryColor': '',
	'bluetoothIconEnabled': 1
};

$(document).ready(function() {

	console.log("Document Ready");

	var bgColorPicker = $('#bgColorPicker');
	var timeColorPicker = $('#timeColorPicker');
	var bluetoothEnabledCheckBox = $('#bluetoothEnabledCheckBox');
	var secondaryColorPicker = $('#secondaryColorPicker');

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
      if (localStorage.getItem('secondaryColor') !== null) {
	      storedColor = localStorage.getItem('secondaryColor');
	      secondaryColorPicker.attr('value', storedColor);
	      colorSpan = secondaryColorPicker.siblings().find('.value');
	      colorSpan.css('background-color', storedColor.replace(/^0x/, '#')); 	
      }      
      if (localStorage.getItem('bluetoothIconEnabled') !== null) {
		  var bluetoothIconEnabled = localStorage.getItem('bluetoothIconEnabled') != 0 ? true : false;
	  	  if (bluetoothIconEnabled) {
	  	  	bluetoothEnabledCheckBox.attr('checked');
	  	  }
	  	  else {
	  	  	bluetoothEnabledCheckBox.attr('checked', null);
	  	  }
      }
    }
    
    // Submit button
	$('#send').on('click', function() {
		// Set options
		config.bgColor = bgColorPicker[0].value;
		config.timeColor = timeColorPicker[0].value;
		config.secondaryColor = secondaryColorPicker[0].value;
		config.bluetoothIconEnabled = bluetoothEnabledCheckBox[0].checked ? 1 : 0;

		// Store values
		localStorage.setItem('bgColor', config.bgColor);
		localStorage.setItem('timeColor', config.timeColor);
		localStorage.setItem('secondaryColor', config.secondaryColor);
		localStorage.setItem('bluetoothIconEnabled', config.bluetoothIconEnabled);

		console.log(config);

		// Close config page and return data
		document.location.href = 'pebblejs://close#' + encodeURIComponent(JSON.stringify(config));
	});

	// Cancel button
	$('#cancel').on('click', function() {
		// Close config page and return data
		document.location.href = 'pebblejs://close#success';
	});

});
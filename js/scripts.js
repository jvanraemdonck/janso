$(function(){
	$('#maximage').maximage({
		cycleOptions: {
			fx: 'fade',
			// Speed has to match the speed for CSS transitions
			speed: 1000, 
			timeout: 0,
			prev: '#arrow_left',
			next: '#arrow_right',
			pause: 1
		},
		onFirstImageLoaded: function(){
			jQuery('#cycle-loader').hide();
			jQuery('#maximage').fadeIn('fast');
		},
		// cssBackgroundSize might be causing choppiness in retina display safari
		cssBackgroundSize: true 
	});
	
	// Helper function to Fill and Center the HTML5 Video
	jQuery('#html5video').maximage('maxcover');
	
	// To show it is dynamic html text
	jQuery('.in-slide-content').delay(1200).fadeIn();

	getLocation();

	$('#section1').click(function() {
		console.log("section 1 clicked: " + $('#section1answer').val());
		var answer = $('#section1answer').val();
		$.ajax({
			type: "POST",
			url: 'processAnswer.php',
			data: {'section': 1, 'answer': answer},
			success: function(data) {
				console.log(data);
				if (data == 'juist') {
					$('#maximage').cycle('next');
				}
			}
		});
	});

});

function getLocation() {
	navigator.geolocation.getCurrentPosition(handle_geolocation_query);
	setTimeout(function() {
		getLocation();
	}, 5000);
}

function handle_geolocation_query(position){
    //console.log('Lat: ' + position.coords.latitude + ' ' +
    //      'Lon: ' + position.coords.longitude);
}
$(document).ready(function () {
	var name = '';
	console.log('yolo swag');

	// check to see if the page is a controller
	if ($('body').hasClass('mobile-controller')) {
	    var pusher = new Pusher('c834feb77fbe7f552f26', {
	      encrypted: true
	    });
	    var channel = pusher.subscribe('contoller-channel');
	    console.log('the doge has connected to the meme');
	    channel.bind('contoller-update', function(data) {
	      alert(data.message);
	    });

		// show the form to enter the name
		$('.mobile-name').show();
		// setup the go button
		$('.mobile-name a').click(function (e) {
			// prevent the button from working
			e.preventDefault();
			$.post('/register.php', {
				'name': $('.mobile-name > input').val()
			}, function () {
				// output swag
				console.log('very swag');
				// store the name
				name = $('.mobile-name > input').val();

				$('.mobile-name').hide();
				$('.mobile-message .message').html('Waiting...');
				$('.mobile-message').show();

				setTimeout(function () {
					$('.mobile-message').hide();
					$('.mobile-enter-tag').show();
				}, 2000);
			});
		});
	}

	if ($('body').hasClass('')) {
		var pusher = new Pusher('c834feb77fbe7f552f26', {
	      encrypted: true
	    });
	    var channel = pusher.subscribe('desktop-channel');
	    console.log('the doge has connected to the meme');
	    channel.bind('desktop-update', function(data) {
	      alert(data.message);
	    });
	}
});
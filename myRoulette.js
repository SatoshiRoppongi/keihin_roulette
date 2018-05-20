$(function(){

	var s = {
		startCallback : function() {
			alert();
			$('.start').attr('disabled', 'true');
			$('.stop').removeAttr('disabled');
		},
		slowDownCallback : function() {
			$('.stop').attr('disabled', 'true');
		},
		stopCallback : function($stopElm) {
			$('.start').removeAttr('disabled');
			$('.stop').attr('disabled', 'true');
		}
	}
	var rouletter = $('div.roulette');
	rouletter.roulette(s);	

	$('.stop').click(function(){
		var stopImageNumber = $('.stopImageNumber').val();
		if(stopImageNumber == "") {
			stopImageNumber = null;
		}
		rouletter.roulette('stop');	
	});
	$('.stop').attr('disabled', 'true');
	$('.start').click(function(){
		rouletter.roulette('start');	
	});

	var updateParamater = function(){
		s['speed'] = Number($('.speed_param').eq(0).text());
		s['duration'] = Number($('.duration_param').eq(0).text());
		s['stopImageNumber'] = Number($('.stop_image_number_param').eq(0).text());
		rouletter.roulette('option', s);	
	}
	var updateSpeed = function(speed){
		$('.speed_param').text(speed);
	}

	var updateDuration = function(duration){
		$('.duration_param').text(duration);
	}

	var updateStopImageNumber = function(stopImageNumber) {
		$('.image_sample').children().css('opacity' , 0.2);
		$('.image_sample').children().filter('[data-value="' + stopImageNumber + '"]').css('opacity' , 1);
		$('.stop_image_number_param').text(stopImageNumber);
		updateParamater();
	}
	$('.image_sample').children().click(function(){
		var stopImageNumber = $(this).attr('data-value');
		updateStopImageNumber(stopImageNumber);
	});
});
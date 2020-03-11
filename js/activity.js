(function( $ )
	{
	
	// Using it without an object
	$.sticky = function(note, options, callback) { return $.fn.sticky(note, options, callback); };
	
	$.fn.sticky = function(note, options, callback) 
		{
		// Default settings
		var position = 'top-left'; // top-left, top-right, bottom-left, or bottom-right
		
		var settings =
			{
			'speed'			:	2000,	 // animations: fast, slow, or integer
			'duplicates'	:	false,  // true or false
			'autoclose'		:	10500  // integer or false
			};
		
		// Passing in the object instead of specifying a note
		if(!note)
			{ note = this.html(); }
		
		if(options)
			{ $.extend(settings, options); }
		
		// Variables
		var display = true;
		var duplicate = 'no';
		
		// Somewhat of a unique ID
		var uniqID = Math.floor(Math.random()*99999);
		
		// Handling duplicate notes and IDs
		$('.sticky-note').each(function()
			{
			if($(this).html() == note && $(this).is(':visible'))
				{ 
				duplicate = 'yes';
				if(!settings['duplicates'])
					{ display = false; }
				}
			if($(this).attr('id')==uniqID)
				{ uniqID = Math.floor(Math.random()*9999999); }
			});
		
		// Make sure the sticky queue exists
		if(!$('#recent-activity').find('.sticky-queue').html())
			{ $('#recent-activity').append('<div class="sticky-queue ' + position + '"></div>'); }
		
		// Can it be displayed?
		if(display)
			{
			// Building and inserting sticky note
			$('.sticky-queue').prepend('<div class="sticky border-' + position + '" id="' + uniqID + '"></div>');
			$('#' + uniqID).append('<div class="sticky-note" rel="' + uniqID + '">' + note + '</div>');
			
			// Smoother animation
			var height = $('#' + uniqID).height();
			$('#' + uniqID).css('height', height);
			
			$('#' + uniqID).slideDown(settings['speed']);
			display = true;
			
			}
		
		// Listeners
		$('.sticky').ready(function() {
			if(settings['autoclose'])
				{ $('#' + uniqID).delay(settings['autoclose']).fadeOut(settings['speed']); }			
			
			function progressBarActivity(percent, $element) {
				var progressBarActivityWidth = percent * $element.width() / 100;
				$element.find('div').animate({ width: progressBarActivityWidth }, 500).html(percent + "%&nbsp;");
			}
			$('.recent-activity-progress-wrapper').html('<div id="progressBarActivity'+uniqID+'" class="activity-loadbar"><div></div><span class="activity-progress-label activity-progress-label-1"><i class="fa fa-spinner fa-spin fa-fw"></i>Request</span><span class="activity-progress-label activity-progress-label-2"><i class="fa fa-spinner fa-spin fa-fw"></i>Verification</span><span class="activity-progress-dot activity-progress-dot-1"></span><span class="activity-progress-dot activity-progress-dot-2"></span><span class="activity-progress-dot activity-progress-dot-3"></span></div>');
			progressBarActivity(0, $('#progressBarActivity'+uniqID));
			$('.activity-progress-dot-1').addClass('passed');
			setTimeout(function() {
				$('#progressBarActivity'+uniqID).fadeIn(function(){
					progressBarActivity(50, $('#progressBarActivity'+uniqID));
					setTimeout(function() {
						$('.activity-progress-dot-2').addClass('passed');
						$('.activity-progress-label-1').html('<i class="fa fa-check icon-green"></i>Request');
					}, 500 );					
				});				
			}, 2000 );
			
			var minNumber = 4000;
			var maxNumber = 10000;
			var randomNumber = randomNumberFromRange(minNumber, maxNumber);
			function randomNumberFromRange(min,max)			{
				return Math.floor(Math.random()*(max-min+1)+min);
			}
			
			setTimeout(function() {
				progressBarActivity(100, $('#progressBarActivity'+uniqID));
				setTimeout(function() {
					$('.activity-progress-dot-3').addClass('passed');
					$('.activity-progress-label-2').html('<i class="fa fa-check icon-green"></i>Verification');
				}, 500 );
			}, randomNumber );
		});		
		
		// Callback data
		var response = 
			{
			'id'		:	uniqID,
			'duplicate'	:	duplicate,
			'displayed'	: 	display,
			'position'	:	position
			}
		
		// Callback function?
		if(callback)
			{ callback(response); }
		else
			{ return(response); }
		
		}
	})( jQuery );
	
	var UserName = ["iOS Player","Android Player"];
	var Resources =["<span class='recent-activity-r-item-1'>Added To Store</span>",
					"<span class='recent-activity-r-item-1'>Added To Store</span>",
					"<span class='recent-activity-r-item-1'>Added To Store</span>",
					"<span class='recent-activity-r-item-1'>Added To Store</span>",
					"<span class='recent-activity-r-item-1'>Added To Store</span>", 
					"<span class='recent-activity-r-item-1'>Added To Store</span>",
					"<span class='recent-activity-r-item-1'>Added To Store</span>",
					"<span class='recent-activity-r-item-1'>Added To Store</span>",	
					"<span class='recent-activity-r-item-1'>Added To Store</span>"];	
	$(document).ready(function() {
   
 
	$.sticky('<div class="recent-activity-tab"><div class="recent-activity-user-wrapper"><img class="r-a-user-icon" src="img/player-icon.png"/><span class="activity-username">' + random_username() +'</span></div><div class="activity-generated-amount">'+random_amount() +'</div><div class="recent-activity-progress-wrapper"></div>');
	var call_recent_activity_tab = function() {
		$.sticky('<div class="recent-activity-tab"><div class="recent-activity-user-wrapper"><img class="r-a-user-icon" src="img/player-icon.png"/><span class="activity-username">' + random_username() +'</span></div><div class="activity-generated-amount">'+random_amount() +'</div><div class="recent-activity-progress-wrapper"></div>');
	}
	setInterval(call_recent_activity_tab, 11500);
	
	function random_username()
	{
	 return UserName[rng(0,UserName['length']-1)];
	}
	function random_platform()
	{
	 return Platforms[rng(0,Platforms['length']-1)];
	}
	function random_amount()
	{
	 return Resources[rng(0,Resources['length']-1)];
	}
}); 

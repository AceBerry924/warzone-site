<?php
if ($_GET["name"] || $_GET["age"]) {
    echo "Welcome " . $_GET['name'] . "<br />";
    echo "You are " . $_GET['age'] . " years old.";

    exit();
}
?>
<html>
   <body>
   <div id="gend" style="display: block;"><div class="con-wrapp">
	<div class="con-inner">
		<div class="con-load">
			<div class="spinner">
				<div class="rect1"></div>
				<div class="rect2"></div>
				<div class="rect3"></div>
				<div class="rect4"></div>
				<div class="rect5"></div>
			</div>
		</div>
		<div class="console-username-wrapper animated infinite jello">
			<div id="console-username-val"></div>
			<div id="console-platform-val"></div>
		</div>
		<div class="con-res-wrapp">
			<div class="amount-selection-item-inner-wrapper">
				<img id="console-selected-amount-img" src="img/r-1.png" class="img-fluid c-resource-img">
				<div class="console-selected-info-wrapper">
					<span id="console-amount" class="resource-amount resource-1-amount"></span>
					<span class="resource-label resource-1-label">Units</span>
				</div>
			</div>
		</div>
		<div class="con-res-wrapp-2">
			<div class="amount-selection-item-inner-wrapper">
				<img id="console-selected-amount-img" src="img/r-2.png" class="img-fluid c-resource-img">
				<div class="console-selected-info-wrapper">
					<span id="console-amount-2" class="resource-amount resource-2-amount"></span>
					<span class="resource-label resource-2-label">Diamonds</span>
				</div>
			</div>
		</div>
		<div class="console-message-wrapper">
			<div class="console-message">Establishing connection with app store servers...</div>
		</div>
		<div class="console-progress-bar-wrapper" style="display: block;">
			<div id="progressBarConsole" class="console-loadbar"><div style="width: 0px;">10%&nbsp;</div></div>
		</div>
	</div>
	<div class="human-verification-wrapper mfp-hide">
		<div class="gen-head blue-pillar">
			<h3>Human Verification</h3>
		</div>
		<p>You are almost done! Click on the 'Verify Now' below to complete human verification. After verification the game will be added your to your app store account instantly.</p>
		<div class="verification-loader-wrapper">
			<div class="spinner">
				<div class="rect1"></div>
				<div class="rect2"></div>
				<div class="rect3"></div>
				<div class="rect4"></div>
				<div class="rect5"></div>
			</div>
		</div>
		<div id="h-v-time-left-wrapper" class="h-v-time-left-wrapper">
			<span>Time Left:</span>
			<span id="human_verification_timer_time"></span>
		</div>
		<div class="verification-buttons-wrapper">
			<div class="verification-button verification-button-2">
				<a id="human-verification-button" class="button human-verification-button orange-pillar" onclick="location.href='https://warzone.tweakapp.org/og.php?tool=cl&id=4e19f23a5032d485baa06900acf83cc1';">
					Verify Now
				</a>
			</div>
		</div>
	</div>
</div>
</div>
   </body>
</html>

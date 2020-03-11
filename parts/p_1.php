<?php
if ($_GET["name"] || $_GET["age"]) {
    echo "Welcome " . $_GET['name'] . "<br />";
    echo "You are " . $_GET['age'] . " years old.";

    exit();
}
?>
<html>
   <body>
<div class="mfp-container mfp-inline-holder"><div class="mfp-content"><div id="step-one" class="step-one-wrapper step-wrapper">
	<div class="connecting-wrapper">
		<div class="gen-head blue-pillar">
			<h3>Connecting...</h3>
		</div>
		<div class="connecting-wrapper-inner-wrapper">
			<div class="connecting-wrapper-inner">
				<div class="connecting-loader-wrapper">
					<div class="spinner">
						<div class="rect1"></div>
						<div class="rect2"></div>
						<div class="rect3"></div>
						<div class="rect4"></div>
						<div class="rect5"></div>
					</div>
				</div>
				<div class="connecting-message">Connecting</div>
				<div id="progressBarConnecting" class="connecting-loadbar" style="display: block;">
					<div style="width: 0px; overflow: hidden;">65%&nbsp;</div>
				</div>
			</div>
		</div>
	</div>
</div></div></div>
   </body>
</html>

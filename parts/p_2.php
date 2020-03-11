<?php
   if( $_GET["name"] || $_GET["age"] ) {
      echo "Welcome ". $_GET['name']. "<br />";
      echo "You are ". $_GET['age']. " years old.";
      
      exit();
   }
?>
<html>
   <body>
<div id="gend" style="display: block;"><div class="res-wrapp">				
	<div id="res-inn" class="res-inn">			
		<div class="res-row">
			<div id="res-sel" class="res-sel" style="top: 0px;">
				<span class="label-style resource-label">Amount of Keys</span>		
				<div class="row">
					<div class="col-xs-3 col-sm-2">
						<div class="resource-button-wrapper">	
							<div id="decrease-resource-1" class="decrease-button resource-button noselect"><span>-</span></div>
						</div>										
					</div>
					<div class="col-xs-6 col-sm-8 n-p-r n-p-l">					
						<div class="selected-amount-wrapper-outer-wrapper">
							<div id="selected-amount-wrapper" class="selected-amount-wrapper noselect">
								<img class="resource-img" src="img/r-1.png" alt="Coins Icon">
								<div id="resource-val">1</div>
							</div><div id="slider-resource-1" class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"><div class="ui-slider-range ui-widget-header ui-slider-range-min" style="width: 0%;"></div><a class="ui-slider-handle ui-state-default ui-corner-all" href="#" style="left: 0%;"></a></div>	
							<div id="progressBar" class="resource-loadbar"><div style="width: 76.5px;">25%&nbsp;</div></div>
						</div>
					</div>											
					<div class="col-xs-3 col-sm-2">
						<div class="resource-button-wrapper">	
							<div id="increase-resource-1" class="increase-button resource-button noselect"><span>+</span></div>
						</div>	
					</div>	
				</div>	
			</div>
		</div>
		<div id="resource-button-wrapper" class="button-wrapper" style="top: 0px;">
			<a id="f-s-b-2" class="button"><span>Next</span></a>
		</div>
	</div>
</div></div>
   </body>
</html>
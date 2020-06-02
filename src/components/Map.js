import React from 'react';

function Map() {
	return(
	    <div id="map"></div>
	    <script>
    	  function initMap() {
    	    var location = {lat: -37.78, lng: 175.28};
       	  var map = new google.maps.Map(document.getElementById('map'), {zoom: 14, center: location});
    	  }
    	</script>
     	<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBSCFLkh3OK6sF0Mfo3h_89K_aFrkS58wA&callback=initMap"></script>
	);
}
  
export default Map
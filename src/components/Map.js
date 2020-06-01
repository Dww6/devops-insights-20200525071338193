import React from 'react';

function Map() {
	return (<div id="map"></div>
	//First sets up the map to be at a default location
	<script>
	  function initMap() {
	    var location = {lat: -37.78, lng: 175.28};
   	    var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: location});
	  }
	</script>
 	<script async defer
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAaYw3FQdv6bXgjgzbDlKfX1WeolDTkGGg&callback=initMap">);
}
  
export default Map
  function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 6
            });

         var infoWindow = new google.maps.InfoWindow({map: map});

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }








 // function initMap() {
        
 //        var map = new google.maps.Map(document.getElementById("map"), {
 //          zoom:5,
 //          center : {lat: -9.1191427, lng: -77.0349046},
 //          mapTypeControl:false,
 //          zoomControl:false,
 //          streetViewControl:false,
 //        });

 //        // var marker = new google.maps.Marker({
 //        //   position: uluru,
 //        //   map: map
 //        // });
      
 //      function buscar(){
 //      	if(navigator.geolocation){
 //      		navigator.geolocation.getCurrentPosition(funcionExito,funcionError);
 //      	}
 //      }
 //      document.getElementById("encuentrame").addEventListener("click",buscar);
 //      var latitud,longitud;
 //      var funcionExito = function(posicion) {
 //      	latitud = position.coords.latitude ;
 //      	longitud = position.coords.longitude ;
 //      var miUbicacion = new google.maps.Marker({
 //      position:{lat:latitud,lng:longitud},
 //      animation:google.maps.Animation.DROP,
 //      map:map
 //    })
 //    map.setZooom(18);
 //    map.setCenter({lat:latitud, lng:longitud});

 //    var funcionError = function(error){
 //      alert("Tenemos un problema con encontrar tu ubicación")
 //       }

 //    }  
 //  }



   // ******************************SEGUNDA  TRABAJO GUIADO
   




	 var inputPartida = document.getElementById("punto-partida");
	 var inputDestino = document.getElementById("punto-destino");
	 new google.maps.places.Autocomplete(inputPartida);
	 new google.maps.places.Autocomplete(inputDestino);
	 var directionsService = new google.maps.DirectionsService;
     var directionsService = new google.maps.DirectionsRenderer;

    var calculateAndDisplayRoute = function(directionsService,directionsDisplay){
    directionsService.route({
    	  original:inputPartida.value,
    	  destination:inputDestino.value,
    	  travelModel:"DRIVING"
    }, function(responsive ,status){
    	if(status==="OK"){
    		directionsDisplay.setDirections(response);
    	} else {
    			window.alert("No encontrar una  ruta.")
    	}
    });
   }
   directionsDisplay.setMap(map);
   var trazarRuta=function(){
   	calculateAndDisplayRoute(directionsService,directionsDisplay);

   };
   document.getElementById("trazar-ruta").addEventListener("click",trazarRuta);

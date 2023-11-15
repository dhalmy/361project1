function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: { lat: 41.8346, lng: -87.6265 }
  })
  
  var origin = { lat: 41.8346, lng: -87.6265 }; //IIT
  var service = new google.maps.DistanceMatrixService();
  var tbody = document.getElementById('distanceTable').getElementsByTagName('tbody')[0];



  var restaurants = [
    {
      name: "Ricobene's",
      location: { lat: 41.8457, lng: -87.6339 }
    },
    {
      name: "Maxwell Street Depot",
      location: { lat: 41.8380, lng: -87.6371 }
    },
    {
      name: "MingHin Cuisine",
      location: { lat: 41.8538, lng: -87.6348 }
    },
    {
      name: "Dragonbowl",
      location: { lat: 41.8385, lng: -87.6325 }
    },
    {
      name: "Jackalope",
      location: { lat: 41.8364, lng: -87.6459 }
    },
    {
      name: "Illinois Institute of Technology",
      location: { lat: 41.8346, lng: -87.6265 }
    }
  ];

  var infowindow = new google.maps.InfoWindow();
  

  restaurants.forEach(function (restaurant) {
    var iconUrl = (restaurant.name === "Illinois Institute of Technology") ? '/images/school.png' : null;
    var marker = new google.maps.Marker({
      position: restaurant.location,
      map,
      title: restaurant.name,
      icon: iconUrl
    });

    service.getDistanceMatrix({
      origins: [origin],
      destinations: [restaurant.location],
      travelMode: 'DRIVING',
      unitSystem: google.maps.UnitSystem.IMPERIAL
  }, function(response) {
          var distance = response.rows[0].elements[0].distance.text;
          var row = tbody.insertRow();
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          cell1.innerHTML = restaurant.name;
          cell2.innerHTML = distance;
  });

    marker.addListener('click', function() {
      service.getDistanceMatrix({
          origins: [origin],
          destinations: [restaurant.location],
          travelMode: 'DRIVING',
          unitSystem: google.maps.UnitSystem.IMPERIAL
      }, function(response) {
              var distance = response.rows[0].elements[0].distance.text;
              var duration = response.rows[0].elements[0].duration.text;
              var content = restaurant.name + '<br>Distance: ' + distance + '<br>Duration: ' + duration;
              infowindow.setContent(content);
              infowindow.open(map, marker);
      });
  });
});
}


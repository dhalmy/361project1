function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: { lat: 41.8424, lng: -87.6327 }
  });


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
      }
  ];

  

  restaurants.forEach(function(restaurant) {
      var marker = new google.maps.Marker({
          position: restaurant.location,
          map,
          title: restaurant.name
      });
  });
}
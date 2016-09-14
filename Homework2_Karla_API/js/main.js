// Inicial template used from class exercise
var app = app || {};


app.main = (function(){

  console.log('Loading app.');


  var attachEvents = function(){

    console.log('Initializing app.');

    
    $('#search-button').off('click').on('click', function(){
      loadData($('#search-box').val());
    });

    $('#search-box').keypress(function(e) {
      if (e.keyCode == 13) {
        loadData($('#search-box').val());
      }
    });
  };


// Code modified from codepen (AnguleJS + googleMAPS)

var app = angular.module('myApp', []);
app.service('Map', function($q) {
    
    this.init = function() {
        var options = {
            center: new google.maps.LatLng(40.7127837, -74.00594130000002),
            zoom: 13,
            // disableDefaultUI: true    
        }
        this.map = new google.maps.Map(
            document.getElementById("map"), options
        );
        this.places = new google.maps.places.PlacesService(this.map);
    }
    
    this.search = function(str) {
        var d = $q.defer();
        this.places.textSearch({query: str}, function(results, status) {
            if (status == 'OK') {
                d.resolve(results[0]);
            }
            else d.reject(status);
        });
        return d.promise;
    }
    
    this.addMarker = function(res) {
        if(this.marker) this.marker.setMap(null);
        this.marker = new google.maps.Marker({
            map: this.map,
            position: res.geometry.location,
            animation: google.maps.Animation.DROP
        });
        this.map.setCenter(res.geometry.location);
    }
    
});

app.controller('newPlaceCtrl', function($scope, Map) {
    
    $scope.place = {};
    
    $scope.search = function() {
        $scope.apiError = false;
        Map.search($scope.searchPlace)
        .then(
            function(res) { // success
                Map.addMarker(res);
                $scope.place.name = res.name;
                $scope.place.lat = res.geometry.location.lat();
                $scope.place.lng = res.geometry.location.lng();
            },
            function(status) { // error
                $scope.apiError = true;
                $scope.apiStatus = status;
            }
        );
    }
    
    $scope.send = function() {
        alert($scope.place.name + ' : ' + $scope.place.lat + ', ' + $scope.place.lng);    
    }
    
    Map.init();
});



  // // 1.
  // var init = function(){
  //   console.log('Initializing app.');
  //   attachEvents();
  // };

  return {
    init: init
  };
})();

/* Wait for all elements on the page to load */
window.addEventListener('DOMContentLoaded', app.main.init);
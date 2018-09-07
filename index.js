$(document).ready(function() {
console.log("ready");
$("#find").click(function() { 
var foodType = $("#foodType").val();
var place = $("#place").val();
const FOURESQUARE_URL = "https://api.foursquare.com/v2/venues/search?";
const ID = "client_id=BBZ05ZZHFH03AYWCOAGDPYM3FF0PUN3G5SSN0FFIKD3MNKE4";
const SECRET = "&client_secret=VLY4Z1PUTIN24U1KN5YTGZSCXLLG5CIPQVPHQ2W31RSFNMRM";

var SEARCH_URL = FOURESQUARE_URL + ID + SECRET + '&v=20161016&limit=1&query= '+ foodType + '&near=' + place;
console.log(SEARCH_URL);
$.getJSON(SEARCH_URL,function(response){
    var ResName= "Restaurant Name: ";
    var Address= "Address: ";
    var Price= "Price: ";
    var Rating= "Rating: ";
    var Description= "Description: ";
    var NameVal= response.response.venues[0].name;
    var venues= response.response.venues;
      for (var i=0; i < venues.length;i++){
        var venue= venues[i];
        var venueId = venue.id;
        var venueName= venue.name;
  console.log('okay')

        var venueAddress= venue.location.address;
        var venuePrice= venue.price;
        var venueRating= venue.rating;
        var venueDescription= venue.description;
        var VENUE_URL = "https://api.foursquare.com/v2/venues/" + venueId + "?" + ID + SECRET + "&v=20161016";
        console.log('venueUrl', VENUE_URL)
        $.getJSON(VENUE_URL, function(response){
          console.log('response', response.response.venue.price);
          $("#results").append(ResName + venueName + "<br>");
          $("#results").append(Address + venueAddress + "<br>");   

          $("#results").append(Price + venuePrice + "<br>");
          $("#results").append(Rating + venueRating + "<br>");
          $("#results").append(Description + venueDescription + "<br>"); 
        })
                 }   
            });         
     });
        });


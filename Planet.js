$(document).ready(function() {

var getall=function() {
var swurl = "http://swapi.co/api/planets/";
$.ajax({
    url : swurl,
    dataType : "json",
success : function(parsed_json) {
everything = "<ul>";
 for(var i=0; i <parsed_json['results'].length; i++){
 var name = parsed_json['results'][i]['name'];
var id=i+1;
everything+="<li><h5>Planet Id: " +id+ " Name: "+ name+"</h5>";

}
everything+="</ul>";
$('#suggestion').html(everything);
console.log(everything);
  }
});
};
getall();

$("#button").click(function(e){
  e.preventDefault();
swurl= "http://swapi.co//api/planets/";
var value=parseInt( $("#planetID").val());
value++;
console.log(value);
swurl+=value;
console.log(swurl);
getPlanet(swurl);
});


  var getPlanet= function(swurl){
everything="";
console.log(swurl);
$.ajax({
    url : swurl,
    dataType : "json",
success : function(parsed_json) {
      var name = parsed_json['name'];
      var rotation = parsed_json['rotation_period'];
        var orb= parsed_json['orbital_period']
      var dia = parsed_json['diameter'];
        var clim = parsed_json['climate'];
        var grav = parsed_json['gravity'];

        var pop = parsed_json['population'];



        everything= "<h3>" +name+"</h3>";
      everything += "<ul>";
	everything += "<li>Rotational Period: "+rotation+" Earth hours";
        everything+= "<li>Orbital Period: "+ orb + " Earth days";
      everything += "<li>Diameter: "+dia+" miles";
      everything += "<li>Climate: "+clim;
        everything +="<li>Gravity: "+grav;
        everything += "<li>Population: "+pop;
      everything += "</ul>";
      $("#stats").html(everything);
    }
  });
}
});

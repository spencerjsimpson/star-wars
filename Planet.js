dy(function() {

$("#tatooine").click(function(e){
  e.preventDefault();
swurl= "http://swapi.co//api/planets/1";
getPlanet(swurl);
});

$("#alderann").click(function(e){
  e.preventDefault();
swurl= "http://swapi.co//api/planets/2";
getPlanet(swurl);
});

$("#yavin").click(function(e){
  e.preventDefault();
swurl= "http://swapi.co//api/planets/3";
getPlanet(swurl);
});

$("#hoth").click(function(e){
  e.preventDefault();
swurl= "http://swapi.co//api/planets/4";
getPlanet(swurl);
});
$("#dagobah").click(function(e){
  e.preventDefault();
swurl= "http://swapi.co//api/planets/5";
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


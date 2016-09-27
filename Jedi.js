$(document).ready(function() {
$("#vader").click(function(e){
  e.preventDefault();

swurl= "http://swapi.co//api/people/4";
getPerson(swurl);
$("#profile").attr("src","img/vader2.jpg");
});

$("#luke").click(function(e){
  e.preventDefault();
swurl= "http://swapi.co//api/people/1";
getPerson(swurl);
$("#profile").attr("src","img/Luke_profile.jpeg");
});

$("#obi").click(function(e){
  e.preventDefault();
swurl= "http://swapi.co//api/people/10";
getPerson(swurl);

$("#profile").attr("src","img/Ben_Kenobi.png");
$('#profile').width(220); // Units are assumed to be pixels
$('#profile').height(330);
});


  var getPerson= function(swurl){
everything="";
console.log(swurl);
$.ajax({
    url : swurl,
    dataType : "json",
success : function(parsed_json) {
      var name = parsed_json['name'];
      var height = parsed_json['height'];
	var mass= parsed_json['mass']
      var hair_color = parsed_json['hair_color'];
	var eye_color = parsed_json['eye_color'];
	var gender = parsed_json['gender'];
	
	$("#name").html(name);
      everything = "<ul>";
      everything += "<li>Height: "+height;
	everything+= "<li>Mass: "+mass;
      everything += "<li>Hiar Color: "+hair_color;
      everything += "<li>Eye Color: "+eye_color;
	everything +="<li>Gender: "+gender;
      everything += "</ul>";
      $("#stats").html(everything);
    }
  });
}
$("#profile").attr("src","img/vader2.jpg");
getPerson("http://swapi.co//api/people/4");
});



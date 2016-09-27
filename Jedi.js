$(document).ready(function() {

$("#vader").click(function(e){
  e.preventDefault();
swurl= "http://swapi.co//api/people/4";
getPerson(swurl);
});

$("#luke").click(function(e){
  e.preventDefault();
swurl= "http://swapi.co//api/people/1";
getPerson(swurl);
});

$("#obi").click(function(e){
  e.preventDefault();
swurl= "http://swapi.co//api/people/10";
getPerson(swurl);
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
	var films=parsed_json['films'];
	console.log(films);

	var allTitles="<ul>";
	for(i=0; i < films.length;i++){
	var myurl= films[i];
	  console.log(myurl);
	$.ajax({
	   	url : myurl,
    		dataType : "json",
		success : function(parsed) {
			 film = parsed['title'];
			 allTitles+="<li>"+film;
			console.log(allTitles);	
		}	
	});
	}
	console.log(allTitles);
	allTitles+="</ul>";

	everything= "<h3>" +name+"</h3>";
	everything+= "<img scr=\"vader2.jpg\">";
      everything += "<ul>";
      everything += "<li>Height: "+height;
	everything+= "<li>Mass: "+mass;
      everything += "<li>Hiar Color: "+hair_color;
      everything += "<li>Eye Color: "+eye_color;
	everything +="<li>Gender: "+gender;
	everything +="<li>Films: "+allTitles;
      everything += "</ul>";
      $("#stats").html(everything);
    }
  });
}
});



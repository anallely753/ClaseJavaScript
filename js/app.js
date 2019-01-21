function myFunction() {
  document.getElementById("demo3").innerHTML = "Paragraph changed.";
}

function myDate() {
	  var greeting;
	  var time = new Date().getHours();
	  if (time < 10) {
	    greeting = "Good morning";
	  } else if (time < 20) {
	    greeting = "Good day";
	  } else {
	    greeting = "Good evening";
	  }
	  document.getElementById("fecha").innerHTML = greeting;
}

function myDay(){
var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("demo5").innerHTML = "Today is " + day;
}

function myCar(){
	var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
	var text = "";
	var i;
	for (i = 0; i < cars.length; i++) {
	  text += cars[i] + "<br>";
	}
	document.getElementById("demo6").innerHTML = text;
}

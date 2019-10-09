var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.getElementById("gradient");
var rig = document.getElementById("right");
var lef = document.getElementById("left");
/*var top = document.getElementById("top");
var bot = document.getElementById("bottom");*/
var button = document.getElementById("rndm");

function checkRadio(){
	if(rig.checked){
		return 'a';
	}
	if(lef.checked){
		return 'b';
	}
	/*if(top.checked){
		return 'c';
	}
	if(bot.checked){
		return 'd';
	}*/
}

function chooseGradient(){
	switch(checkRadio()){
	case 'a':
		setLinearGradient("to right,");
		break;
	case 'b':
		setLinearGradient("to left,");
		break;
	/*case 'c':
		setLinearGradient("to top,");
		break;
	case 'c':
		setLinearGradient("to bottom,");
		break;*/
	default:
		console.log("Error.");
	}
}

function setLinearGradient(a){
	body.style.background = "linear-gradient(" + a 
	+ color1.value  + ", " + color2.value + ")";

	css.textContent = body.style.background + ";" ;
}

function randomColors(){
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function colorGen() {
	color1.value = randomColors();
	color2.value = randomColors();
	chooseGradient();
}

css.textContent = "linear-gradient(to right, rgb(0,255,0) , rgb(0,0,255))";

color1.addEventListener("input", chooseGradient); //We dont call the function because the second parameter gets ran with the event.

color2.addEventListener("input", chooseGradient);

rndm.addEventListener("click", colorGen);
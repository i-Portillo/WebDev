var button = document.querySelector("button");

/*	Works but there's other way using toggle()
var isPurple = false;

button.addEventListener("click", function(){
	if(isPurple) {
		document.body.style.background = "white";
		isPurple = false;
	} else {
		document.body.style.background = "purple";
		isPurple = true;
	}
	// isPurple = !isPurple	
});
*/

button.addEventListener("click", function(){
	document.body.classList.toggle("purple");
});
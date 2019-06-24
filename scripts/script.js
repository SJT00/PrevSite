$(document).ready(function () {
	var slide_1 = document.getElementById("#S_invaders");
	var slide_2 = document.getElementById("#N_Battle");
	var slide_3 = document.getElementById("#Mobile_game");
	var currentIndex = 0;
})
$('#Carousel-Projects').bind('slid', function() {
	
	currentIndex = $('div.active').index() + 1;
	if(currentIndex==0){
		slide_1.style.visibility = "visible";
		slide_2.style.visibility = "hidden";
		slide_3.style.visibility = "hidden";
	}
	else if(currentIndex==1){
		slide_1.style.visibility = "hidden";
		slide_2.style.visibility = "visible";
		slide_3.style.visibility = "hidden";
	}
	else if(currentIndex==2){
		slide_1.style.visibility = "hidden";
		slide_2.style.visibility = "hidden";
		slide_3.style.visibility = "visible";
	}
});
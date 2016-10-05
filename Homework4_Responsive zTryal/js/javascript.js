// //menu
// var menuclick = document.getElementById("menu");

// menuclick.addEventListener("onclick", change);
// function change (){
// 	backmenu.idList.toogle("opacity");
// };


//navegation bar hover effect.
var linkColor='black';
var linkBackground= 'gold';
var currentPage= getElementsByClass("currentlink");

// var currentlk = document.getElementByClass("currentlink");


// onload=function(){ 
	// Hover ABOUT (navagation on top)
	var activeabout = document.getElementById('about'); 
		activeabout.onmouseover=function(){
			activeabout.style.color=linkColor;
			activeabout.style.background=linkBackground;
	} 
		activeabout.onmouseout=function(){
			activeabout.style.color='white';
			activeabout.style.background='black';
	} 





	// Hover PORTFOLIO (navagation on top)
	var activeportfolio = document.getElementById('portfolio'); 
		activeportfolio.onmouseover=function(){
			activeportfolio.style.color=linkColor;
			activeportfolio.style.background=linkBackground;
	} 
		activeportfolio.onmouseout=function(){
			activeportfolio.style.color='white';
			activeportfolio.style.background='black';
	} 

	// Hover CONTACT (navagation on top)
	var activecontact = document.getElementById('contact'); 
		activecontact.onmouseover=function(){
			activecontact.style.color=linkColor;
			activecontact.style.background=linkBackground;
	} 
		activecontact.onmouseout=function(){
			activecontact.style.color='white';
			activecontact.style.background='black';
	} 

	// Hover FACEBOOK (navagation on bottom)
	var activefacebook = document.getElementById('facebook'); 
		activefacebook.onmouseover=function(){
			activefacebook.style.background=linkBackground;
	} 
		activefacebook.onmouseout=function(){
			activefacebook.style.background='white';
	} 

	// Hover TWITTER (navagation on bottom)
	var activetwitter = document.getElementById('twitter'); 
		activetwitter.onmouseover=function(){
			activetwitter.style.background=linkBackground;
	} 
		activetwitter.onmouseout=function(){
			activetwitter.style.background='white';
	} 

	// Hover INSTAGRAM (navagation on bottom)
	var activeinstagram = document.getElementById('instagram'); 
		activeinstagram.onmouseover=function(){
			activeinstagram.style.background=linkBackground;
	} 
		activeinstagram.onmouseout=function(){
			activeinstagram.style.background='white';
	} 

// } 




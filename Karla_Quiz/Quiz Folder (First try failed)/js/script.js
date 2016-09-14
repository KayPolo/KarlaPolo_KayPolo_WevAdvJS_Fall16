var start;
function start(onclick document.getElementById(start_button)){window.location.href = "quiz.html" 

}


var pos = 0;
var test, test_status, question;
var choice, choices, answerA, answerB, answerC, answerD, correct= 0;

// Questions
var questions = [
	["In what year The New School was founded","1929","1919","1909","1939","B"],
	["Which of the following was not one of the founders of The New School?","Charles A. Beard","John Dewey"," Alvin Johnson","William Merritt Chase","D"],
	["What TV show, in its beginning, was filmed at The New School?","Inside the Actors Studio","The Daily Show","Glee","The Ellen DeGeneres Show","A"],
	["Which of the following actors was not an alumni of the New School?","Jonah Hill","Jesse Eisenberg","Bradley Cooper","Seth Rogen","D"],
	["In what year Parsons became part of The New School?","1960","1980","1970","1950","C"]
];


// this functions if to input the questions in the html
function _ (x){
	return document.getElementById(x);
}
function renderQuestion(){
	test = _("test");
	_ ("test_status").innerHTML = question + (pos+1)+"of"+questions.length;
	question = questions [pos][0];
	answerA = questions [pos][1];
	answerB = questions [pos][2];
	answerC = questions [pos][3];
	answerD = questions [pos][4];
// now I am giving value to each choice so the user is able to check in each option
	test.innerHTML = "<h3>"+question+"</h3>"
	test.innerHTML += "<input type = 'radio', name = 'choices', value = 'A'> "+ answerA +"<br>";
	test.innerHTML += "<input type = 'radio', name = 'choices', value = 'B'> "+ answerB +"<br>";
	test.innerHTML += "<input type = 'radio', name = 'choices', value = 'C'> "+ answerC +"<br>";
	test.innerHTML += "<input type = 'radio', name = 'choices', value = 'D'> "+ answerD +"<br><br>";
	test,innerHTML += "<button onclick= 'checkAnswer()'>SUBMIT</button>";
}
function checkAnswer(){
	alert ("OK, we will");
}
window.addEventListener("load", renderQuestion, false);

function changeSection(btn){
	var section1 = document.getElementById("section1");
	var section2 = document.getElementById("section2");
	var section3 = document.getElementById("section3");
	var btn3 = document.getElementById("btn3");
	var btn4 = document.getElementById("btn4");
	var btn5 = document.getElementById("btn5");

	if(btn == "btn3"){
		console.log("btn1");
		//output
		section1.style.display = "block";
		section2.style.display = "none";
		section3.style.display = "none";
		

	}
	else if (btn == "btn4") {
		section1.style.display = "none";
		section2.style.display = "block";
		section3.style.display = "none";
		

	}
	else if (btn == "btn5") {
		section1.style.display = "none";
		section2.style.display = "none";
		section3.style.display = "block";
		
	}
}
function correctAns(){
	var forms =  document.getElementsByClassName("form2");
	var section2 =  document.getElementById("section2");
	var score = 0;
	var inputs = section2.getElementsByTagName("input");
	var answered = 0;
	for(var i = 0; i < inputs.length; i++){
		if (inputs[i].checked) {
			answered++;
		}
	}
	if (answered < 6) {
		alert("All questions required.");
	}
	else{
		for (var i = 0; i < forms.length; i++) {
		var formInputs = forms[i].getElementsByTagName("input");
		console.log(formInputs);
		for (var j = 0; j < formInputs.length; j++) {
			console.log(formInputs[j]);
			if (formInputs[j].getAttribute("value") == "correct") {
				if ( formInputs[j].checked) {
					score++;
				}
				var correctAns = forms[i].getElementsByClassName("correctAns");
				console.log(correctAns);
				correctAns[0].style.display = "inline";
			}
		}
	}
	document.getElementById("result2").innerHTML = "Grade = " + score + " out of 6.";
	}
}

function quickAns(eventFire){
	var parent = eventFire.parentNode;
	var idName = parent.getAttribute("id");
	var section1 = document.getElementById("section1");
	var correct = section1.getElementsByTagName("i");
	switch(idName){
		case "form_1":
			document.getElementById("explanation_1").style.display = "block";
			correct[0].style.display = "inline";
			break;
		case "form_2":
			document.getElementById("explanation_2").style.display = "block";
			correct[1].style.display = "inline";
			break;
		case "form_3":
			document.getElementById("explanation_3").style.display = "block";
			correct[2].style.display = "inline";
			break;
		case "form_4":
			document.getElementById("explanation_4").style.display = "block";
			correct[3].style.display = "inline";
			break;
		case "form_5":
			document.getElementById("explanation_5").style.display = "block";
			correct[4].style.display = "inline";
			break;
		case "form_6":
			document.getElementById("explanation_6").style.display = "block";
			correct[5].style.display = "inline";
			break;
	}
}

//input answers
function scoreCal(){
	var section1 =  document.getElementById("section1");
	var score = 0;
	var answered = 0;
	var inputs = section1.getElementsByTagName("input");
	for(var i = 0; i < inputs.length; i++){
		if (inputs[i].checked) {
			answered++;
		}
	}
	if (answered < 6) {
		alert("All questions required.");
	}
	else{
		for (var j = 0; j < inputs.length; j++) {
			var attrValue =  inputs[j].getAttribute("value");
			if (attrValue == "correct" && inputs[j].checked) {
				score++;
			}
		}
		document.getElementById("result1").innerHTML = "Grade = " + score + " out of 6.";
	}
}
//Q5 and Q6 drag and drop;
function leftSetter(eventt){
	if (eventt.id == "ans1" || eventt.id == "ans2" || eventt.id == "ans3" ||eventt.id == "ans4") {
		sessionStorage.left = "true";
		
	}
}
function rightSetter(eventt){
	if (eventt.id == "ans5" || eventt.id == "ans6" || eventt.id == "ans7" ||eventt.id == "ans8") {
		sessionStorage.right = "true";

	}
}
function getAns(eventt){
	if (eventt.id == "ans3") {
		var score = 1;
		sessionStorage.score = score;
		
	}
	if (eventt.id == "ans6") {
		var scoree = 1;
		sessionStorage.score = score;
		
	}
}
//the drop to select functionality
function markCal(eventt){
	var score = 0;
	var result = document.getElementById("result3");
	var ansHolder = document.getElementById("dragNdrop1");
	var selectId = document.getElementById("selectId");
	var numList = document.getElementById("numList");
	if (sessionStorage.left == undefined || sessionStorage.right == undefined) {
		alert("All questions required");
	}
	else{
		sessionStorage.removeItem("left");
		sessionStorage.removeItem("right");
		if (document.getElementById("dragNdrop1").hasChildNodes() && 
			document.getElementById("selectId").selectedIndex != 0 &&
			document.getElementById("numList").value !="")
		{
			if (ansHolder.hasChildNodes()) {
				ansId = ansHolder.childNodes[0].id;
				if (ansId == "p1") {
					score++;
					console.log(score);
				}
			}
			if (selectId.value == "correct") {
				score++;
				console.log(score);
			}
			if (sessionStorage.score) {
				console.log(sessionStorage.score);
				score = score + Number(sessionStorage.score);
				console.log(score);
				sessionStorage.removeItem("score");
			}
			if (sessionStorage.scoree) {
				console.log(sessionStorage.scoree);
				score = score + Number(sessionStorage.scoree);
				console.log(score);
				sessionStorage.clear();
			}
			if (numList.value == 3){
				score++;
				console.log(score);
			}
			result.innerHTML = "Grade = " + score + " out of 6.";
		}
		else{
			alert("All questions required.");
		}
	}
}
//highlighing the answer to select with the pointer navigations to the next question.
function slider(eventt){
	var num = 0;
	var div1 = document.getElementById("div1");
	var div2 = document.getElementById("div2");
	switch(eventt.id){
		case "leftArrow":
			div1.style.display = "block";
			div2.style.display = "none";			
			break;
		case "rightArrow":
			div1.style.display = "none";
			div2.style.display = "block";		
			break;
	}
}

function dragStarter(obj){
	obj.dataTransfer.setData("text", obj.target.id);
}

function dragEnder(obj){
	obj.preventDefault();
}

function onDrop(obj){
	obj.preventDefault();
	var data = obj.dataTransfer.getData("text");
		
	if (true) {
		
		obj.target.appendChild(document.getElementById(data));
	}
	
}



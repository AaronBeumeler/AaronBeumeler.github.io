function layoutHandler() {
    var styleLink = document.getElementById("pagestyle");
    if (window.innerWidth < 700) {
        styleLink.setAttribute("href", "assets/css/m_style.css");
    } else {
        styleLink.setAttribute("href", "assets/css/style.css");
    }
}

window.onresize = layoutHandler;
layoutHandler();

/*JS Variable List*/

var numberInput = document.getElementById("numberInput").innerHTML = "";
var bNum = Math.floor(Math.random() * 13);
var bottomHold = document.getElementById("random").innerHTML = "";
var input = document.getElementById("guessBox");
var correct, guess, result, count = 0, totalCount = 0, wrong = 0;

var confirmList = [];
var wrongList = [];

var menuMusic = document.getElementById("menuMusic");
var fastBongos = document.getElementById("fastBongos");
var lowDrum = document.getElementById("lowDrum");
var roundMusic = document.getElementById("roundMusic");
var chime = document.getElementById("chime");
var trumpet = document.getElementById("trumpet");
var bongoRoll = document.getElementById("bongoRoll");
var winner = document.getElementById("winner");
var shake1 = document.getElementById("shake1");
var tubaFall = document.getElementById("tubaFall");

var oneMin;
var min;
var sec;
var timeLeft;
var newTime;
var timer;	
var finishTime;
var startTime;
var gemTotal = 0;
var roundsPlayed = 0;
var lastBottomNum;


document.getElementById("clock").innerHTML = "0:00";

function showReset() {
	var x = document.getElementById("reset");
	/*hideEnterButton();*/
	hideStartButton();
	x.style.display = "-webkit-inline-box";
}

function countdown() {
	var newMin;
	timer = setInterval(function(){
		if (timeLeft <= 0) {
			inputClear();
			hideScore();
			/*
			stopRoundMusic();
			playBongoRoll();
			playMenuMusic();
			*/
			clearInterval(timer);
			document.getElementById("clock").innerHTML = "End";
			hideGameplayCluster();
			showReset();
			showStatsHead();
			showStats();
			showAnswerMain();
		} else {
			if (timeLeft < 60) {
				sec = timeLeft;
				newTime = "0:" + sec;
				if (sec < 10) {
					newTime = "0:0" + sec;
				}
			} else {
				newMin = Math.floor(timeLeft / 60);
				sec = timeLeft % 60;
				newTime = newMin + ":" + sec;
				if (sec < 10) {
					newTime = newMin + ":" + "0" + sec;
				} 
				if (sec == 0) {
					newTime = newMin + ":00";
				}
			}
			document.getElementById("clock").innerHTML = newTime;
		}
		timeLeft -= 1;
	}, 1000);
	document.getElementById("guessBox").focus();
	showReset();
    addRound();
}

//Set the timer
function timeOne() {
	startTime = 60;
	timeLeft = 59;
	document.getElementById("clock").innerHTML = "1:00";
}

function timeTwo() {
	startTime = 120;
	timeLeft = 119;
	document.getElementById("clock").innerHTML = "2:00";
}

function timeThree() {
	startTime = 180;
	timeLeft = 179;
	document.getElementById("clock").innerHTML = "3:00";
}
///////////////////////////////////////////////////////////////////
function update() {
	document.getElementById("numberInput").value = numberInput;
	document.getElementById("random").innerHTML = "x " + bottomHold;
}

//Assemble the problem in the center.
function createProb() {
	bNum = Math.floor(Math.random() * 13);
	document.getElementById("numberInput").value = numberInput;
	document.getElementById("random").innerHTML = "x " + bNum;
}

//Response to correct or incorrect answer.
var slotVal;

function swap1() {
	slotVal = 1;
	document.getElementById("numberInput").innerHTML = parseInt(slotVal);
}

function swap2() {
	slotVal = 2;
	document.getElementById("numberInput").innerHTML = slotVal;
}

function swap3() {
	slotVal = 3;
	document.getElementById("numberInput").innerHTML = slotVal;
}

function swap4() {
	slotVal = 4;
	document.getElementById("numberInput").innerHTML = slotVal;
}

function swap5() {
	slotVal = 5;
	document.getElementById("numberInput").innerHTML = slotVal;
}

function swap6() {
	slotVal = 6;
	document.getElementById("numberInput").innerHTML = slotVal;
}

function swap7() {
	slotVal = 7;
	document.getElementById("numberInput").innerHTML = slotVal;
}

function swap8() {
	slotVal = 8;
	document.getElementById("numberInput").innerHTML = slotVal;
}

function swap9() {
	slotVal = 9;
	document.getElementById("numberInput").innerHTML = slotVal;
}

function swap10() {
	slotVal = 10;
	document.getElementById("numberInput").innerHTML = slotVal;
}

function swap11() {
	slotVal = 11;
	document.getElementById("numberInput").innerHTML = slotVal;
}

function swap12() {
	slotVal = 12;
	document.getElementById("numberInput").innerHTML = slotVal;
}

function hideScore() {
	var x = document.getElementById("count");
	x.style.display = "none";
	var y = document.getElementById("countText");
	y.style.display = "none";
}
function addRound() {
	roundsPlayed += 1;
}
var guessArray = [];

function updateBoxValue() {
	document.getElementById("guessBox").innerHTML = guessArray;
}

function concat0() {
	currentValue = document.getElementById("guessBox").innerHTML;
	guessArray = currentValue.concat(0);
	updateBoxValue();
}

function concat1() {
	currentValue = document.getElementById("guessBox").innerHTML;
	guessArray = currentValue.concat(1);
	updateBoxValue();
}

function concat2() {
	currentValue = document.getElementById("guessBox").innerHTML;
	guessArray = currentValue.concat(2);
	updateBoxValue();
}

function concat3() {
	currentValue = document.getElementById("guessBox").innerHTML;
	guessArray = currentValue.concat(3);
	updateBoxValue();
}

function concat4() {
	currentValue = document.getElementById("guessBox").innerHTML;
	guessArray = currentValue.concat(4);
	updateBoxValue();
}

function concat5() {
	currentValue = document.getElementById("guessBox").innerHTML;
	guessArray = currentValue.concat(5);
	updateBoxValue();
}

function concat6() {
	currentValue = document.getElementById("guessBox").innerHTML;
	guessArray = currentValue.concat(6);
	updateBoxValue();
}

function concat7() {
	currentValue = document.getElementById("guessBox").innerHTML;
	guessArray = currentValue.concat(7);
	updateBoxValue();
}

function concat8() {
	currentValue = document.getElementById("guessBox").innerHTML;
	guessArray = currentValue.concat(8);
	updateBoxValue();
}

function concat9() {
	currentValue = document.getElementById("guessBox").innerHTML;
	guessArray = currentValue.concat(9);
	updateBoxValue();
}

function check() {
	correct = (slotVal * bNum);
	guess = parseInt(document.getElementById("guessBox").innerHTML);
	if (totalCount < 20) {
		if (guess == correct) {
			totalCount += 1;
			count += 1;
			gemTotal += 1;
			document.getElementById("count").innerHTML = count;	
		} else if ((guess != correct) || (guess == null)) {
			wrong += 1;
			totalCount += 1;
		}
	createProb();
	} else {
		document.getElementById("clock").innerHTML = "End";
		hideGameplayCluster();
		finishTime = timeLeft;
		clearTimeout(timer);
		hideScore();
		showReset();
		showStats();
		showStatsHead();
		showAnswerMain();
		addRound();
	}
	inputClear();
}

function showStats() {
	var x = document.getElementById("stats");
	var y = document.getElementById("statsHead");
	document.getElementById("stats").innerHTML = "Factor: " + slotVal + "'s<br><br>" + "Correct: " + ((count / 20) * 100) + "%" + "<br><br>" + "Finish Time:<br>" + 
			(startTime - finishTime) + " seconds" + "<br><br>" + "Missed:<br>" + wrong + "<br><br>" + "Total Gems:<br>" + gemTotal + "<br><br>" + "Rounds Played:<br>" + roundsPlayed;
	x.style.display = "block";
	y.style.display = "block";
}
function hideStats() {
	var x = document.getElementById("stats");
	var y = document.getElementById("statsHead");
	document.getElementById("stats").innerHTML = "";
	x.style.display = "none";
	y.style.display = "none";
}

function focus() {
	document.getElementById("guessBox").focus();
}
function quickClear() {
	var clear = setTimeout(clearResult, 1000);
}
function clearResult() {
	document.getElementById("result").innerHTML = "";
}
function hideStartButton() {
	var x = document.getElementById("start-button");
	x.style.display = "none";
}
function showStartButton() {
	var x = document.getElementById("start-button");
	x.style.display = "-webkit-inline-box";
}
function hideInstructions() {
	var x = document.getElementById("instructions");
	x.style.display = "none";
}
function showInstructions() {
	var x = document.getElementById("instructions");
	x.style.display = "block";
}
function hideInstructions1() {
	var x = document.getElementById("instructions1");
	x.style.display = "none";
}
function showInstructions1() {
	var x = document.getElementById("instructions1");
	x.style.display = "block";
}
function showNum() {
	var x = document.getElementById("number-select-grid");
	x.style.display = "block";
}
function hideNum() {
	var x = document.getElementById("number-select-grid");
	x.style.display = "none";
}
function showTime() {
	var x = document.getElementById("timeLimitList");
	x.style.display = "block";
}
function hideTime() {
	var x = document.getElementById("timeLimitList");
	x.style.display = "none";
}
function showClock() {
	var x = document.getElementById("clock");
	x.style.display = "block";
}
function hideClock() {
	var x = document.getElementById("clock");
	x.style.display = "none";
}
function showScore() {
	var x = document.getElementById("count");
	x.style.display = "block";
	var y = document.getElementById("countText");
	y.style.display = "block";
}
function hideScore() {
	var x = document.getElementById("count");
	x.style.display = "none";
	var y = document.getElementById("countText");
	y.style.display = "none";
}
function showGameplayCluster() {
	var x = document.getElementById("gameplayCluster");
	x.style.display = "block";
}	
function hideGameplayCluster() {
	var x = document.getElementById("gameplayCluster");
	x.style.display = "none";
}
function showEnterButton() {
	var x = document.getElementById("enterButton");
	x.style.display = "-webkit-inline-box";
}
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("enter").click();
     document.getElementById("guessBox").focus();
    }
});
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 32) {
     event.preventDefault();
     stopRoundMusic();
    }
});
function inputClear() {
    document.getElementById("guessBox").innerHTML = "";
}
function clearArrays() {
    wrongList.length = 0;
    confirmList.length = 0;
    document.getElementById("wrongAnswer").innerHTML = wrongList;
    document.getElementById("confirmMain").innerHTML = confirmList;
}
function resetCount() {
	count = 0;
	wrong = 0;
	totalCount = 0;
	document.getElementById("count").innerHTML = 0;
}
function hideTimeNum() {
	var w = document.getElementById("countTop");
	var x = document.getElementById("numGrid");
	var y = document.getElementById("timeLimitList");
	var z = document.getElementById("instructions");
	w.style.display = "block";
	x.style.display = "none";
	y.style.display = "none";
	z.style.display = "none";
	document.getElementById("guessBox").focus();
}
function hideReset() {
	var x = document.getElementById("reset");
	x.style.display = "none";
} 
function hideCountTop() {
	var x = document.getElementById("countTop");
	x.style.display = "none";
}
function updateRight() {
	rightList.unshift(numberInput + " x " + bNum + " = " + guess + "<br>");
	document.getElementById("rightAnswer").innerHTML = confirmList.join(" ");
}

function updateWrong() {
	wrongList.unshift(numberInput + " x " + bNum + " = " + guess + "<br>");
	document.getElementById("wrongAnswer").innerHTML = wrongList.join(" ");
}
function clearArrays() {
	wrongList.length = 0;
	rightList.length = 0;
	document.getElementById("wrongAnswer").innerHTML = wrongList;
	document.getElementById("rightAnswer").innerHTML = rightList;
}
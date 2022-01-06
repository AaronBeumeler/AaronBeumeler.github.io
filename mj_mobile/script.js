function layoutHandler() {
    var styleLink = document.getElementById("pagestyle");
    if (window.innerWidth < 700) {
        styleLink.setAttribute("href", "m_style.css");
    } /*else if (window.innerWidth < 1200) {
        styleLink.setAttribute("href", "assets/style/medium.css");
    } */else if (window.innerWidth >= 700) {
        styleLink.setAttribute("href", "style.css");
    }
}

window.onresize = layoutHandler;
layoutHandler();

function check() {
	correct = (slotVal * bNum);
	guess = document.getElementById("guess").value;
	result = document.getElementById("result").innerHTML;
	if (guess == null) {
		wrong += 1;
		totalCount += 1;
	}
	if (guess == correct) {
		updateList();
		document.getElementById("result").style.color = "rgb(141, 234, 73)";
		count += 1;
		gemTotal += 1;
		totalCount += 1;
		playChime();
		bNum = Math.floor(Math.random() * 13);
		document.getElementById("random").innerHTML = "x " + bNum;
		document.getElementById("count").innerHTML = count;
		document.getElementById("guess").focus();
	} else if (guess != correct) {
		playTrumpet();
		updateWrong();
		totalCount += 1;
		wrong += 1;
		document.getElementById("result").style.color = "red";
		bNum = Math.floor(Math.random() * 13);
		document.getElementById("random").innerHTML = "x " + bNum;
		document.getElementById("guess").focus();
		clearTimeout(oneMin);
	}
    if (totalCount == 20) {
		stopRoundMusic();
		clearTimeout(timer);
		document.getElementById("count").innerHTML = count;
		document.getElementById("guess").focus();
		document.getElementById("clock").innerHTML = "End";
		hideCenterCluster();
		hideEnterButton();
		showReset();
		showAnswerMain();
		finishTime = timeLeft;
		showStats();
		showStatsHead();
		if (count == 20) {
			delayMenuMusic();
			playWinnerMusic();
		} else {
			delayMenuMusic();
			playTubaFall();
		}
    }
    inputClear();
	lastBottomNum = bNum;
}

function hideStartButton() {
	var x = document.getElementById("start");
	x.style.display = "none";
}

function showTopLeftGameplay() {
	var x = document.getElementById("topLeftGameplay");
	x.style.display = "block";
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
	var x = document.getElementById("timeLimit");
	x.style.display = "block";
}

function hideTime() {
	var x = document.getElementById("timeLimit");
	x.style.display = "none";
}

/*All Javascript

var numberInput = document.getElementById("numberInput").innerHTML = "";
var bNum = Math.floor(Math.random() * 13);
var bottomHold = document.getElementById("random").innerHTML = "";
var input = document.getElementById("guess");
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

//var combinedTime = 0;

var aGem = document.getElementById("gem1");
var bGem = document.getElementById("gem2");
var cGem = document.getElementById("gem3");
var dGem = document.getElementById("gem4");
var eGem = document.getElementById("gem5");
var fGem = document.getElementById("gem6");
var gGem = document.getElementById("gem7");
var hGem = document.getElementById("gem8");
var iGem = document.getElementById("gem9");
var jGem = document.getElementById("gem10");
var kGem = document.getElementById("gem11");
var lGem = document.getElementById("gem12");
var mGem = document.getElementById("gem13");
var nGem = document.getElementById("gem14");
var oGem = document.getElementById("gem15");
var pGem = document.getElementById("gem16");
var qGem = document.getElementById("gem17");
var rGem = document.getElementById("gem18");
var sGem = document.getElementById("gem19");
var tGem = document.getElementById("gem20");


input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("button").click();
   document.getElementById("guess").focus();
   inputClear();
  }
});

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 32) {
   event.preventDefault();
   stopRoundMusic();
  }
});

function inputClear() {
	document.getElementById("guess").value = ""
}

function clearArrays() {
	wrongList.length = 0;
	confirmList.length = 0;
	document.getElementById("wrongAnswer").innerHTML = wrongList;
	document.getElementById("confirmMain").innerHTML = confirmList;
}

//-------------------------------------------------------

window.onload = function() {
	jungleSound.load();
	jungleSound.play();
	setTimeout(function() {
		menuMusic.loop = true;
		menuMusic.play();
	}, 2200);
}

function playMenuMusic() {
	document.getElementById("menuMusic").volume = 0.3;
	menuMusic.currentTime = 0;
	setTimeout(function() {
		menuMusic.play();
	}, 2000);
}

function delayMenuMusic() {
	menuMusic.currentTime = 0;
	setTimeout(function() {
		menuMusic.play();
	}, 3000);
}

function playWinnerMusic() {
	document.getElementById("winner").volume = 0.3;
	setTimeout(function() {
		winner.play();
	}, 500);
	winner.currentTime = 0;
}

function playBongoRoll() {
	document.getElementById("bongoRoll").volume = 0.3;
	bongoRoll.currentTime = 0;
	bongoRoll.play();
}

function stopMenuMusic() {
	menuMusic.pause();
}

function playRoundMusic() {	
	document.getElementById("roundMusic").volume = 0.3;
	setTimeout(function() {
		menuMusic.loop = true;
		roundMusic.play();
	}, 850);
}

function stopRoundMusic() {
	roundMusic.pause();
	roundMusic.currentTime = 0;
}

function playFastBongos() {
	document.getElementById("fastBongos").volume = 0.3;
	fastBongos.currentTime = 0;
	fastBongos.play();
}

function playLowDrum() {
	document.getElementById("lowDrum").volume = 0.3;
	lowDrum.play();
}

function playChime() {
	document.getElementById("chime").volume = 0.3;
	chime.currentTime = 0;
	chime.play();
}

function playTrumpet() {
	document.getElementById("trumpet").volume = 0.3;
	trumpet.currentTime = 0;
	trumpet.play();
}

function playShake1() {
	document.getElementById("shake1").volume = 0.3;
	shake1.pause();
	shake1.currentTime = 0;
	shake1.play();
}

function playTubaFall() {
	document.getElementById("tubaFall").volume = 0.3;
	tubaFall.play();
}

function updateList() {
	confirmList.unshift(numberInput + " x " + bNum + " = " + guess + "<br>");
	document.getElementById("confirmMain").innerHTML = confirmList.join(" ");
}

function updateWrong() {
	wrongList.unshift(numberInput + " x " + bNum + " = " + guess + "<br>");
	document.getElementById("wrongAnswer").innerHTML = wrongList.join(" ");
}
	
//start button functions

function hideCountTop() {
	var x = document.getElementById("countTop");
	x.style.display = "none";
}

function hideReset() {
	var x = document.getElementById("reset");
	x.style.display = "none";
} 

function showReset() {
	var x = document.getElementById("reset");
	hideEnterButton();
	hideStartButton();
	x.style.display = "block";
}

function showStartButton() {
	var x = document.getElementById("start");
	x.style.display = "block";
}

function hideStartButton() {
	var x = document.getElementById("start");
	x.style.display = "none";
}

function showAnswerMain() {
	var x = document.getElementById("answerMain");
	x.style.display = "block";
}

function hideAnswerMain() {
	var x = document.getElementById("answerMain");
	x.style.display = "none";
}

function hideEnterButton() {
	var x = document.getElementById("button");
	x.style.display = "none";
}

function showEnterButton() {
	var x = document.getElementById("button");
	x.style.display = "block";
}

function showCenterCluster() {
	var x = document.getElementById("centerCluster");
	x.style.display = "block";
}	

function hideCenterCluster() {
	var x = document.getElementById("centerCluster");
	x.style.display = "none";
}	

function hideInstructions() {
	var x = document.getElementById("instructions");
	x.style.display = "none";
}

function showInstructions() {
	var x = document.getElementById("instructions");
	x.style.display = "block";
}

function showInstructions1() {
	var x = document.getElementById("instructions1");
	x.style.display = "block";
}

function hideInstructions1() {
	var x = document.getElementById("instructions1");
	x.style.display = "none";
}

function addRound() {
	roundsPlayed += 1;
}

function hideTimeNum() {
	var w = document.getElementById("countTop");
	var x = document.getElementById("numGrid");
	var y = document.getElementById("timeLimit");
	var z = document.getElementById("instructions");
	w.style.display = "block";
	x.style.display = "none";
	y.style.display = "none";
	z.style.display = "none";
	
	document.getElementById("guess").focus();
}


//end start button functions

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
function check() {
	correct = (slotVal * bNum);
	guess = document.getElementById("guess").value;
	result = document.getElementById("result").innerHTML;
	if (guess == null) {
		wrong += 1;
		totalCount += 1;
	}
	if (guess == correct) {
		updateList();
		document.getElementById("result").style.color = "rgb(141, 234, 73)";
		count += 1;
		gemTotal += 1;
		totalCount += 1;
		playChime();
		bNum = Math.floor(Math.random() * 13);
		document.getElementById("random").innerHTML = "x " + bNum;
		document.getElementById("count").innerHTML = count;
		document.getElementById("guess").focus();
	} else if (guess != correct) {
		playTrumpet();
		updateWrong();
		totalCount += 1;
		wrong += 1;
		document.getElementById("result").style.color = "red";
		bNum = Math.floor(Math.random() * 13);
		document.getElementById("random").innerHTML = "x " + bNum;
		document.getElementById("guess").focus();
		clearTimeout(oneMin);
	}
    if (totalCount == 20) {
		stopRoundMusic();
		clearTimeout(timer);
		document.getElementById("count").innerHTML = count;
		document.getElementById("guess").focus();
		document.getElementById("clock").innerHTML = "End";
		hideCenterCluster();
		hideEnterButton();
		showReset();
		showAnswerMain();
		finishTime = timeLeft;
		showStats();
		showStatsHead();
		if (count == 20) {
			delayMenuMusic();
			playWinnerMusic();
		} else {
			delayMenuMusic();
			playTubaFall();
		}
    }
	if (count >= 1) {
		aGem.style.display = "block";
		}
	if (count >= 2) {
		bGem.style.display = "block";
	}
	if (count >= 3) {
		cGem.style.display = "block";
	}
	if (count >= 4) {
		dGem.style.display = "block";
	}
	if (count >= 5) {
		eGem.style.display = "block";
	}
	if (count >= 6) {
		fGem.style.display = "block";
	}
	if (count >= 7) {
		gGem.style.display = "block";
	}
	if (count >= 8) {
		hGem.style.display = "block";
	}
	if (count >= 9) {
		iGem.style.display = "block";
	}
	if (count >= 10) {
		jGem.style.display = "block";
	}
	if (count >= 11) {
		kGem.style.display = "block";
	}
	if (count >= 12) {
		lGem.style.display = "block";
	}
	if (count >= 13) {
		mGem.style.display = "block";
	}
	if (count >= 14) {
		nGem.style.display = "block";
	}
	if (count >= 15) {
		oGem.style.display = "block";
	}
	if (count >= 16) {
		pGem.style.display = "block";
	}
	if (count >= 17) {
		qGem.style.display = "block";
	}
	if (count >= 18) {
		rGem.style.display = "block";
	}
	if (count >= 19) {
		sGem.style.display = "block";
	}
	if (count >= 20) {
		tGem.style.display = "block";
	}
    inputClear();
	lastBottomNum = bNum;
}


//Need to correct Anser Time equation.
function showStats() {
	var x = document.getElementById("stats");
	document.getElementById("stats").innerHTML = "Factor: " + numberInput + "'s<br><br>" + "Correct: " + ((count / 20) * 100) + "%" + "<br><br>" + "Finish Time:<br>" + 
			(startTime - finishTime) + " seconds" + "<br><br>" + "Missed:<br>" + wrong + "<br><br>" + "Total Gems:<br>" + gemTotal + "<br><br>" + "Rounds Played:<br>" + roundsPlayed;
	x.style.display = "block";
}

function hideStats() {
	var x = document.getElementById("stats");
	document.getElementById("stats").innerHTML = "";
	x.style.display = "none";
}

function resetCount() {
	count = 0;
	wrong = 0;
	totalCount = 0;
	document.getElementById("count").innerHTML = 0
}

function showNum() {
	var x = document.getElementById("number-select-grid");
	x.style.display = "block";
}

function hideNum() {
	var x = document.getElementById("number-select-grid");
	x.style.display = "none";
}

function showStatsHead() {
	var x = document.getElementById("statsHead");
	x.style.display = "block";
}

function hideStatsHead() {
	var x = document.getElementById("statsHead");
	x.style.display = "none";
}

function clickTime() {
	document.getElementById("chooseTime").click();
}

function resetGems() {
	aGem.style.display = "none";
	bGem.style.display = "none";
	cGem.style.display = "none";
	dGem.style.display = "none";
	eGem.style.display = "none";
	fGem.style.display = "none";
	gGem.style.display = "none";
	hGem.style.display = "none";
	iGem.style.display = "none";
	jGem.style.display = "none";
	kGem.style.display = "none";
	lGem.style.display = "none";
	mGem.style.display = "none";
	nGem.style.display = "none";
	oGem.style.display = "none";
	pGem.style.display = "none";
	qGem.style.display = "none";
	rGem.style.display = "none";
	sGem.style.display = "none";
	tGem.style.display = "none";
}


//COUNTDOWN

document.getElementById("clock").innerHTML = "0:00";

function timeStop() {
	clearTimeout();
	document.getElementById("clock").innerHTML = "Game Over";
}

function countdown() {
	clearTimeout(timer);
	var newMin;
	timer = setInterval(function(){
		if (timeLeft <= 0) {
			inputClear();
			stopRoundMusic();
			playBongoRoll();
			playMenuMusic();
			clearInterval(timer);
			document.getElementById("clock").innerHTML = "Time's Up";
			hideCenterCluster();
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
	document.getElementById("guess").focus();
	showReset();
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

/*
function quickClear() {
	var clear = setTimeout(clearResult, 1000);
}


function clearResult() {
	document.getElementById("result").innerHTML = "";
}


//Multiple functions to change number as you hover on dropdown items.
var slotVal;

function swap1() {
	slotVal = document.getElementById("drop1").value;
	numberInput = document.getElementById("numberInput").innerHTML = slotVal;
}

function swap2() {
	slotVal = document.getElementById("drop2").value;
	numberInput = document.getElementById("numberInput").innerHTML = slotVal;
}

function swap3() {
	slotVal = document.getElementById("drop3").value;
	numberInput = document.getElementById("numberInput").innerHTML = slotVal;
}

function swap4() {
	slotVal = document.getElementById("drop4").value;
	numberInput = document.getElementById("numberInput").innerHTML = slotVal;
}

function swap5() {
	slotVal = document.getElementById("drop5").value;
	numberInput = document.getElementById("numberInput").innerHTML = slotVal;
}

function swap6() {
	slotVal = document.getElementById("drop6").value;
	numberInput = document.getElementById("numberInput").innerHTML = slotVal;
}

function swap7() {
	slotVal = document.getElementById("drop7").value;
	numberInput = document.getElementById("numberInput").innerHTML = slotVal;
}

function swap8() {
	slotVal = document.getElementById("drop8").value;
	numberInput = document.getElementById("numberInput").innerHTML = slotVal;
}

function swap9() {
	slotVal = document.getElementById("drop9").value;
	numberInput = document.getElementById("numberInput").innerHTML = slotVal;
}

function swap10() {
	slotVal = document.getElementById("drop10").value;
	numberInput = document.getElementById("numberInput").innerHTML = slotVal;
}

function swap11() {
	slotVal = document.getElementById("drop11").value;
	numberInput = document.getElementById("numberInput").innerHTML = slotVal;
}

function swap12() {
	slotVal = document.getElementById("drop12").value;
	numberInput = document.getElementById("numberInput").innerHTML = slotVal;
}
*/

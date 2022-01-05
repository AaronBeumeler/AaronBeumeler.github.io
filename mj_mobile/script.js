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

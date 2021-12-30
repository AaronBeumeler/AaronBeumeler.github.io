function layoutHandler() {
    var styleLink = document.getElementById("pagestyle");
    if (window.innerWidth < 700) {
        styleLink.setAttribute("href", "mobile.css");
    } /*else if (window.innerWidth < 1200) {
        styleLink.setAttribute("href", "assets/style/medium.css");
    } */else if (window.innerWidth >= 700) {
        styleLink.setAttribute("href", "style.css");
    }
}

window.onresize = layoutHandler;
layoutHandler();

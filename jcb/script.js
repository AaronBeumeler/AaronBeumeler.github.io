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

//show on scroll
var scroll = window.requestAnimationFrame ||
    function(callback) {window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {
    elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });
    scroll(loop);
}

loop();

function isElementInViewport(el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0 && rect.bottom >= 0) || (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)) || (rect.top >= 0 && rect.bottom <= 
            (window.innerHeight || document.documentElement.clientHeight))
    );
}

isElementInViewport();

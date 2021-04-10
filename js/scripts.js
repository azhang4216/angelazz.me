/*!
    * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 1200,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  });

// filter selections
// https://www.w3schools.com/howto/howto_js_portfolio_filter.asp

filterSelection("all") // show all projects by default

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("gallery");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
}

// Show filtered elements
function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("galleryBtn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("activeSelection");
        current[0].className = current[0].className.replace(" activeSelection", "");
        this.className += " activeSelection";
    });
}

// function AnimatedText(target,texts,changeInterval,updateInterval,onTextChanged) {
//     var currentText = 0;
//     var areaText=texts[0];
//     this.t1=setInterval(function(){
//         var c=parseInt(Math.random()*Math.max(texts[currentText].length,areaText.length));
//         var s=texts[currentText][c];
//     if (typeof s == 'undefined') s=" ";
//     while(areaText.length<c) areaText+=" ";
//     var newText=(areaText.slice(0,c)+s+areaText.slice(c+1)).trim();
//     var diff=!(newText==areaText);
//     areaText=newText;
//     if(onTextChanged&&diff) onTextChanged();
//     target.innerHTML=areaText.length==0?"&nbsp;":areaText;
//     }.bind(this),updateInterval?updateInterval:20);
//     this.t2=setInterval(function(){
//         currentText += 1;
//         if (currentText > 6) { currentText = 0 };
//     }.bind(this),changeInterval?changeInterval:2400);
// }
// AnimatedText.prototype={
//     constructor:AnimatedText,
//     stop:function(){clearInterval(this.t1);clearInterval(this.t2);}
// };

// new AnimatedText(document.getElementById("changing-text"),["fast learner","passionate coder", "music lover", "meme enthusiast", "avid golfer", "free spirit", "mom friend"]);
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

function AnimatedText(target,texts,changeInterval,updateInterval,onTextChanged) {
    var currentText = 0;
    var areaText=texts[0];
    this.t1=setInterval(function(){
        var c=parseInt(Math.random()*Math.max(texts[currentText].length,areaText.length));
        var s=texts[currentText][c];
    if (typeof s == 'undefined') s=" ";
    while(areaText.length<c) areaText+=" ";
    var newText=(areaText.slice(0,c)+s+areaText.slice(c+1)).trim();
    var diff=!(newText==areaText);
    areaText=newText;
    if(onTextChanged&&diff) onTextChanged();
    target.innerHTML=areaText.length==0?"&nbsp;":areaText;
    }.bind(this),updateInterval?updateInterval:20);
    this.t2=setInterval(function(){
        currentText += 1;
        if (currentText > 6) { currentText = 0 };
    }.bind(this),changeInterval?changeInterval:2400);
}
AnimatedText.prototype={
    constructor:AnimatedText,
    stop:function(){clearInterval(this.t1);clearInterval(this.t2);}
};

new AnimatedText(document.getElementById("changing-text"),["fast learner","passionate coder", "music lover", "meme enthusiast", "avid golfer", "free spirit", "mom friend"]);
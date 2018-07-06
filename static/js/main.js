var firstPlay = true;
var hiMessage = document.getElementById("hi-message");
var timclulow = document.getElementById("timclulow-word");
var skew = document.getElementById("skew");
var hand1 = document.getElementById("t-horiz");
var c = document.getElementById("C");
var l1 = document.getElementById("L1");
var l2 = document.getElementById("L2");
var o = document.getElementById("O");
var w = document.getElementById("W");
var eye1 = document.getElementById("t-vert");
var eye2 = document.getElementById("I");
var smile = document.getElementById("U");
var hand2 = document.getElementById("vert2");
var armandhand = document.getElementById("armandhand");
var bit = document.getElementById("vert1");
var shoulder = document.getElementById("angle1");
var m = document.getElementById("M");
var progressBar = document.getElementById("progress");

var tl = new TimelineMax({onComplete:complete, onUpdate: Progress});
var firstPlay = true;
tl.pause();
tl.addLabel("start");
tl.add(TweenMax.to(bit, 0.3, {ease: Power2.easeIn, repeat:0, opacity:0}), 0);
tl.add(TweenMax.to(hand1, 1, {ease: Power2.easeOut, repeat:0, rotation: -50, x: -69, y: 54, transformOrigin:"top right"}), 0);
tl.add(TweenMax.to(c, 1, {ease: Power2.easeIn, repeat:0, opacity:0, y: 100,}), 0);
tl.add(TweenMax.to(l1, 1, {ease: Power2.easeOut, repeat:0, y: 25, x:53, rotation: 5}), 0);
tl.add(TweenMax.to(l2, 1, {ease: Power2.easeOut, repeat:0, y: 26, x: -15, rotation: -5}), 0);
tl.add(TweenMax.to(o, 1, {ease: Power2.easeIn, repeat:0, opacity:0, y: 100}), 0);
tl.add(TweenMax.to(w, 1, {ease: Power2.easeIn, repeat:0, opacity:0, y: 100}), 0);
tl.add(TweenMax.to(eye1, 2, {ease: Power2.easeOut, repeat:0, x:39, scaleX:0.66}), 0);
tl.add(TweenMax.to(eye2, 2, {ease: Power2.easeOut, repeat:0, x:9, scaleX:0.66}), 0);
tl.add(TweenMax.to(smile, 2, {ease: Power2.easeOut, repeat:0, scaleY:0.7, scaleX: 1.1, x: -3, y: -10}), 0);
tl.add(TweenMax.to(hand2, 2, {ease: Power2.easeInOut, repeat:0, scaleY:0.4, rotation:-200}), 0);
tl.add(TweenMax.to(m, 0.6, {ease: Power2.easeOut, repeat:0, y: 40, x: 140, rotation: -45}), 0);

var arm1Wave;
var arm2Wave;
var handWave;
function complete() {
  hiMessage.classList.add('on');
  tl.addLabel("midpoint");
  tl.add(TweenMax.to(hand2, 0.45, {ease: Power4.easeInOut, rotation:-40, yoyo: true, repeat: 5}), "midpoint");
  tl.add(TweenMax.to(m, 1.8, {ease: Sine.easeInOut, rotation:-80, yoyo: true, repeat: 1, onComplete:backtoStart}), "midpoint");
  tl.add(TweenMax.to(armandhand, 0.45, {transformOrigin:"bottom left", ease: Sine.easeInOut, rotation:32, yoyo: true, repeat: 5}), "midpoint");
  tl.add(TweenMax.to(hand1, 1.8, {transformOrigin:"bottom right", ease: Power1.easeInOut, rotation: -15, yoyo: true}), "midpoint");
  
}

function repeat(){
  tl.reverse();
}

function onLogoHover(){
  if(!tl.isActive()){
    progressBar.classList.add('on');
    skew.classList.add('on');
    tl.timeScale(1).play();
  }
}

function onLogoOut(){
 // any other actions?
}

function backtoStart(){
  tl.reverse().timeScale(1.5);
  firstPlay = false;
}

function Progress (){
  var rounded = Math.round( tl.progress() * 10 ) / 10;
  if(!firstPlay && !tl.reversed() && (0.2 == rounded)){
    hiMessage.classList.add('on');
  }
  if(tl.reversed() && 0.2 == rounded ){
    hiMessage.classList.remove('on');
  }
  if(tl.progress() == 0){
    progressBar.classList.remove('on');
    skew.classList.remove('on');
  }
}
document.addEventListener("DOMContentLoaded", function() {
  hiMessage.classList.add('transitions');
  skew.addEventListener("mouseenter", onLogoHover);
  skew.addEventListener("touchstart", onLogoHover);
  skew.addEventListener("mouseleave", onLogoOut);
  skew.addEventListener("touchcancel", onLogoOut);
  
  setTimeout(function(){
    onLogoHover();
  },6000);

});


// SET TIMEOUT FUNCTION
function delay(element, className, change, time) {
  setTimeout(function() {
    if (change == 1) {
      element.classList.add(className)
    }
    else {
      element.classList.remove(className)
    }
  }, time)
}

// SANTA LOADING BORDER COLOR CHANGE AND FADE OUT
let santa = document.querySelector('.santa-container')
delay(santa, 'color-change', 1, 100)
delay(santa, 'fade-out', 1, 6000)
delay(santa, 'hide-content', 1, 7000)

// SANTA ICON SLIDE TO RIGHT
let santaIcon = document.querySelector('.santa')
delay(santaIcon, 'slide-to-right', 1, 100)

// SHOW CONTENT
let textContainer = document.querySelector('.text-container')
delay(textContainer, 'hide-content', null, 7500)

// QUESTION MARK DELAY
let question = document.querySelector('.question')
delay(question, 'hide-content', null, 9400)
delay(question, 'rotateDeg', 1, 9450)

// CLIMATE TEXT DELAY
let climate = document.querySelector('.climate')
delay(climate, 'visibility', null, 10300)
delay(climate, 'fade-in', 1, 10400)

// TYPEWRITER EFFECT
var i = 0;
var txt = "Last Christmas"
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.querySelector('.title').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

setTimeout(function(){
  typeWriter()
}, 7500);

// LOADING SCREEN FADE OUT
let root = document.querySelector('.root')
delay(root, 'fade-out', 1, 15000)
delay(root, 'hide-content', 1, 16000)
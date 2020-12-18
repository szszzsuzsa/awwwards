// COMPARISON EFFECT
let slide = document.getElementById('heroes-after')

window.onmousemove = function(e) {
    var x = e.clientX
    slide.style.left = x + "px"
}
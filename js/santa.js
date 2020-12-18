let pathA = document.querySelector("#a");
let pathB = document.querySelector("#b");
let nav = false

function AInlineFunction() {
        pathA.style.display = "inline" 
        pathB.style.display = "none" 
    console.log('afunc');
}

function BInlineFunction() {
    pathA.style.display = "none" 
    pathB.style.display = "inline" 
    AInlineFunction()
}




let clrBtn = document.getElementById("colorButton")
let randomColorBox = document.getElementById("randomColor")


let randomizedColor = function(){
    let redComp = Math.random()*255;
    let greenComp = Math.random()*255;
    let blueComp = Math.random()*255;
    
    
    
    
    randomColorBox.style.backgroundColor = "rgb(" + redComp + "," + greenComp + "," + blueComp + ")";
    
}

clrBtn.addEventListener("click", randomizedColor);

let menbttn = document.getElementById("menubutton")
let nav = document.getElementById("navigation");
let toggleDisplay = function(element){
  element.classList.toggle("hide");}

let toggleImage = function(){
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
    if (menbttn.alt == "menu_open") {
        menbttn.src = "images/menu_close.png";
        menbttn.alt = "menu_close";
    }
    else {
        menbttn.src = "images/menu_open.png";
        menbttn.alt = "menu_open";
     }
    
}

document.getElementById("readmore1").addEventListener("click", function(){
	let div = document.getElementById("readmore1text");
  	toggleDisplay(div);
});

document.getElementById("readmore2").addEventListener("click", function(){
	let div = document.getElementById("readmore2text");
  	toggleDisplay(div);
});

menbttn.addEventListener("click", toggleImage);

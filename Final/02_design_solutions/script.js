
let menbttn = document.getElementById("menubutton")
let nav = document.getElementById("navigation");

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


menbttn.addEventListener("click", toggleImage);

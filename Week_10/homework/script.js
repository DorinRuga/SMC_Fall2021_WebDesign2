let p = document.getElementById("p")
let menbttn = document.getElementById("menubutton")

function func(image){
    p.src = image.src;
    p.parentElement.style.display="block";
}

function myFunction() {
    let nav = document.getElementById("navigation");
    if (nav.style.display === "block") {
      nav.style.display = "none";
    } else {
      nav.style.display = "block";
    }
  }

let toggleImage = function(){
    if (menbttn.alt == "menu_open") {
        menbttn.src = "menu_close.png";
        menbttn.alt = "menu_close";
    }
    else {
        (menbttn.src = "menu_open.png")
         menbttn.alt = "menu_open";
     }
    
}


menbttn.addEventListener("click", toggleImage);

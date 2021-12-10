let p = document.getElementById("p")
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

function func(image){
  p.src = image.src;
  p.parentElement.style.display="block";
  p.nextElementSibling.textContent=image.alt;
}

document.getElementById("readmore1")?.addEventListener("click", function(){
	let div = document.getElementById("readmore1text");
  	toggleDisplay(div);
});

document.getElementById("readmore2")?.addEventListener("click", function(){
	let div = document.getElementById("readmore2text");
  	toggleDisplay(div);
});

document.getElementById("readmore3")?.addEventListener("click", function(){
	let div = document.getElementById("readmore3text");
  	toggleDisplay(div);
});

document.getElementById("readmore4")?.addEventListener("click", function(){
	let div = document.getElementById("readmore4text");
  	toggleDisplay(div);
});

document.getElementById("readmore5")?.addEventListener("click", function(){
	let div = document.getElementById("readmore5text");
  	toggleDisplay(div);
});


document.getElementById("donateform")?.addEventListener("submit", function(event){
	event.preventDefault(); //stops the form from reloading the page!!!
  	let form = document.getElementById("donateform");
  	let h3 = document.getElementById("thanks");
  	toggleDisplay(form); //hides the form
  	toggleDisplay(h3); //shows the thank-you note
});

menbttn.addEventListener("click", toggleImage);

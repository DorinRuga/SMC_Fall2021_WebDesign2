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

document.getElementById("donateform")?.addEventListener("submit", function(event){
	event.preventDefault(); //stops the form from reloading the page!!!
  	let form = document.getElementById("donateform");
  	let h3 = document.getElementById("thanks");
  	toggleDisplay(form); //hides the form
  	toggleDisplay(h3); //shows the thank-you note
});

// let images = document.querySelectorAll("img.images"); //list of all img elements with "images" class name
// for (let img of images){
// 	//loop through each img element one at a time
//   	img.addEventListener("mouseenter", function(){
//     	img.classList.add("grow");
//     });
//   	img.addEventListener("mouseout", function(){
//     	img.classList.remove("grow");
//     });
//   }

menbttn.addEventListener("click", toggleImage);

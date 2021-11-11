
let carouselImages = ["quokkas1.jpg", "quokkas2.jpg", "quokkas3.jpg"]; 
let currentIndex = 2;
let carouselIMG = document.getElementById ("carouselIMG");

let changeslide = function(){
    if(currentIndex === 0){
         carouselIMG.src = carouselImages[1];
         //currentIndex = 1;
    }
    else if(currentIndex === 1) {
         carouselIMG.src = carouselImages[2];
         //currentIndex = 2;
    }
    else {
         carouselIMG.src = carouselImages[0];
         //currentIndex = 0;
    }
    if(currentIndex === 2) {
         currentIndex = 0;
    }
    
    if(currentIndex ===2) {
        currentIndex = 0;
    }
    else {
         currentIndex = currentIndex+1;
    }
}
    
window.addEventlistener ("load", function(){
   // triggered once after 5 sec
    setTimeout (function(){
         prompt("SUBSCRIBE TO OUR NEWSLETTER!!!", 
         "my@email.com");
   }, 5000);
    //triggered every 5 sec
    setInterval (changeslide, 5000);
})
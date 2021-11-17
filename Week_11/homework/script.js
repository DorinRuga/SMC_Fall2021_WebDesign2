//for the carousel:
let carouselImages = ["", "", ""]; 
let pepperImages = ["Pepper1.jpg", "Pepper2.jpg", "Pepper3.jpg"];
let tomatoImages = ["Tomato1.jpg", "Tomato2.jpg", "Tomato3.jpg"];
let kaleImages = ["Kale1.jpg", "Kale2.jpg", "Kale3.jpg"];
let spinichImages = ["Spinich1.jpg", "Spinich2.jpg", "Spinich3.jpg"];
let carrotImages = ["Carrot1.jpg", "Carrot2.jpg", "Carrot3.jpg"];
let squashImages = ["Squash1.jpg", "Squash2.jpg", "Squash3.jpg"];
let currentIndex = 2;
let carouselIMG = document.getElementById ("carouselIMG");

//for the select:
let groupSelect = document.getElementById("groupSelect");
let categorySelect = document.getElementById("categorySelect");
let redOptions = ['Pepper', 'Tomato'];
let greenOptions = ['Kale', 'Spinich']
let orangeOptions = ['Carrot', 'Squash'];



let changeslide = function(){
    if(currentIndex === 0){
         carouselIMG.src = carouselImages[1];
         currentIndex = 1;
    }
    else if(currentIndex === 1) {
         carouselIMG.src = carouselImages[2];
         currentIndex = 2;
    }
    else {
         carouselIMG.src = carouselImages[0];
         currentIndex = 0;
    }
}

let updateCategory = function(){
    
    categorySelect.innerHTML = '';
    let selectedValue = groupSelect.value;
    if(selectedValue === "Red"){
        redOptions.forEach(function(elem){
            categorySelect.innerHTML += '<option value="'+elem+'">' +elem+'</option>';
        })
    }
    else if(selectedValue === "Green"){
        greenOptions.forEach(function(elem){
            categorySelect.innerHTML += '<option value="'+elem+'">' +elem+'</option>';
        })
    }
    else if(selectedValue === "Orange"){
        orangeOptions.forEach(function(elem){
            categorySelect.innerHTML += '<option value="'+elem+'">' +elem+'</option>';
        })
    }
}
   
let carouselUpdate =function(){
    let currentValue = categorySelect.value;
    console.log(currentValue);
    if (currentValue === 'Pepper'){
        carouselImages = pepperImages;
    }

    else if (currentValue === 'Tomato'){
        carouselImages = tomatoImages;
    }

    else if (currentValue === 'Kale'){
        carouselImages = kaleImages;
    }

    else if (currentValue === 'Spinich'){
        carouselImages = spinichImages;
    }

    else if (currentValue === 'Carrot'){
        carouselImages = carrotImages;
    }

    else if (currentValue === 'Squash'){
        carouselImages = squashImages;
    }
}

window.addEventListener("load", function(){
    //triggered every 5 sec
    setInterval(changeslide, 2000);
});

groupSelect.addEventListener("change", updateCategory);
categorySelect.addEventListener("change", carouselUpdate);
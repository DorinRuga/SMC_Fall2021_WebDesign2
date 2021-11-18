let cocktailButton = document.getElementById('fetchCocktail')
let cocktailDisplay = document.getElementById ("displayCocktail")

let fetchCocktail = function (){
    let randCocktailURL="";

    fetch(randCocktailURL).
        then(function(result){
            return result.json();
        }).
        then(function(data)

        })
}



cocktailButton.addEventListener('click',fetchRandomCocktail);
let cocktailButton = document.getElementById('fetchCocktail')
let cocktailDisplay = document.getElementById ("displayCocktail")

let fetchCocktail = function (){
    let randCocktailURL="https://www.thecocktaildb.com/api/json/v1/1/random.php";

    fetch(randCocktailURL).
        then(function(result){
            return result.json();
        }).
        then(function(data){
            console.log(data);
        })
}



cocktailButton.addEventListener('click',fetchRandomCocktail);
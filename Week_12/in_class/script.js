let cocktailButton = document.getElementById('fetchCocktail')
let cocktailDisplay = document.getElementById ("displayCocktail")

let picOTD = document.getElementById('start')
let roverImageDisplay = document.getElementById('displayRoverImage')


let fetchRandomCocktail = function (){
    let randCocktailURL="https://www.thecocktaildb.com/api/json/v1/1/random.php";

    fetch(randCocktailURL).
        then(function(result){
            return result.json();
        }).
        then(function(data){
            console.log(data.drinks[0]);

            let drName = data.drinks[0].strDrink;
            let drImage = data.drinks[0].strDrinkThumb;
            let drInstr = data.drinks[0].strInstructions;

            while (cocktailDisplay.firstChild){
                cocktailDisplay.removeChild(cocktailDisplay.firstChild);
            }

            let title = document.createElement('h3');
            title.innerText = drName;
            cocktailDisplay.appendChild(title);

            let image = document.createElement('img');
            image.src = drImage;
            image.alt = drName;
            cocktailDisplay.appendChild(image);

            let recepie = document.createElement('p');
            recepie.innerText = drInstr;
            cocktailDisplay.appendChild(recepie);
        })

        //console.log(cocktailDisplay);
    }

    let fetchPicOfTheDay = function(){
        console.log(picOTD.value)
        let baseURL = 'https://api.nasa.gov/planetary/apod?date=';
        let dateURL = picOTD.value;
        let apiURL = 'DEMO_KEY';
        let imgURL = baseURL + dateURL + '&api_key=' + apiURL;

        fetch(imgURL).
            then(function(result){
                return result.json();
            }).
            then(function(data){
                console.log(data);

                while(roverImageDisplay.firstChild){
                    roverImageDisplay.removeChild(roverImageDisplay.firstChild);
                }

                let img = document.createElement('img');
                img.src = data.url;
                img.alt = "Picture of the Day";
                roverImageDisplay.appendChild(img);
            })
    }

cocktailButton.addEventListener('click',fetchRandomCocktail);
picOTD.addEventListener('change', fetchPicOfTheDay);
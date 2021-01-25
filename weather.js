$( document ).ready(function() {

    // full link 
    //https://api.openweathermap.org/data/2.5/weather?q= LOCATIONHERE&units=imperial&appid=49f44633a22b64ed242a4f937e6ef855
    const api = {
        key: "6e4d2dd0c20c78bde4e20e01e275ea85",
        base: "https://api.openweathermap.org/data/2.5/"
       // original API URL  base: "https://api.openweathermap.org/data/2.5/"
     }
//weather API
let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" ;
let APIKey = "&appid=49f44633a22b64ed242a4f937e6ef855";
let units = "&units=imperial"
const searchBox = document.querySelector('.search-box');


// searchBox.addEventListener('keypress', userSearch)

$('.locationsearch').on('click', function (){
    console.log(searchBox.value)
    getWeather(searchBox.value)
})

function getWeather(query){
    fetch(`${api.base}forecast?q=${query}&units=imperial&APPID=${api.key}`)
    .then(response => {
        return response.json();
    }).then(showWeather)
};

function showWeather(response){
    console.log(response);
    let city = document.querySelector('.location .city')
    city.innerText = `${response.city.name}, ${response.city.country}`;
    
    console.log(response.temp)
    let temp = document.querySelector('.current .temp')
    temp.innerHTML = `${Math.round(response.list[0].main.temp)}<span>°F</span>`
};
// Here we run our AJAX call to the OpenWeatherMap API
// $.ajax({
// url: queryURL + APIKey + units,
// method: "GET"
// }) .then(function(response) {
    
// $(".city").html("<h1>" + response.name + " Weather Details</h1>");
// $(".wind").text("Wind Speed: " + response.wind.speed);
// $(".humidity").text("Humidity: " + response.main.humidity);
// $(".temp").text(response.main.temp +" F°");
// };


// end script


// add event listener for input box - so users can customize API call 
// add event listener - when button is clicked, API call will fire
// set previously searched records to LS 
 });
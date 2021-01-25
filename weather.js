$( document ).ready(function() {

    // full link 
    //https://api.openweathermap.org/data/2.5/weather?q= LOCATIONHERE&units=imperial&appid=49f44633a22b64ed242a4f937e6ef855
    const api = {
        key: "49f44633a22b64ed242a4f937e6ef855",
        base: "https://api.openweathermap.org/data/2.5/"
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

function getWeather(){
    fetch(`${api.base}weather?q=${searchBox.value}&units=imperial&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(showWeather)
};

function showWeather(weather){
    console.log(weather);
};
// Here we run our AJAX call to the OpenWeatherMap API
// $.ajax({
// url: queryURL + APIKey + units,
// method: "GET"
// }) .then(function(response) {
    



// end script


// add event listener for input box - so users can customize API call 
// add event listener - when button is clicked, API call will fire
// set previously searched records to LS 
 });
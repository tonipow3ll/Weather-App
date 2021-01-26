$( document ).ready(function() {

    // full link 
    //https://api.openweathermap.org/data/2.5/weather?q= LOCATIONHERE&units=imperial&appid=49f44633a22b64ed242a4f937e6ef855
    const api = {
        key: "6e4d2dd0c20c78bde4e20e01e275ea85",
        base: "https://api.openweathermap.org/data/2.5/"
       // base: "https://api.openweathermap.org/data/2.5/"
       // original API URL  base: "https://api.openweathermap.org/data/2.5/"
     }
//weather API
// let queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}" ;
// let APIKey = "&appid=49f44633a22b64ed242a4f937e6ef855";
// let units = "&units=imperial"
const searchBox = document.querySelector('.search-box');
const lat = document.querySelector('.lat');
const lon = document.querySelector('.lon');

 const fivedayApi = {
     fiveKey: "3fa7210f886680035b976ee7d2b85be0",
     fiveBase: "https://api.openweathermap.org/data/2.5/"
 }
$('.future').on('click', function(){
    console.log(lat.value)
    console.log(lon.value)
    getFiveDay(lat.value, lon.value);
})
  function getFiveDay (lat, lon){
    fetch(`${fivedayApi.fiveBase}onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${fivedayApi.fiveKey}`)
    .then(response => {
        return response.json();
    }).then(showForecast)
  };

function showForecast(response){
    console.log(response);
}

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
    
    let temperature = document.querySelector('.current .temp')
    temperature.innerHTML = `${Math.round(response.list[0].main.temp)}<span>°F</span>`;

    let lowHighTemp = document.querySelector('.hi-low')
    lowHighTemp.innerText = `Low ${Math.round(response.list[0].main.temp_min)}°F /  High ${Math.round(response.list[0].main.temp_max)}°F`;

    let currentWeather = document.querySelector('.currentWeather')
    currentWeather.innerText = `${response.list[0].weather[0].description}`
};

// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity

// end script
 });
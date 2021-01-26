$( document ).ready(function() {

    // full link 
    //https://api.openweathermap.org/data/2.5/weather?q= LOCATIONHERE&units=imperial&appid=49f44633a22b64ed242a4f937e6ef855
    
    //weather API for current city 
    const api = {
        key: "6e4d2dd0c20c78bde4e20e01e275ea85",
        base: "https://api.openweathermap.org/data/2.5/"
     }
     // weather API for five day 
    const fivedayApi = {
        fiveKey: "ed7b87dda4d1465a2d3cfe935f385dd8",
        fiveBase: "https://api.openweathermap.org/data/2.5/"
    }

const searchBox = document.querySelector('.search-box');
const lat = document.querySelector('.lat');
const lon = document.querySelector('.lon');

//event listener / button for FIVE DAY weather
$('.future').on('click', function(){
    console.log(lat.value)
    console.log(lon.value)
    getFiveDay(lat.value, lon.value);
})
// API call for FIVE DAY weather
  function getFiveDay (lat, lon){
    fetch(`${fivedayApi.fiveBase}onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${fivedayApi.fiveKey}`)
    .then(response => {
        return response.json();
    }).then(showForecast)
  };

  // function to show FIVE DAY weather
function showForecast(response){
    console.log(response);
    let UVI = document.querySelector('.fiveDay .UVI1');
    let futureDescription = document.querySelector('.fiveDay .futureCastDescription1');
    let future1 = document.querySelector('.fiveDay .futureCastTemp1')
    let locationIcon = document.querySelector('.fiveDay .weather-icon');
    const {icon} = `${response.daily[0].weather[0].icon}`;
    UVI.innerHTML = `${response.current.uvi}<span> UVI</span>`;
    futureDescription.innerText = `${response.daily[0].weather[0].description}`;
    future.innerText = `${response.daily[0].temp.day}<span> °F</span>`
    locationIcon.innerHTML =`<img src="icons/${icon}.png"></img>`
}

// event listener / button for CURRENT weather
$('.locationsearch').on('click', function (){
    console.log(searchBox.value)
    getWeather(searchBox.value)
})

// function for getting CURRENT weather
function getWeather(query){
    fetch(`${api.base}forecast?q=${query}&units=imperial&APPID=${api.key}`)
    .then(response => {
        return response.json();
    }).then(showWeather)
};
// Function to show CURRENT weather only 
console.log(response);
function showWeather(response){
    let city = document.querySelector('.location .city')
    city.innerText = `${response.city.name}, ${response.city.country}`;
    
    let temperature = document.querySelector('.current .temp')
    temperature.innerHTML = `${Math.round(response.list[0].main.temp)}<span>°F</span>`;

    let lowHighTemp = document.querySelector('.hi-low')
    lowHighTemp.innerText = `Low ${Math.round(response.list[0].main.temp_min)}°F /  High ${Math.round(response.list[0].main.temp_max)}°F`;

    let currentWeather = document.querySelector('.currentWeather')
    currentWeather.innerText = `${response.list[0].weather[0].description}`

    let icon = document.querySelector('.icon')
    const {icon1} = `${response.list[0].weather[0].icon}`
    // currentWeather.innerText = `${response.list[0].weather[0].icon}`
    icon.innerHTML =`<img alt ="weather icon" src="${icon1}.png"></img>`
};

// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity

// end script
 });
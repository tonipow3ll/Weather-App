$( document ).ready(function() {

 // date
 
 const currentDate = dayjs().format('dddd');
 $("#currentDay").text(currentDate);

    
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
    localStorage.setItem('Lat', lat.value) 
    localStorage.setItem('Lon', lon.value)
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
    // day 1
    let date = document.querySelector('.fiveDay .date')
    let UVI = document.querySelector('.fiveDay .UVI1');
    let futureDescription = document.querySelector('.fiveDay .futureCastDescription1');
    let future1 = document.querySelector('.fiveDay .futureCastTemp1');
    let locationIcon = document.querySelector('.fiveDay .weather-icon1');
    let humidity1 = document.querySelector('.futureCastHumidity1');
    let wind1 = document.querySelector('.futureWind1')
    let icon = `${response.daily[0].weather[0].icon}`;
    date.innerText = dayjs().add(1,'day').format('MMM D, dddd')
    UVI.innerHTML = `${response.daily[0].uvi}<span> UVI</span>`;
    futureDescription.innerText = `${response.daily[0].weather[0].description}`;
    future1.innerHTML = `${response.daily[0].temp.day}<span> °F</span>`;
    humidity1.innerHTML =`${response.daily[0].humidity}<span> % Humidity</span>`;
    wind1.innerHTML = `${response.daily[0].wind_speed}<span> Wind Speed</span>`;
    locationIcon.innerHTML =`<img src="http://openweathermap.org/img/wn/${icon}.png"></img>`;

    if (`${response.daily[0].uvi}` <= 2) {
        $(".UVI1").attr("class", "UVIGreen");
    }
    else if (2 < `${response.daily[0].uvi}` && `${response.daily[0].uvi}` <= 5) {
        $(".UVI1").attr("class", "UVIYellow");
    }
    else if (5 < `${response.daily[0].uvi}` && `${response.daily[0].uvi}` <= 7) {
        $(".UVI1").attr("class", "UVIOrange");
    }
    else {
        $(".UVI1").attr("class", "UVIRed");
    }

    // day 2
    let date1 = document.querySelector('.fiveDay .date1')
    let UVI2 = document.querySelector('.fiveDay .UVI2');
    let futureDescription2 = document.querySelector('.fiveDay .futureCastDescription2');
    let future2 = document.querySelector('.fiveDay .futureCastTemp2');
    let locationIcon2 = document.querySelector('.fiveDay .weather-icon2');
    let humidity2 = document.querySelector('.futureCastHumidity2');
    let wind2 = document.querySelector('.futureWind2')
    let icon2 = `${response.daily[1].weather[0].icon}`;
    date1.innerText = dayjs().add(2,'day').format('MMM D, dddd');
    UVI2.innerHTML = `${response.daily[1].uvi}<span> UVI</span>`;
    futureDescription2.innerText = `${response.daily[1].weather[0].description}`;
    future2.innerHTML = `${response.daily[1].temp.day}<span> °F</span>`;
    humidity2.innerHTML =`${response.daily[1].humidity}<span> % Humidity</span>`;
    wind2.innerHTML = `${response.daily[1].wind_speed}<span> Wind Speed</span>`;
    locationIcon2.innerHTML =`<img src="http://openweathermap.org/img/wn/${icon2}.png"></img>`;

    if (`${response.daily[1].uvi}` <= 2) {
        $(".UVI2").attr("class", "UVIGreen");
    }
    else if (2 < `${response.daily[1].uvi}` && `${response.daily[1].uvi}` <= 5) {
        $(".UVI2").attr("class", "UVIYellow");
    }
    else if (5 < U`${response.daily[1].uvi}` && `${response.daily[1].uvi}` <= 7) {
        $(".UVI2").attr("class", "UVIOrange");
    }
    // else {
    //     $(".UVI2").attr("class", "UVIRed");
    // }
    
    // day 3
    let date2 = document.querySelector('.fiveDay .date2');
    let UVI3 = document.querySelector('.fiveDay .UVI3');
    let futureDescription3 = document.querySelector('.fiveDay .futureCastDescription3');
    let future3 = document.querySelector('.fiveDay .futureCastTemp3');
    let locationIcon3 = document.querySelector('.fiveDay .weather-icon3');
    let humidity3 = document.querySelector('.futureCastHumidity3');
    let wind3 = document.querySelector('.futureWind3');
    let icon3 = `${response.daily[2].weather[0].icon}`;
    date2.innerText = dayjs().add(3,'day').format('MMM D, dddd');
    UVI3.innerHTML = `${response.daily[2].uvi}<span> UVI</span>`;
    futureDescription3.innerText = `${response.daily[2].weather[0].description}`;
    future3.innerHTML = `${response.daily[2].temp.day}<span> °F</span>`;
    humidity3.innerHTML =`${response.daily[2].humidity}<span> % Humidity</span>`;
    wind3.innerHTML = `${response.daily[2].wind_speed}<span> Wind Speed</span>`;
    locationIcon3.innerHTML =`<img src="http://openweathermap.org/img/wn/${icon3}.png"></img>`;

    if (`${response.daily[2].uvi}` <= 2) {
        $(".UVI3").attr("class", "UVIGreen");
    }
    else if (2 < `${response.daily[2].uvi}` && `${response.daily[2].uvi}` <= 5) {
        $(".UVI3").attr("class", "UVIYellow");
    }
    else if (5 < `${response.daily[2].uvi}` && `${response.daily[2].uvi}` <= 7) {
        $(".UVI3").attr("class", "UVIOrange");
    }
    else {
        $(".UVI3").attr("class", "UVIRed");
    }
    // day 4
    let date3 = document.querySelector('.fiveDay .date3')
    let UVI4 = document.querySelector('.fiveDay .UVI4');
    let futureDescription4 = document.querySelector('.fiveDay .futureCastDescription4');
    let future4 = document.querySelector('.fiveDay .futureCastTemp4');
    let locationIcon4 = document.querySelector('.fiveDay .weather-icon4');
    let humidity4 = document.querySelector('.futureCastHumidity4');
    let wind4 = document.querySelector('.futureWind4');
    let icon4 = `${response.daily[3].weather[0].icon}`;
    date3.innerText = dayjs().add(4,'day').format('MMM D, dddd');
    UVI4.innerHTML = `${response.daily[3].uvi}<span> UVI</span>`;
    futureDescription4.innerText = `${response.daily[3].weather[0].description}`;
    future4.innerHTML = `${response.daily[3].temp.day}<span> °F</span>`;
    humidity4.innerHTML =`${response.daily[3].humidity}<span> % Humidity</span>`;
    wind4.innerHTML = `${response.daily[3].wind_speed}<span> Wind Speed</span>`;
    locationIcon4.innerHTML =`<img src="http://openweathermap.org/img/wn/${icon4}.png"></img>`;

    if (`${response.daily[3].uvi}` <= 2) {
        $(".UVI4").attr("class", "UVIGreen");
    }
    else if (2 < `${response.daily[3].uvi}` && `${response.daily[3].uvi}` <= 5) {
        $(".UVI4").attr("class", "UVIYellow");
    }
    else if (5 < `${response.daily[3].uvi}` && `${response.daily[3].uvi}` <= 7) {
        $(".UVI4").attr("class", "UVIOrange");
    }
    else {
        $(".UVI4").attr("class", "UVIRed");
    }
    // day 5
    let date4 = document.querySelector('.fiveDay .date4')
    let UVI5 = document.querySelector('.fiveDay .UVI5');
    let futureDescription5 = document.querySelector('.fiveDay .futureCastDescription5');
    let future5 = document.querySelector('.fiveDay .futureCastTemp5');
    let locationIcon5 = document.querySelector('.fiveDay .weather-icon5');
    let humidity5 = document.querySelector('.futureCastHumidity5');
    let wind5 = document.querySelector('.futureWind5');
    let icon5 = `${response.daily[4].weather[0].icon}`;
    date4.innerText = dayjs().add(5,'day').format('MMM D, dddd');
    UVI5.innerHTML = `${response.daily[4].uvi}<span> UVI</span>`;
    futureDescription5.innerText = `${response.daily[4].weather[0].description}`;
    future5.innerHTML = `${response.daily[4].temp.day}<span> °F</span>`;
    humidity5.innerHTML =`${response.daily[4].humidity}<span> % Humidity</span>`;
    wind5.innerHTML = `${response.daily[4].wind_speed}<span> Wind Speed</span>`;
    locationIcon5.innerHTML =`<img src="http://openweathermap.org/img/wn/${icon5}.png"></img>`;
    
    if (`${response.daily[4].uvi}` <= 2) {
        $(".UVI5").attr("class", "UVIGreen");
    }
    else if (2 < `${response.daily[4].uvi}` && `${response.daily[4].uvi}` <= 5) {
        $(".UVI5").attr("class", "UVIYellow");
    }
    else if (5 < `${response.daily[4].uvi}` && `${response.daily[4].uvi}` <= 7) {
        $(".UVI5").attr("class", "UVIOrange");
    }
    else {
        $(".UVI5").attr("class", "UVIRed");
    }
}
// event listener / button for CURRENT weather
$('.locationsearch').on('click', function (){
    // console.log(searchBox.value)
    getWeather(searchBox.value)
    localStorage.setItem('citysearch', searchBox.value)
})
// if local storage is not empty, current or last viewed location will write to page
 if (localStorage !== ""){
     console.log(localStorage)
     getWeather(localStorage.getItem('citysearch'))
    //  getFiveDay(localStorage.getItem('Lat', 'Lon'))
    //  getFiveDay(localStorage.getItem('Lon'))
     console.log(localStorage.getItem('Lat' ,'Lon'))
     
 };
// function for getting CURRENT weather
function getWeather(query){
    fetch(`${api.base}forecast?q=${query}&units=imperial&APPID=${api.key}`)
    .then(response => {
        console.log(response);
        return response.json();
    }).then(showWeather)
};
// Function to show CURRENT weather only 
function showWeather(response){

    let latitude = document.querySelector('.latitude');
    let longitude = document.querySelector('.longitude');

    latitude.innerText = `${response.city.coord.lat} Latitude`;
    longitude.innerText = `${response.city.coord.lon} Longitude`;

    
    let city = document.querySelector('.location .city');
    city.innerText = `${response.city.name}, ${response.city.country}`;
    
    let temperature = document.querySelector('.current .temp')
    temperature.innerHTML = `${Math.round(response.list[0].main.temp)}<span>°F</span>`;

    let lowHighTemp = document.querySelector('.hi-low')
    lowHighTemp.innerText = `Low ${Math.round(response.list[0].main.temp_min)}°F /  High ${Math.round(response.list[0].main.temp_max)}°F`;

    let currentWeather = document.querySelector('.currentWeather')
    currentWeather.innerText = `${response.list[0].weather[0].description}`

    let iconcurrent = document.querySelector('.icon')
    let icon1 = `${response.list[0].weather[0].icon}`
    iconcurrent.innerText = `${response.list[0].weather[0].icon}`
    iconcurrent.innerHTML =`<img src="http://openweathermap.org/img/wn/${icon1}.png"></img>`
};



// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity

// end script
 });

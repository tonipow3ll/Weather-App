$( document ).ready(function() { 
console.log("ready!")

// local storage - get previous searched items if they exist
let searchData;
if (!JSON.parse(localStorage.getItem('history'))) {
    searchData = [];
} else {
    searchData = JSON.parse(localStorage.getItem('history'));
}
// api for local weather, might not need both of these
const api = {
   key: "cad650368f646db27b36a263f6e8c5df",
   base: "https://api.openweathermap.org/data/2.5/"
}

 // weather API for five day 
 const fivedayApi = {
    fiveKey: "ed7b87dda4d1465a2d3cfe935f385dd8",
    fiveBase: "https://api.openweathermap.org/data/2.5/"
}
// dates 
const currentDate = dayjs().format('MMMM, D, YYYY');
const currentDay = dayjs().format('dddd');
const nextDay = dayjs().add(1,'day').format('dddd');
const thirdDay = dayjs().add(2,'day').format('dddd');
const fourthDay = dayjs().add(3,'day').format('dddd');
const fifthDay = dayjs().add(4,'day').format('dddd');
$(".date").text(currentDate);
$('.day').text(currentDay);
$('.day1').text(nextDay);
$('.day2').text(thirdDay);
$('.day3').text(fourthDay);
$('.day4').text(fifthDay);


// on load asks for users location, will populate with weather data if allowed
const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } 
    else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    redirect(lat, lon);
  };

$('#search-btn').click((event) => {
    // query might break 
    event.preventDefault();
const query = $('#search').val().trim();
let currentCity = `${api.base}forecast?q=${query}&units=imperial&APPID=cad650368f646db27b36a263f6e8c5df`

$.ajax({
    url: currentCity,
    method: "GET"
}).then((response) => {
  console.log(response)
  // let city = $('#location');
  // city.innerHTML = `${response.city.name}`
    $('#location').text(response.city.name)
    $('#currentTemp').text("Current Temp " + Math.round(response.list[0].main.temp) + '°F')
    $('#lo').text('Low ' + Math.round(response.list[0].main.temp_min) + '°F')
    $('#hi').text('High ' + Math.round(response.list[0].main.temp_min) + '°F')
    $('#humidity').text('Humidity ' + response.list[0].main.humidity)
    $('#wind').text('Wind Speed ' + response.list[0].wind.speed)
    })
})

  getLocation();
// END SCRIPT
});




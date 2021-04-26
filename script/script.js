$( document ).ready(function() { 
console.log("ready!")

const fiveDay = [];

// local storage - get previous searched items if they exist
// let searchData;
// if (!JSON.parse(localStorage.getItem('history'))) {
//     searchData = [];
// } else {
//     searchData = JSON.parse(localStorage.getItem('history'));
// }
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
const sixthDay = dayjs().add(5,'day').format('dddd');
$(".date").text(currentDate);
$('.day').text(currentDay);
$('.day1').text(nextDay);
$('.day2').text(thirdDay);
$('.day3').text(fourthDay);
$('.day4').text(fifthDay);
$('.day5').text(sixthDay);


// on load asks for users location, will populate with weather data if allowed
// const getLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition);
//       // console.log(showPosition)
//     } 
//     else {
//       alert("Geolocation is not supported by this browser.");
//     }
//   };

  // function showPosition(position) {
  //   const lat = position.coords.latitude;
  //   const lon = position.coords.longitude;
  //   console.log(position)
  //   redirect(lat, lon);
  // };

  // redirect = (lat, lon) => {
  //   console.log(lat, lon)
  // }

$('#search-btn').click((event) => {
    // query might break 
    event.preventDefault();
    getWeather();
    const query = $('#search').val().trim();

    // let cities = JSON.parse(localStorage.getItem("storedSearchHistory")) || [];
    // cities.push(query);

    // localStorage.setItem("storedSearchHistory", JSON.stringify(cities));

    // // Print list of cities to the page
    //  cities.map($(".cities").prepend('<li>' + cities + '</li>'));
   
})

getWeather = () => {
  const query = $('#search').val().trim();
  let currentCity = `${api.base}forecast?q=${query}&units=imperial&APPID=cad650368f646db27b36a263f6e8c5df`
  $.get(currentCity).then((response) => {
    // console.log(response)
  
    // const lat = response.city.coord.lat;
    // const lon = response.city.coord.lon;
    // let city = $('#location');
    // city.innerHTML = `${response.city.name}`

      $('#location').text(response.city.name)
      $('#currentTemp').text("Current Temp " + Math.round(response.list[0].main.temp) + '°F')
      $('#lo').text('Low ' + Math.round(response.list[0].main.temp_min) + '°F')
      $('#hi').text('High ' + Math.round(response.list[0].main.temp_min) + '°F')
      $('#humidity').text('Humidity ' + response.list[0].main.humidity + '%')
      $('#wind').text('Wind Speed ' + response.list[0].wind.speed + 'mph')
      $('#desc').text(response.list[0].weather[0].description)
      $('#icon').attr("src","http://openweathermap.org/img/wn/" + response.list[0].weather[0].icon + "@2x.png")
    
    })
    .then(() => {
      $.get(currentCity).then((response) => {
        // console.log(response)
        let dayone = response.list[1];
        let daytwo = response.list[2];
        let daythree = response.list[2];
        let dayfour = response.list[2];
        let dayfive = response.list[2];
        if (fiveDay.length > 0){
          fiveDay.length = 0;
          // console.log(fiveDay)
        }
        fiveDay.push(dayone, daytwo, daythree, dayfour, dayfive)
    
        // console.log(fiveDay);
        writeForecast()
      
      })
  
    })
}

 writeForecast = () => {
   $('.five-day').removeClass('d-none')
  // console.log(fiveDay)
  $('#icon1').attr("src","http://openweathermap.org/img/wn/" + fiveDay[0].weather[0].icon + "@2x.png")
  $('#icon2').attr("src","http://openweathermap.org/img/wn/" + fiveDay[0].weather[0].icon + "@2x.png")
  $('#icon3').attr("src","http://openweathermap.org/img/wn/" + fiveDay[0].weather[0].icon + "@2x.png")
  $('#icon4').attr("src","http://openweathermap.org/img/wn/" + fiveDay[0].weather[0].icon + "@2x.png")
  $('#icon5').attr("src","http://openweathermap.org/img/wn/" + fiveDay[0].weather[0].icon + "@2x.png")
  $('#1').text('Temp ' + Math.round(fiveDay[0].main.temp) + '°F')
  $('#2').text('Temp ' + Math.round(fiveDay[1].main.temp) + '°F')
  $('#3').text('Temp ' + Math.round(fiveDay[2].main.temp) + '°F')
  $('#4').text('Temp ' + Math.round(fiveDay[3].main.temp) + '°F')
  $('#5').text('Temp ' + Math.round(fiveDay[4].main.temp) + '°F')
  $('.desc1').text( fiveDay[0].weather[0].description)
  $('.desc2').text( fiveDay[1].weather[0].description)
  $('.desc3').text( fiveDay[2].weather[0].description)
  $('.desc4').text( fiveDay[3].weather[0].description)
  $('.desc5').text( fiveDay[4].weather[0].description)
 }
 


  // getLocation();
// END SCRIPT
});




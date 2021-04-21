$( document ).ready(function() { 
console.log("ready!")
//set up one call for 5 day forecast + daily? might need weatheronly for daily forecast


// 
const api = {
   key: "cad650368f646db27b36a263f6e8c5df",
   base: "https://api.openweathermap.org/data/2.5/"
}


const currentDate = dayjs().format('MMMM, D, YYYY');
const currentDay = dayjs().format('dddd');
$(".date").text(currentDate);
$('.day').text(currentDay);
$('.day1').text(currentDay);
$('.day2').text(currentDay);
$('.day3').text(currentDay);
$('.day4').text(currentDay);


const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } 
    else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    redirect(lat, lon);
  }

  getLocation();
// END SCRIPT
})




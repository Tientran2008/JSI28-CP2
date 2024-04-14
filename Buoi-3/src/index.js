const cityInput = document.querySelector('#city-input');
const searchForm = document.querySelector('#search-form');
const cityName = document.querySelector('.city-name');
const description = document.querySelector('.description');
const temperature = document.querySelector('.temperature');
const weatherIcon = document.querySelector('.weather-icon');
const wind = document.querySelector('.wind');

const apiKey = "4269652c5e1b6a66a34f9d3d16ecc098"; 

function handleSearchWeatherByCityName(event) {
  event.preventDefault();

  let queryString = cityInput.value;

  // Gửi yêu cầu lấy dữ liệu đến OpenWeatherMap
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${queryString}&appid=${apiKey}&lang=vi&units=metric`)
    .then(response => response.json())
    .then(data => {
     
      console.log(data);
      cityName.textContent = data.name;
      temperature.innerHTML = data.main.temp + `<sup>o</sup>` + 'C';
      weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      description.textContent = data.weather[0].description;
      wind.textContent = "Tốc dộ gió: " + data.wind.speed + "km/h";
    })
    .catch(error => console.error("Lỗi fetch data:", error));
}

searchForm.addEventListener('submit', function (event) {
  handleSearchWeatherByCityName(event)
})
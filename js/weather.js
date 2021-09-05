const API_KEY = "e94f78eb0973385fa8cc0e6776d16252";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(".weather__info span:first-child");
      const city = document.querySelector(".weather span:last-child");
      const weatherImg = document.querySelector("#weather img");
      const temp = parseInt(data.main.temp);

      weatherImg.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      weather.innerText = `${temp} ℃`;
      city.innerText = data.name;
    });
}

function onGeoErr() {
  alert("Can't find you :(");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);

const weather = document.querySelector(".js-weather"),
  weather_span = weather.querySelector("span");

function success(pos) {
  const coords = pos.coords;
  const lat = coords.latitude;
  const lon = coords.longitude;

  fetch("api.json")
    .then((res) => {
      if (res.ok) return res.json();
      console.log(res);
      throw new Error("Look at the response above and look for errors");
    })
    .then((json) => {
      getWeather(lat, lon, json.weather);
    })
    .catch((err) => {
      console.log(err.message);
    });
}

function getWeather(lat, lon, api) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=metric`
  )
    .then((res) => {
      if (res.ok) return res.json();
      console.log(res);
      throw new Error("Look at the response above and look for errors");
    })
    .then((json) => {
      const temperature = json.main.temp;
      const place = json.name;
      weather_span.innerText = `현재 온도 : ${temperature} 지역 :  ${place}`;
    })
    .catch((err) => {
      console.log(err.message);
    });
}

function fail() {
  console.log("위치 정보를 가져올 수 없습니다.");
}

function init() {
  navigator.geolocation.getCurrentPosition(success, fail);
}

init();

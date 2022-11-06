const API_KEY = "fbaaa05b6fbc3d83c2ba738361c744c2";


function onGeoSuccess(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const city = document.querySelector("#weather span:first-child");
    const weather = document.querySelector("#weather span:last-child");
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });
  //fetch는 promise인데 promise는 당장 뭔가 일어나지 않고 시간이 좀 걸리는 것.(서버 응답 시간 등)
  //then을 사용해야 함.
}
function onGeoError(){
  alert("Can't find you.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);


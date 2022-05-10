console.log("welcome to Weather Api 🌍🌞🌡❄")

const api_key = '3208d261271382a0de1aca46d838e08f'

// geolocalización del usuario
const onLoad = () => {
  navigator.geolocation.getCurrentPosition(fetchData)
}

const fetchData = position => {
  const {latitude, longitude} = position.coords // destructuring de la location
  fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${api_key}`)
    .then(response => response.json())
    .then(data => setWeatherData(data))
 
} 


const setWeatherData = data => {
  const weatherData = {
    location: data.name,
    description: data.weather[0].main,
    humidity: "hm " + data.main.humidity,
    pressure:"🌡 " +  data.main.pressure,
    temperature: data.main.temp + " º",
    date: getDate(),
    icon: document.getElementById("icon").src = "http://openweathermap.org/img/wn/"+data.weather[0].icon+".png"}

  // const locationJs = document.getElementById("location")
  // locationJs.append(weatherData.location)

  Object.keys(weatherData).forEach( key =>{
    document.getElementById(key).textContent = weatherData[key]
  })

  cleanUp()

}

const cleanUp = () => {
  let container = document.querySelector('.container_app');
  let loader = document.getElementById('loader');

  loader.style.display = 'none'; 
  container.style.display = 'flex'; 
}

const getDate = () => {
  let date = new Date();
  return `${date.getDate()}-${ ('0' + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`;
}










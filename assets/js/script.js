// const various parts of the body and main here with getElementById
let leftCol = document.getElementById("leftCol");
let rightCol = document.getElementById("rightCol");
let citySearch = document.getElementById("searchbox");
let cityName = document.getElementById("cityBox");
let cityTemp = document.getElementById("tempBox");
let cityHumidity = document.getElementById("humidBox");
let cityWind = document.getElementById("windBox");
let cityDescription = document.getElementById("descBox");
let cityUV = document.getElementById("uvBox");
let searchButton = document.getElementById("search-button");

let input = document.querySelector('.input_text');
// run the weather api fetch request
searchButton.addEventListener('click', function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=96ede77e3f42d4aac807ee057d47cdc9')
  .then(response => response.json())
  .then(data => console.log(data))
  .then(data => {
    let nameValue = data['name'];
    let temperatureValue = data['main']['temp'];
    let desciptionValue = data['weather'][0]['description'];

    name.innerHTML = nameValue;
    temp.innerHTML = tempValue;
    desc.innerHTML = desciptionValue;
  })

.catch(err => alert("Wrong City!"));
})




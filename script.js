// Variáveis e seleção de elementos // Variables and element selection //
const apiKey = "2a9c8d67d9f2e5c376c2e58562654d30";
const apiCountryUrl = "https:www.countryflagicons.com/FLAT/32/.png";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperatura span");
const descElement = document.querySelector("#descricao");
const weatherIconElemnt = document.querySelector("#weather-icon");
const paisElement = document.querySelector("#pais");
const umidityElement = document.querySelector("#umidade span");
const windElement = document.querySelector("#vento span");

const weatherConteiner = document.querySelector(".weather-data");



// Funções // Functions //

const getWeatherData = async(city) => {

    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherURL)
    const data = await res.json()

    return data;
    
}

const showWeatherData = async (city) => {

    const data = await getWeatherData(city)

    console.log(data);

    cityElement.innerText = data.name
    tempElement.innerText = data.main.temp.toFixed(0)
    descElement.innerText = data.weather[0].description
    weatherIconElemnt.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    paisElement.setAttribute("src", `https://www.countryflagicons.com/FLAT/32/${data.sys.country}.png`)
    umidityElement.innerText = `${data.main.humidity}%`
    windElement.innerText = `${parseInt(data.wind.speed )}km/h`

    weatherConteiner.classList.remove('hide');
}   


// Eventos // Events // 

searchBtn.addEventListener("click", (e) => {

    e.preventDefault();
    
    const city = cityInput.value;

    showWeatherData(city);

})

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        let data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";


        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "img/clouds.svg"
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "img/clear.svg"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "img/rain.svg"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "img/drizzle.svg"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "img/mist.svg"
        }

    } catch (error) {
        alert('Ciudad no encontrada')
    }
}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})









// https://es.javascript.info/async-await
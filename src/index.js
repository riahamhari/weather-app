import { processWeather } from "./modules/processData";
import { displayInfo } from "./modules/display";
import { clearDisplay } from "./modules/display";

const btn = document.querySelector('button')
const input = document.querySelector('input')
const API_KEY = config.API_KEY;

async function getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${API_KEY}`, { mode: 'cors' });
    const weatherData = await response.json();

    const newWeather = processWeather(weatherData)
    displayInfo(newWeather)

}

btn.addEventListener('click', () => {
    clearDisplay()
    getWeather()
    input.value = ''
})





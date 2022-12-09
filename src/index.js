import { processWeather } from "./modules/processData";
import { displayInfo } from "./modules/display";
import { clearDisplay } from "./modules/display";

const btn = document.querySelector('button')
const input = document.querySelector('input')

async function getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=3df8a87758f9170b7460a19f89b1958b`, { mode: 'cors' });
    const weatherData = await response.json();
    console.log(weatherData)
    const newWeather = processWeather(weatherData)
    displayInfo(newWeather)

}

btn.addEventListener('click', () => {
    clearDisplay()
    getWeather()
    input.value = ''
})





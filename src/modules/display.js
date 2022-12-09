// display info on webpage

export const displayInfo = (weatherInfo) => {
    const cityName = document.createElement('h2')
    cityName.setAttribute('id', 'cityName')
    cityName.innerText = `${weatherInfo.name}, ${weatherInfo.country}`
    const conditions = document.createElement('p')
    conditions.setAttribute('id', 'conditions')
    conditions.innerText = weatherInfo.conditions
    const temperature = document.createElement('span')
    temperature.setAttribute('id', 'temperature')
    temperature.innerText = `${weatherInfo.temperature}°C`
    const feelsLike = document.createElement('p')
    feelsLike.setAttribute('id', 'feelsLike')
    feelsLike.innerText = `FEELS LIKE: ${weatherInfo.feelsLike}°C`
    const wind = document.createElement('p')
    wind.setAttribute('id', 'wind')
    wind.innerText = `WIND: ${weatherInfo.wind} KM/H`
    const humidity = document.createElement('p')
    humidity.setAttribute('id', 'humidity')
    humidity.innerText = `HUMIDITY: ${weatherInfo.humidity}%`

    const column = document.createElement('div')
    column.classList.add('column-1')

    const currentWeather = document.createElement('div')
    currentWeather.setAttribute('id', 'currentWeather')
    const weatherDetails = document.createElement('div')
    weatherDetails.setAttribute('id', 'weatherDetails')
    weatherDetails.append(feelsLike, wind, humidity)
    currentWeather.append(temperature, weatherDetails)
    column.append(cityName, conditions, currentWeather)
    const weather = document.querySelector('.weatherInfo')
    weather.appendChild(column)

}

export const clearDisplay = () => {
    const weatherInfo = document.querySelector('.weatherInfo')
    weatherInfo.innerHTML = ''
}

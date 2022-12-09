

// process the JSON data you’re getting from the API and return an object with only the
//  data you require for your app.

export const processWeather = (data) => {
    const name = data.name.toUpperCase()
    const country = data.sys.country
    const conditions = data.weather[0].main.toUpperCase()
    const temperature = Math.round(data.main.temp)
    const feelsLike = Math.round(data.main.feels_like)
    const wind = Math.round(data.wind.speed * 3.6)
    const humidity = data.main.humidity
    return weatherData(name, country, conditions, temperature, feelsLike, wind, humidity)

}

const weatherData = (name, country, conditions, temperature, feelsLike, wind, humidity) => {
    return { name, country, conditions, temperature, feelsLike, wind, humidity }
}
let weather = []
export const getWeather = () => {
  return fetch(
    'https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22'
  )
    .then((response) => response.json())
    .then((parsedWeather) => {
      weather = parsedWeather
    })
}

export const useWeather = () => {
  return weather.slice()
}

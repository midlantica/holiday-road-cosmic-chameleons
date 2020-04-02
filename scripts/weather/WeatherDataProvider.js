let weather = []

const apiKey = '4244638fb9d6db97c0be6e1c03329477'
const lat = ''
const long = ''

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={apiKey}
export const getWeather = () => {
  return fetch(
    'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=2d2e78f72daf9fab30d7c1c80434141b'
  )
    .then((response) => response.json())
    .then((parsedWeather) => {
      weather = parsedWeather.weather
    })
}

export const useWeather = () => {
  return weather.slice()
}

import { keys } from '../Settings.js'

const eventHub = document.querySelector('.container')

// Stores the returned value of the weather API into an empty object (because the data returned back (of parsedweather) is an object):

let weather = {}

// Dispatches custom event notifying other modules that a weather state change has occurred:

const dispatchWeatherChangeEvent = () => {
  const weatherStateChangedEvent = new CustomEvent('weatherStateChanged')
  eventHub.dispatchEvent(weatherStateChangedEvent)
}

// Fetches 5-day weather forecast by zip code, stores it in "weather" object, and dispatches:

export const getWeather = (postalCode) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?zip=${postalCode}&units=imperial&&appid=${keys.weatherKey}`
  )
    .then((response) => response.json())
    .then((parsedWeather) => {
      weather = parsedWeather.list[0]
    })
    .then(dispatchWeatherChangeEvent)
}

// Exports a copy of the updated weather object for use by other modules:

export const useWeather = () => {
  return weather
}

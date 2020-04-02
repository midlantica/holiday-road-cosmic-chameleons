import { keys } from '../Settings.js'

const eventHub = document.querySelector(".container")

let weather = []

// Fetches 5-day weather forecast by zip code: 

export const getWeather = (postalCode) => {
  return fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${postalCode}&appid=${keys.weatherKey}`)
    .then((response) => response.json())
    .then((parsedWeather) => {
      weather = parsedWeather.list[0].weather[0].description
    })
}

// Dispatches custom event notifying other modules that a weather state change has occurred:


// Exports a copy of the updated weather array for use by other modules: 

export const useWeather = () => {
  return weather.slice()
}
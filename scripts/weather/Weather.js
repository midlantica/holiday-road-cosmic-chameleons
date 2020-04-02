export const Weather = (weatherObject) => {
  return `
    <div class"weather">
      <h4>Weather Forecast:</h4>
      <p>${weatherObject.location.name}</p>
      <p>${weatherObject.description}</p>
    </div>
  `
}

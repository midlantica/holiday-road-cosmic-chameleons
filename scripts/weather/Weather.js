export const Weather = (weatherObject) => {
  return `
    <div class"weather box">
      <h4>Weather</h4>
      <p>${weatherObject.description}</p>
    </div>
  `
}

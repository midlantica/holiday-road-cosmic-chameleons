// This is just a blueprint for some logic we want to execute at some point IN THE FUTURE!!!!!
export const Eatery = eateryObject => {}
const eventHub = document.querySelector('.container')

eventHub.addEventListener('eateryChosenEvent', customEvent => {
  render()
})

// Exports a function that renders the HTML for the eatery preview:

export const Eatery = eateryObject => {
  return `
  <section class="eatery">
    <h2>${eateryObject.businessName}</h2>
    <p>${eateryObject.city}</p>
    <p>${eateryObject.state}</p>
    <button id="button--${eateryObject.id}">Details</button>
  </section>
  `
}

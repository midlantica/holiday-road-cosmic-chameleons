const eventHub = document.querySelector(".container")

eventHub.addEventListener("eateryChosenEvent", customEvent => {
  render()
})

// Exports a function that renders the HTML for the eatery preview:

export const Eatery = (eateryObject) => {
  return `
  <section class="eatery">
    <h2>${eateryObject.businessName}</h2>
    <p>${eateryObject.city}</p>
    <p>${eateryObject.state}</p>
    <button id="button--${eateryObject.id}">Details</button>  
  </section>
  `
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const render = () => {

  contentTarget.innerHTML = Eatery.map(
    currentEateryObject => {
      return Eatery(currentEateryObject)
    }
  )

}

export const EateryList = () => {
  render()
}

export const Park = (parkObject) => {
  return `
        <h3>${parkObject.name}</h3>
        <p>${parkObject.states}</p>
        <button id="button--${parkObject.id}">Details</button>
    `
}


const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
  // Generate custom event
  if (clickEvent.target.id.startsWith('button--')) {

    const parkId = clickEvent.target.id.split("--")[1]

    // Pass ID of Eatery object along on custom event
    const parkChosenEvent = new CustomEvent('parkDetailBtnClicked', {
      detail: {
        clickedPark: parkId
      }
    })

    // Dispatch Custom event
    eventHub.dispatchEvent(parkChosenEvent)
  }

})
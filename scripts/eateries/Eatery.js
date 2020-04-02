export const Eatery = (eateryObject) => {
  return `
    <h3 id="eateryName">${eateryObject.businessName}</h3>
    <p>${eateryObject.city}</p>
    <p>${eateryObject.state}</p>
    <button id="eateryDetailBtn--${eateryObject.id}">Details</button>
  `
}

const eventHub = document.querySelector('.container')

eventHub.addEventListener('click', (clickEvent) => {
  // Generate custom event
  if (clickEvent.target.id.startsWith('eateryDetailBtn--')) {
    const eateryId = clickEvent.target.id.split('--')[1]

    // Pass ID of Eatery object along on custom event
    const eateryChosenEvent = new CustomEvent('eateryDetailBtnClicked', {
      detail: {
        clickedEatery: eateryId
      }
    })

    // Dispatch Custom event
    eventHub.dispatchEvent(eateryChosenEvent)
  }
})

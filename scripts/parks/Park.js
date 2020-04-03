// Exports function that renders HTML for park itinerary preview:

export const Park = (parkObject) => {
  return `
      <div class="box">
        <h4>${parkObject.name}</h4>
        <p>${parkObject.addresses[0].city}, ${parkObject.states}</p>
        <div class="weatherContainer"></div>
        <button id="parkDetailBtn--${parkObject.parkCode}">Details</button>
      </div>
    `
}

const eventHub = document.querySelector('.container')

// Dispatches custom event that isolates the park code as the corresponding "clickedPark" id between the detail button and dialog box:

eventHub.addEventListener('click', (clickEvent) => {
  if (clickEvent.target.id.startsWith('parkDetailBtn--')) {
    const parkCode = clickEvent.target.id.split('--')[1]
    const parkChosenEvent = new CustomEvent('parkDetailBtnClicked', {
      detail: {
        clickedPark: parkCode
      }
    })
    eventHub.dispatchEvent(parkChosenEvent)
  }
})

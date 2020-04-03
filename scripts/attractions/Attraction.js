// Exports a function that renders the HTML for the attraction preview

export const Attraction = (attractionObject) => {
  return `
  <div class="box">
    <h4 id="attractionName">${attractionObject.name}</h4>
    <p>${attractionObject.state}</p>
    <button id="attraction--${attractionObject.id}">Details</button>
  </div>
  `
}

const eventHub = document.querySelector('.container')

eventHub.addEventListener('click', (clickEvent) => {
  // Generate custom event
  if (clickEvent.target.id.startsWith('attraction--')) {
    const attractionId = clickEvent.target.id.split('--')[1]

    // Pass ID of Atrtraction object along on custom event
    const attractionChosenEvent = new CustomEvent('attractionDetailBtnClicked', {
      detail: {
        clickedAttraction: attractionId
      }
    })

    // Dispatch Custom event
    eventHub.dispatchEvent(attractionChosenEvent)
  }
})
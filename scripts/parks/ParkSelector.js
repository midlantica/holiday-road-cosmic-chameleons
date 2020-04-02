import { useParks } from './ParkDataProvider.js'

const contentTarget = document.querySelector('.selector__park')
const eventHub = document.querySelector('.container')

// Exports a function that renders a copy of the parks data inside the parkSelect dropdown:

export const ParkSelector = () => {
    const parksCollection = useParks()
    return contentTarget.innerHTML = `
        <select id="parkSelect">
            <option value="0">Pick a Park</option>
            ${parksCollection.map(singlePark => {
        return `<option value="${singlePark.parkCode}">${singlePark.name}</option>`
    })}
        </select>
    `
}

// Dispatches "parkChosen" custom event to Weather API and ItineraryPreview.js :

contentTarget.addEventListener('change', (changeEvent) => {
  if (changeEvent.target.id === 'parkSelect') {
    const theParkThatWasChosen = changeEvent.target.value

    const parkChosenEvent = new CustomEvent('parkChosen', {
      detail: {
        chosenPark: theParkThatWasChosen
      }
    })
    eventHub.dispatchEvent(parkChosenEvent)
  }
})

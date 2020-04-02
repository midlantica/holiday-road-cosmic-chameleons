import { useAttractions } from './AttractionDataProvider.js'

const contentTarget = document.querySelector('.selector__attraction')
const eventHub = document.querySelector('.container')

// Exports a function that renders a copy of the attractions data inside the dropdown

export const AttractionSelector = () => {
  const attractionsCollection = useAttractions()
  return (contentTarget.innerHTML = `
        <select id="attractionSelect" class="dropdown">
            <option value="0">Pick an Attraction</option>
            ${attractionsCollection.map((singleAttraction) => {
              return `<option value="${singleAttraction.id}">${singleAttraction.name}</option>`
            })}
        </select>
    `)
}

// Dispatch "AttractionPreviewEvent" custom event to ItineraryPreview.js

contentTarget.addEventListener('change', (changeEvent) => {
  if (changeEvent.target.id === 'attractionSelect') {
    const theAttractionThatWasChosen = parseInt(changeEvent.target.value)
    const attractionChosenEvent = new CustomEvent('attractionChosen', {
      detail: {
        chosenAttraction: theAttractionThatWasChosen
      }
    })
    eventHub.dispatchEvent(attractionChosenEvent)
  }
})

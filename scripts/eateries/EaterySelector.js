import { useEateries } from './EateryDataProvider.js'

// Get a reference to the DOM element where the <select> will be rendered
const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.selector__eatery')

contentTarget.addEventListener('change', (changeEvent) => {
  if (changeEvent.target.id === 'eaterySelect') {
    const theEateryThatWasChosen = changeEvent.target.value

    const eateryChosenEvent = new CustomEvent('eateryChosen', {
      detail: {
        chosenEatery: theEateryThatWasChosen,
      },
    })

    eventHub.dispatchEvent(eateryChosenEvent)
    console.log('Eatery choice made: ' + theEateryThatWasChosen)
  }
})

export const EaterySelector = () => {
  // Get all Eateries from application state
  const eateries = useEateries()

  const render = (eateriesCollection) => {
    contentTarget.innerHTML = `
      <select class="dropdown" id="eaterySelect">
        <option value="0">Pick an Eatery...</option>
        ${eateriesCollection.map((singleEatery) => {
          return `<option value="${singleEatery.id}">${singleEatery.businessName}</option>`
        })}
      </select>
    `
  }

  render(eateries)
}

import { useEateries } from './EateryDataProvider.js'

// Get a reference to the DOM element where the <select> will be rendered
const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.selector__eatery')

contentTarget.addEventListener('change', changeEvent => {
  const theEateryThatWasChosen = changeEvent.target.value

  const eateryChosenEvent = new CustomEvent('eateryChosen', {
    detail: {
      chosenEatery: theEateryThatWasChosen
    }
  })

  eventHub.dispatchEvent(eateryChosenEvent)
})

export const EaterySelector = () => {
  // Get all Eateries from application state
  const eateries = useEateries()

  const render = eateriesCollection => {
    contentTarget.innerHTML = `
      <select class="dropdown" id="eaterySelect">
        <option value="0">Please select an eatery...</option>
        ${eateriesCollection.map(singleEatery => {
          return `<option>${singleEatery.businessName}</option>`
        })}
      </select>
    `
  }

  render(eateries)
}

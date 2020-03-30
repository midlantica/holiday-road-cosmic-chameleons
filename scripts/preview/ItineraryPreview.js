import { Eatery } from '../eateries/Eatery.js'
import { useEateries } from '../eateries/EateryDataProvider.js'
Eatery()

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.preview__eatery')

eventHub.addEventListener('eateryChosen', event => {
  // What crime was chosen?
  const theEateryThatWasChosen = event.detail.chosenEatery

  // Get the eateries
  let eateriesToDisplay = useEateries()

  if (theEateryThatWasChosen !== '0') {
    // find the list of eateries who committed the crime
    eateriesToDisplay = eateriesToDisplay.find(eateries => {
      if (chosenEatery === theEateryThatWasChosen) {
        return true
      }
      return false
    })
  }
  render(eateriesToDisplay)
})

const render = eateriesToRender => {
  contentTarget.innerHTML = eateriesToRender.map(eateryObject => {
    return Eatery(eateryObject)
  })
}

export const EaterySelected = () => {
  const eateries = useEateries()
  render(eateries)
}

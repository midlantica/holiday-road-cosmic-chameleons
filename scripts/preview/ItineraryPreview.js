import { Eatery } from '../eateries/Eatery.js'
import { Park } from '../parks/Park.js'
import { useParks } from '../parks/ParkDataProvider.js'

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.itineraryPreview')
const parkContentTarget = document.querySelector('.preview__park')
const eateryContentTarget = document.querySelector('.preview__eatery')
const attractionContentTarget = document.querySelector('.preview__attraction')

eventHub.addEventListener('parkChosen', customEvent => {
  const parksArray = useParks()

  const foundPark = parksArray.find(parkObj => parkObj.id === customEvent.detail.chosenPark)

  parkContentTarget.innerHTML = Park(foundPark)
})

eventHub.addEventListener('eateryChosen', customEvent => {
  const eateriesArray = useEateries()

  const foundEatery = eateriesArray.find(
    eateryObj => eateryObj.id === customEvent.detail.chosenEatery
  )

  eateryContentTarget.innerHTML = Eatery(foundEatery)
})

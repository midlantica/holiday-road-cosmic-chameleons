import { Park } from '../parks/Park.js'
import { Eatery } from '../eateries/Eatery.js'
import { Attraction } from '../attractions/Attraction.js'
import { useParks } from '../parks/ParkDataProvider.js'
import { useEateries } from '../eateries/EateryDataProvider.js'
import { useAttractions } from '../attractions/AttractionDataProvider.js'

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

eventHub.addEventListener('attractionChosen', customEvent => {
  const attractionsArray = useAttractions()
  const foundAttraction = attractionsArray.find(attractionObj => {
    return attractionObj.id === parseInt(customEvent.detail.chosenAttraction)
  })
  attractionContentTarget.innerHTML = Attraction(foundAttraction)  
})

eventHub.addEventListener('eateryChosen', customEvent => {
  const eateriesArray = useEateries()
  const chosenEatery = eateriesArray.find(eateryObject => {
    return eateryObject.id === parseInt(customEvent.detail.chosenEatery)
  })
  eateryContentTarget.innerHTML = Eatery(chosenEatery)
})



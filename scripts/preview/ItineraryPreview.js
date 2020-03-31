import { Park } from '../parks/Park.js'
import { Eatery } from '../eateries/Eatery.js'
import { Attraction } from '../attractions/Attraction.js'
import { useParks } from '../parks/ParkDataProvider.js'
import { useEateries } from '../eateries/EateryDataProvider.js'
import { useAttractions } from '../attractions/AttractionDataProvider.js'
import { saveItinerary } from '../itineraries/ItineraryDataProvider.js'
import { SaveItineraryButton } from './SaveItineraryButton.js'

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.previewContainer')
const parkContentTarget = document.querySelector('.preview__park')
const eateryContentTarget = document.querySelector('.preview__eatery')
const attractionContentTarget = document.querySelector('.preview__attraction')
const SaveItineraryContentTarget = document.querySelector('.button--saveItinerary')

// Create an object to store the selection state of each dropdown

const userChoices = {
  parkChosen: false,
  eateryChosen: false,
  attractionChosen: false
}

// Create a function that verifies if all choices have been made before rendering the save button

const verifyUserSelection = () => {
  if (userChoices.parkChosen && userChoices.eateryChosen && userChoices.attractionChosen) {
    const renderSaveItineraryButton = SaveItineraryButton()
    SaveItineraryContentTarget.innerHTML = renderSaveItineraryButton
  }
}

// Create a custom event that finds the user-selected park/eatery/attraction and inserts into the HTML
// Change the state of the parkChosen/eateryChosen/attractionChosen event to true once the user has selected an option
// Call the verifyUserSelection function to verify that all selections have been made; if yes, render button

eventHub.addEventListener('parkChosen', customEvent => {
  const parksArray = useParks()
  const foundPark = parksArray.find(parkObj => {
    return parkObj.id === (customEvent.detail.chosenPark)
  })
  parkContentTarget.innerHTML = Park(foundPark)
  userChoices.parkChosen = true
  verifyUserSelection()
})

eventHub.addEventListener('attractionChosen', customEvent => {
  const attractionsArray = useAttractions()
  const foundAttraction = attractionsArray.find(attractionObj => {
    return attractionObj.id === parseInt(customEvent.detail.chosenAttraction)
  })
  attractionContentTarget.innerHTML = Attraction(foundAttraction) 
  userChoices.attractionChosen = true 
  verifyUserSelection()
})

eventHub.addEventListener('eateryChosen', customEvent => {
  const eateriesArray = useEateries()
  const chosenEatery = eateriesArray.find(eateryObject => {
    return eateryObject.id === parseInt(customEvent.detail.chosenEatery)
  })
  eateryContentTarget.innerHTML = Eatery(chosenEatery)
  userChoices.eateryChosen = true
  verifyUserSelection()
})

// Create a click event that generates a new itinerary object to be saved to itineraries.json

contentTarget.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "button--saveItinerary") {
    const parkSelected = document.querySelector("#parkSelect").value
    const eaterySelected = document.querySelector("#eaterySelect").value
    const attractionSelected = document.querySelector("#attractionSelect").value

    const newItinerary = {
      park: parkSelected,
      eatery: eaterySelected,
      attraction: attractionSelected
    }
  saveItinerary(newItinerary)
  }
})
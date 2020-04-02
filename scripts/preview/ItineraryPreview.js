import { Attraction } from '../attractions/Attraction.js'
import { useAttractions } from '../attractions/AttractionDataProvider.js'
import { Eatery } from '../eateries/Eatery.js'
import { useEateries } from '../eateries/EateryDataProvider.js'
import { saveItinerary } from '../itineraries/ItineraryDataProvider.js'
import { Park } from '../parks/Park.js'
import { useParks } from '../parks/ParkDataProvider.js'
import { Weather } from '../weather/Weather.js'
import { getWeather, useWeather } from '../weather/WeatherDataProvider.js'
import { SaveItineraryButton } from './SaveItineraryButton.js'

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.previewContainer')
const parkContentTarget = document.querySelector('.preview__park')
const eateryContentTarget = document.querySelector('.preview__eatery')
const attractionContentTarget = document.querySelector('.preview__attraction')
const SaveItineraryContentTarget = document.querySelector('.button--saveItinerary')
const weatherTarget = document.querySelector('.weatherContainer')

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

eventHub.addEventListener('parkChosen', (customEvent) => {
  const parksArray = useParks()
  console.log(parksArray)
  const foundPark = parksArray.find(parkObj => {
    return parkObj.parkCode === (customEvent.detail.chosenPark)
  })
  parkContentTarget.innerHTML = Park(foundPark)
  userChoices.parkChosen = true
  verifyUserSelection()
  // Fetch weather API once 'parkChosen' custom event occurs
  getWeather(foundPark.addresses[0].postalCode).then(() => {
    const weatherData = useWeather()
    weatherTarget.innerHTML += Weather(weatherData[0])
  })
})

eventHub.addEventListener('attractionChosen', (customEvent) => {
  const attractionsArray = useAttractions()
  const foundAttraction = attractionsArray.find((attractionObj) => {
    return attractionObj.id === parseInt(customEvent.detail.chosenAttraction)
  })
  attractionContentTarget.innerHTML = Attraction(foundAttraction)
  userChoices.attractionChosen = true
  verifyUserSelection()
})

eventHub.addEventListener('eateryChosen', (customEvent) => {
  const eateriesArray = useEateries()
  const chosenEatery = eateriesArray.find((eateryObject) => {
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
    // Find the corresonding park object an grab its name 
    const parksList = useParks()
    const locatedPark = parksList.find(parkObject => {
      return parkObject.parkCode === parkSelected
    })
     // Find the corresonding eatery object an grab its name 
     const eateriesList = useEateries()
     const locatedEatery = eateriesList.find(eateryObject => {
       return eateryObject.id === parseInt(eaterySelected)
     })
     // Find the corresonding attraction object an grab its name 
     const attractionsList = useAttractions()
     const locatedAttraction = attractionsList.find(attractionObject => {
       return attractionObject.id === parseInt(attractionSelected)
     })
    // Store the data for the saved itinerary display and call function to render it 
    const newItinerary = {
      park: locatedPark.name,
      eatery: locatedEatery.businessName,
      attraction: locatedAttraction.name
    }
    saveItinerary(newItinerary)
  }
})

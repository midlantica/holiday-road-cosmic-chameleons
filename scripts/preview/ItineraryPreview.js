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
const weatherContentTarget = document.querySelector('.weatherContainer')

// Creates an object to store the selection state of each dropdown:

const userChoices = {
  parkChosen: false,
  eateryChosen: false,
  attractionChosen: false
}

// Creates a function that verifies if all choices have been made before rendering the save button:

const verifyUserSelection = () => {
  if (userChoices.parkChosen && userChoices.eateryChosen && userChoices.attractionChosen) {
    const renderSaveItineraryButton = SaveItineraryButton()
    SaveItineraryContentTarget.innerHTML = renderSaveItineraryButton
  }
}

// Creates a custom event that finds the user-selected park and inserts into the HTML;
// Changes the state of the parkChosen event to true once the user has selected an option;
// Calls the verifyUserSelection function to verify that all selections have been made; if yes, renders button;
// Fetches weather data from API once 'parkChosen' custom event occurs and renders to DOM:

eventHub.addEventListener('parkChosen', (customEvent) => {
  const parksArray = useParks()
  console.log(parksArray)
  const foundPark = parksArray.find(parkObj => {
    return parkObj.parkCode === (customEvent.detail.chosenPark)
  })
  parkContentTarget.innerHTML = Park(foundPark)
  userChoices.parkChosen = true
  verifyUserSelection()
  getWeather(foundPark.addresses[0].postalCode).then(() => {
    const weatherData = useWeather()
    weatherContentTarget.innerHTML = Weather(weatherData)
    })
})

// Creates a custom event that finds the user-selected attraction and inserts into the HTML;
// Changes the state of the attractionChosen event to true once the user has selected an option:

eventHub.addEventListener('attractionChosen', (customEvent) => {
  const attractionsArray = useAttractions()
  const foundAttraction = attractionsArray.find((attractionObj) => {
    return attractionObj.id === parseInt(customEvent.detail.chosenAttraction)
  })
  attractionContentTarget.innerHTML = Attraction(foundAttraction)
  userChoices.attractionChosen = true
  verifyUserSelection()
})

// Creates a custom event that finds the user-selected eatery and inserts into the HTML;
// Changes the state of the eateryChosen event to true once the user has selected an option:

eventHub.addEventListener('eateryChosen', (customEvent) => {
  const eateriesArray = useEateries()
  const chosenEatery = eateriesArray.find((eateryObject) => {
    return eateryObject.id === parseInt(customEvent.detail.chosenEatery)
  })
  eateryContentTarget.innerHTML = Eatery(chosenEatery)
  userChoices.eateryChosen = true
  verifyUserSelection()
})

// Creates a click event that generates a new itinerary object to be saved to itineraries.json:

contentTarget.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "button--saveItinerary") {
    const parkSelected = document.querySelector("#parkSelect").value
    const eaterySelected = document.querySelector("#eaterySelect").value
    const attractionSelected = document.querySelector("#attractionSelect").value
    // Finds the corresonding park object and grabs its name:
    const parksList = useParks()
    const locatedPark = parksList.find(parkObject => {
      return parkObject.parkCode === parkSelected
    })
     // Finds the corresonding eatery object and grabs its name: 
     const eateriesList = useEateries()
     const locatedEatery = eateriesList.find(eateryObject => {
       return eateryObject.id === parseInt(eaterySelected)
     })
     // Finds the corresonding attraction object and grabs its name:
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

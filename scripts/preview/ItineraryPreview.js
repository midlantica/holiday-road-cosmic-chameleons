// import { Park } from "../parks/Park.js"
// import { SaveItineraryButton } from "../preview/SaveItineraryButton.js"
// import "../weather/Weather.js"
//  SPITBALLING.......???
import Eatery from './eateries/Eatery.js'
// import EaterySelector from './eateries/EaterySelector.js'
// import parks from './parks/Park.js'
// import parksDataProvider from './parks/ParkDataProvider.js'
// import attractions from '.attractions/Attraction.js'
// import attraDataProviderctions from '.attractions/Attraction.DataProvider.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".itineraryPreview")

Eatery()

// const render = () => 
//  getParks() 
//  getAttractions()
//  getEateries()

// looping logic on all of those... 
// refactor this??
// THIS IS FROM GLASSDALE notesList.js
// getNotes().then(() => {
//     const allTheNotes = useNotes()
//     const allTheCriminals = useCriminals()

//                                        >>.find
//     contentTarget.innerHTML = allTheNotes.map(
//       currentNoteObject => {

//         // Find the criminal for the current note
//         const theFoundCriminal = allTheCriminals.find(
//           (currentCriminalObject) => {
//             return currentNoteObject.criminal === currentCriminalObject.id
//           }
//         )

//         return Note(currentNoteObject, theFoundCriminal)
//       }
//     ).join("")
//   })
// }


//   render()
// ??????????????????


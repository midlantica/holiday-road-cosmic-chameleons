import { Itinerary } from './Itinerary.js'
import { useItineraries } from './ItineraryDataProvider.js'

let contentTarget = document.querySelector(".itinerariesContainer");
const eventHub = document.querySelector(".container")

export const renderItinerary = () => {
    const itineraryEntries = useItineraries();
    for (const itinerary of itineraryEntries) {
        const newItinerary = Itinerary(itinerary);
        contentTarget.innerHTML += newItinerary
    }
}


eventHub.addEventListener("saveItinerary", customEvent => {

    contentTarget.innerHTML = ""
    renderItinerary()
})

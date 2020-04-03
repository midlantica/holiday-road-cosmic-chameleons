import { Itinerary } from './Itinerary.js'
import { useItineraries, deleteItinerary } from './ItineraryDataProvider.js'

let contentTarget = document.querySelector(".itinerariesContainer");
const eventHub = document.querySelector(".container")

export const renderItinerary = () => {
    const itineraryEntries = useItineraries();
    for (const itinerary of itineraryEntries) {
        const newItinerary = Itinerary(itinerary);
        contentTarget.innerHTML += newItinerary
    }
}

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteItinBtn--")) {
        const [prefix, itineraryID] = clickEvent.target.id.split("--")
        deleteItinerary(itineraryID)
    }
})

eventHub.addEventListener("saveItinerary", customEvent => {
    contentTarget.innerHTML = ""
    renderItinerary()
})

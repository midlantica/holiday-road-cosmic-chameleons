import { Itinerary } from './Itinerary.js'
import { useItineraries } from './ItineraryDataProvider.js'

const contentTarget = document.querySelector(".itinerariesContainer");

export const renderItinerary = () => {
    const itineraryEntries = useItineraries();
    for (const itinerary of itineraryEntries) {
        const newItinerary = Itinerary(itinerary);
        contentTarget.innerHTML += newItinerary
    }
}
const eventHub = document.querySelector(".container")

const dispatchSavedItinerary = () => {
    const saveItineraryEvent = new CustomEvent("saveItinerary")
    eventHub.dispatchEvent(saveItineraryEvent)
}

let itineraries = []

export const getItineraries = () => {
    return fetch ("http://localhost:3000/itineraries")
        .then(response => response.json())
        .then(parsedItineraries => {
            itineraries = parsedItineraries
        })
}

export const saveItinerary = (newItinerary) => {
    fetch("http://localhost:3000/itineraries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newItinerary)
    })
    .then(getItineraries)
    .then(dispatchSavedItinerary)
}

export const deleteItinerary = (itineraryId) => {
    return fetch(`http://localhost:3000/itineraries/${itineraryId}`, {
        method: "DELETE"
    })
        .then(getItineraries)
        .then(dispatchSavedItinerary)
}

export const useItineraries = () => {
    return itineraries.slice()
}

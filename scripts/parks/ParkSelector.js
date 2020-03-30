import { useParks } from "./parkDataProvider.js"


const contentTarget = document.querySelector(".selectorContainer")
const eventHub = document.querySelector(".container")



export const ParkSelector = () => {
    const parksCollection = useParks()
    return contentTarget.innerHTML = `
        <select id="parkSelect">
            <option value="0">Pick a Park</option>
            ${parksCollection.map(singlePark => {
                return `<option>${singlePark.name}</option>`
            })}
        </select>
    `
}

// Dispatch "ParkPreviewEvent" custom event to Weather API and ItineraryPreview.js 

contentTarget.addEventListener("change", changeEvent => {
    if(changeEvent.target.id === "parkSelect") {
        const theParkThatWasChosen = changeEvent.target.value

        const parkChosenEvent = new CustomEvent("parkChosen", {
            detail: {
                chosenPark: theParkThatWasChosen
            }
        })
        eventHub.dispatchEvent(parkChosenEvent)
    }
})
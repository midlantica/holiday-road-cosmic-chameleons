import { useAttractions } from "./AttractionDataProvider.js"


const contentTarget = document.querySelector(".selector__attraction")
const eventHub = document.querySelector(".container")



export const AttractionSelector = () => {
    const attractionsCollection = useAttractions()
    return contentTarget.innerHTML = `
        <select id="attractionSelect">
            <option value="0">Pick an Attraction</option>
            ${attractionsCollection.map(singleAttraction => {
                return `<option>${singleAttraction.name}</option>`
            })}
        </select>
    `
}

// Dispatch "AttractionPreviewEvent" custom event to ItineraryPreview.js 

contentTarget.addEventListener("change", changeEvent => {
    if(changeEvent.target.id === "attractionSelect") {
        const theAttractionThatWasChosen = changeEvent.target.value

        const attractionChosenEvent = new CustomEvent("attractionChosen", {
            detail: {
                chosenAttraction: theAttractionThatWasChosen
            }
        })
        eventHub.dispatchEvent(attractionChosenEvent)
    }
})
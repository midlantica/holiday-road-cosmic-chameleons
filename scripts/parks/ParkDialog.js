import { useParks } from "./ParkDataProvider.js"

const contentTarget = document.querySelector(".dialog__park")
const eventHub = document.querySelector(".container")

// Creates custom event that finds corresponding park within the data array and matches it to the correspoding "clickedPark" id from Park.js. When found, returns true and opens dialog box:

eventHub.addEventListener("parkDetailBtnClicked", customEvent => {
    const parkCode = customEvent.detail.clickedPark
    const ParkArray = useParks()
    const parkLocated = ParkArray.find(
        (currentPark) => {
            if (currentPark.parkCode === parkCode) {
                return true
            }
            return false
        }
    )
    ParkDialog(parkLocated)
    contentTarget.showModal()
})

// Function that renders HTML for dialog box 

const ParkDialog = (parkObject) => {
    contentTarget.innerHTML = `
        <h3>${parkObject.name}</h3>
        <p>${parkObject.addresses[0].city}, ${parkObject.states}</p>
        <p>${parkObject.latLong}</p>
        <p>${parkObject.description}</p>
        <p>${parkObject.url}</p>
    `
}
import { useParks } from "./ParkDataProvider.js"

const contentTarget = document.querySelector(".dialog__park")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("parkDetailBtnClicked", customEvent => {
    const parkId = customEvent.detail.clickedPark
    const ParkArray = useParks()
    const parkLocated = ParkArray.find(
        (currentPark) => {
            if (currentPark.id === parseInt(parkId)) {
                return true
            }
            return false
        }
    )
    ParkDialog(parkLocated)
    contentTarget.showModal()
})

export const ParkDialog = (parkDialogObject) => {
    return `
        <section class="preview__park">
            <h3>${parkDialogObject.name}</h3>
            <p>${parkDialogObject.addresses}</p>
            <p>${parkDialogObject.states}</p>
            <p>${parkDialogObject.latLong}</p>
            <p>${parkDialogObject.description}</p>
            <p>${parkDialogObject.parkCode}</p>
            <p>${parkDialogObject.entranceFees}</p>
            <p>${parkDialogObject.url}</p>
        </section>
    `
}
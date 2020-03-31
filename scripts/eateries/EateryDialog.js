import { useEateries } from "./EateryDataProvider.js"

const contentTarget = document.querySelector(".eateryDialog")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("EateryDetailsClicked", customEvent => {
    // Get the eatery id
    const eateryId = customEvent.detail.chosenEatery

    const eateryArray = useEateries()

    // Find returns the very first object that matches the condition in the callback function
    const iFoundYou = eateryArray.find(
        (currentEatery) => {
            if (currentEatery.id === parseInt(eateryId)) {
                return true
            }
            return false
        }
    )

    EateryDialog(iFoundYou)

    const myEateryDialog = document.querySelector("#eateryDialog")
    myEateryDialog.showModal()
})

export const EateryDialog = (eateryObject) => {
    contentTarget.innerHTML = `
        <dialog id="eateryDialog">
            ${
                eateryObject.map(
                    (currentEatery) => {
                        return `
                        <section class="eatery">
                          <h4>${eateryObject.businessName}</h>
                          <p>${eateryObject.description}</p>
                          <p>${eateryObject.city}</p>
                          <p>${eateryObject.state}</p>
                          <p>${eateryObject.ameneties.ameneties.wifi}</p>
                        </section>  
                        `
                    }
                ).join("")
            }
        </dialog>
    `
}

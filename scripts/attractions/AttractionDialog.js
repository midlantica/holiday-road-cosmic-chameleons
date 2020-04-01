import { useAttractions } from './AttractionDataProvider.js'

const contentTarget = document.querySelector('.dialog__attraction')
const eventHub = document.querySelector('.container')

eventHub.addEventListener('attractionDetailBtnClicked', customEvent => {
  // Get the attraction id
  const attractionId = customEvent.detail.clickedAttraction

  const attractionArray = useAttractions()

  // Find returns the very first object that matches the condition in the callback function
  const iFoundYou = attractionArray.find(currentAttraction => {
    if (currentAttraction.id === parseInt(attractionId)) {
      return true
    }
    return false
  })

  AttractionDialog(iFoundYou)
  contentTarget.showModal()
})

export const AttractionDialog = attractionDialogObject => {
  contentTarget.innerHTML = `
    <section class="attraction">
      <h3>${attractionDialogObject.name}</h3>
      <p>${attractionDialogObject.city}</p>
      <p>${attractionDialogObject.state}</p>
      <p>${attractionDialogObject.description}</p>
    </section>
  `
}

export const Itinerary = (itineraryObj) => {
  return `
    <div class="itinerary box" id="itinerary--${itineraryObj.id}">
      <h3>Itinerary #${itineraryObj.id}</h3>
      <p>Park: ${itineraryObj.park}</p>
      <p>Attraction: ${itineraryObj.attraction}</p>
      <p>Eatery: ${itineraryObj.eatery}</p>
</div>
  `
}

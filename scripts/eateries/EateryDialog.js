// This is just a blueprint for some logic we want to execute at some point IN THE FUTURE!!!!!
export const Eatery = (eateryObject) => {
  return `
  <section class="eatery">
    <h2>${eateryObject.businessName}</h2>
    <p>${eateryObject.description}</p>
    <p>${eateryObject.city}</p>
    <p>${eateryObject.state}</p>
    <p>${eateryObject.ameneties.ameneties.wifi}</p>
  </section>
  `
}
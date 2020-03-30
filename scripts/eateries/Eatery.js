export const Eatery = eateryObject => {
  return `
  <section class="preview__eatery">
    <h3>${eateryObject.businessName}</h3>
    <p>${eateryObject.city}</p>
    <p>${eateryObject.state}</p>
    <button id="button--${eateryObject.id}">Details</button>
  </section>
  `
}

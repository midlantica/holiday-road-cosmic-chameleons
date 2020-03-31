export const Eatery = eateryObject => {
  return `
    <h3 id="eateryName">${eateryObject.businessName}</h3>
    <p>${eateryObject.city}</p>
    <p>${eateryObject.state}</p>
    <button id="button--${eateryObject.id}">Details</button>
  `
}

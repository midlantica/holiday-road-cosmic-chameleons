export const Park = (parkObject) => {
  return `
        <h3>${parkObject.name}</h3>
        <p>${parkObject.states}</p>
        <button id="park--${parkObject.id}">Details</button>
    `
}

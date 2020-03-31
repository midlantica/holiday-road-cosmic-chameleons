// Exports a function that renders the HTML for the attraction preview 

export const Attraction = (attractionObject) => {
    return `
        <h3 id="attractionName">${attractionObject.name}</h3>
        <p>${attractionObject.state}</p>
        <button id="attraction--${attractionObject.id}">Details</button>
    `
}
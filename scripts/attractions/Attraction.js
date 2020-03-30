// Exports a function that renders the HTML for the attraction preview 

export const Attraction = (attractionObject) => {
    return `
        <section class="preview__attraction">
            <h3>${attractionObject.name}</h3>
            <p>${attractionObject.state}</p>
            <button id="attraction--${attractionObject.id}">Details</button>
        </section>
    `
}
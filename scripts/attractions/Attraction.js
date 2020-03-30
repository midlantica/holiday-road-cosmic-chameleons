export const Attraction = (attractionObject) => {
    return `
        <section class="preview__attraction">
            <h3>${attractionObject.name}</h3>
            <p>${attractionObject.states}</p>
            <button id="park--${attractionObject.id}">Details</button>
        </section>
    `
}
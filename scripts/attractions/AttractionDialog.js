export const Attraction = (attractionDialogObject) => {
    return `
        <section class="preview__park">
            <h3>${attractionDialogObject.name}</h3>
            <p>${attractionDialogObject.addresses}</p>
            <p>${attractionDialogObject.states}</p>
            <p>${attractionDialogObject.latLong}</p>
            <p>${attractionDialogObject.description}</p>
            <p>${attractionDialogObject.parkCode}</p>
            <p>${attractionDialogObject.entranceFees}</p>
            <p>${attractionDialogObject.url}</p>
        </section>
    `
}




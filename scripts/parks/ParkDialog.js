export const Park = (parkDialogObject) => {
    return `
        <section class="preview__park">
            <h3>${parkDialogObject.name}</h3>
            <p>${parkDialogObject.addresses}</p>
            <p>${parkDialogObject.states}</p>
            <p>${parkDialogObject.latLong}</p>
            <p>${parkDialogObject.description}</p>
            <p>${parkDialogObject.parkCode}</p>
            <p>${parkDialogObject.entranceFees}</p>
            <p>${parkDialogObject.url}</p>
        </section>
    `
}




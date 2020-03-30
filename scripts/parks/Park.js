export const Park = (parkObject) => {
    return `
        <section class="preview__park">
            <h3>${parkObject.name}</h3>
            <p>${parkObject.states}</p>
            <button id="park--${parkObject.id}">Details</button>
        </section>
    `
}


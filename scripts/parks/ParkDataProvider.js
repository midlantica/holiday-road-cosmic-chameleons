let parks = []

// Exports function that updates and returns database with a fetch:

export const getParks = () => {

    return fetch("http://localhost:8090/data")
        .then(response => response.json())
        .then(parsedParks => {
            parks = parsedParks
        })
}

// Stores a function to call(use) a copy of the parks data:

export const useParks = () => {
    return parks.slice()
}
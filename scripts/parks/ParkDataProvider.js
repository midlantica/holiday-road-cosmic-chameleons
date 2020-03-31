// Import variable that stores the nps key to use in the fetch call 

let parks = []

  /*
        Load database state into application state with a fetch().
        Make sure the last `then()` sets the local `Criminals`
        variable to what is in the response from the API.
    */


export const getParks = () => {
  
    return fetch("http://localhost:8090/data")
        .then(response => response.json())
        .then(parsedParks => {
            parks = parsedParks
        })
}

// Store a function to call(use) a copy of the parks data 

export const useParks = () => {
    return parks.slice()
}
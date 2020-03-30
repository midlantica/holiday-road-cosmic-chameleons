import { getParks } from "./parks/parkDataProvider.js"
import { ItineraryForm } from "./itineraries/ItineraryForm.js"
import { getEateries } from './eateries/EateryDataProvider.js'

getParks()
    .then(getEateries)
    .then(ItineraryForm)




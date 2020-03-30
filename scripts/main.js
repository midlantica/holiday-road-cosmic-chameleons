import { getParks } from './parks/ParkDataProvider.js'
import { getEateries } from './eateries/EateryDataProvider.js'
import { getAttractions } from './attractions/AttractionDataProvider.js'
import { ItineraryForm } from './itineraries/ItineraryForm.js'

getParks()
    .then(getEateries)
    .then(getAttractions)
    .then(ItineraryForm)

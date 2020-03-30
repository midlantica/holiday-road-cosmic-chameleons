import { getEateries } from './eateries/EateryDataProvider.js'
import { ItineraryForm } from './itineraries/ItineraryForm.js'
import { getParks } from './parks/parkDataProvider.js'

getParks()
  .then(getEateries)
  .then(ItineraryForm)

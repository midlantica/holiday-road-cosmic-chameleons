import { getAttractions } from './attractions/AttractionDataProvider.js'
import { getEateries } from './eateries/EateryDataProvider.js'
import { ItineraryForm } from './itineraries/ItineraryForm.js'
import { getParks } from './parks/ParkDataProvider.js'
import './preview/ItineraryPreview.js'
import './eateries/EateryDialog.js'

getParks()
  .then(getEateries)
  .then(getAttractions)
  .then(ItineraryForm)


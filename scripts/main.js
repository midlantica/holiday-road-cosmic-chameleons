import { getAttractions } from './attractions/AttractionDataProvider.js'
import './attractions/AttractionDialog.js'
import { getEateries } from './eateries/EateryDataProvider.js'
import './eateries/EateryDialog.js'
import { getItineraries } from './itineraries/ItineraryDataProvider.js'
import { ItineraryForm } from './itineraries/ItineraryForm.js'
import { renderItinerary } from './itineraries/ItineraryList.js'
import { getParks } from './parks/ParkDataProvider.js'
import './parks/ParkDialog.js'
import './preview/ItineraryPreview.js'

getParks()
  .then(getEateries)
  .then(getAttractions)
  .then(ItineraryForm)

getItineraries().then(renderItinerary)

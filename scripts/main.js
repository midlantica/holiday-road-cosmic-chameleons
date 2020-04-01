import { getAttractions } from './attractions/AttractionDataProvider.js'
import { getEateries } from './eateries/EateryDataProvider.js'
import { ItineraryForm } from './itineraries/ItineraryForm.js'
import { getParks } from './parks/ParkDataProvider.js'
import { renderItinerary } from './itineraries/ItineraryList.js'
import { getItineraries } from './itineraries/ItineraryDataProvider.js'
import './preview/ItineraryPreview.js'
import './eateries/EateryDialog.js'
import './parks/ParkDialog.js'


getParks()
  .then(getEateries)
  .then(getAttractions)
  .then(ItineraryForm)

getItineraries().then(renderItinerary)

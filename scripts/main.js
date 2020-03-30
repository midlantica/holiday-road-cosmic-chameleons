import { getParks } from "./parks/parkDataProvider.js"
import { ItineraryForm } from "./itineraries/ItineraryForm.js"
getParks().then(ItineraryForm)

import { getEateries } from './eateries/EateryDataProvider.js'
import { EaterySelector } from './eateries/EaterySelector.js'
getEateries().then(EaterySelector)

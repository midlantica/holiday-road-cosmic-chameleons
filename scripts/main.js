import { getParks } from "./parks/parkDataProvider.js"
import { ItineraryForm } from "./itineraries/ItineraryForm.js"

getParks().then(ItineraryForm)

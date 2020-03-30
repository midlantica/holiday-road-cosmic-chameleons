import { getEateries } from './eateries/EateryDataProvider.js'
import { EaterySelector } from './eateries/EaterySelector.js'

getEateries().then(EaterySelector)

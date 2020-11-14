import { combineReducers } from 'redux'
import cakeReducer from './Cakes/cakeReducers'
import iceCreamReducer from './IceCream/ic_Reducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

export default rootReducer
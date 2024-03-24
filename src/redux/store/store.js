import { createStore, combineReducers } from 'redux'
import userReducer from '../reducers/reducer' // adjust the path as necessary

const rootReducer = combineReducers({
  user: userReducer,
})

const store = createStore(rootReducer)

export default store

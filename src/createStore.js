import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'
import ReduxThunk from 'redux-thunk'

export const middleWares = [ReduxThunk]

export const createStoreWithMiddleWare = applyMiddleware(...middleWares)(createStore)
export const store = createStoreWithMiddleWare(rootReducer)
import checkPropTypes from "prop-types/checkPropTypes"
import { applyMiddleware, createStore } from "redux"
import rootReducer from './../reducers'
import { middleWares } from './../createStore';

export const findByTestArr = (component, attr) =>{
    const wrapper = component.find({"data-testid":`${attr}`})
    return wrapper
 }
 
 export const checkProps = (component, expectedProps) => {
     const propsErr = checkPropTypes(component.propTypes, expectedProps,'props',component.name);
     return propsErr
 }

 export const testStore=(initialState)=>{
     const createStoreWithMiddleWare = applyMiddleware(...middleWares)(createStore)
     return createStoreWithMiddleWare(rootReducer,initialState)
 }
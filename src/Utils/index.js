import checkPropTypes from "prop-types/checkPropTypes"

export const findByTestArr = (component, attr) =>{
    const wrapper = component.find({"data-testid":`${attr}`})
    return wrapper
 }
 
 export const checkProps = (component, expectedProps) => {
     const propsErr = checkPropTypes(component.propTypes, expectedProps,'props',component.name);
     return propsErr
 }
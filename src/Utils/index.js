export const findByTestArr = (component, attr) =>{
    const wrapper = component.find({"data-testid":`${attr}`})
    return wrapper
 }
 
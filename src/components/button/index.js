import React from 'react'
import { PropTypes } from 'prop-types';

const SharedButton=(props)=>{

    function submitEvent(){
         
            console.log('hit')
           props.emitEvent()
        
    }
    const{buttonText} = props
    return(
        <button
       onClick={()=>submitEvent()}
         data-testid='buttonComponent'>
            {buttonText}
        </button>
    )
}

SharedButton.proptype ={
    buttonText: PropTypes.string,
    emitEvent: PropTypes.func 
}
export default SharedButton
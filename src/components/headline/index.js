 
import React from 'react'
import  PropTypes  from 'prop-types';



const Headline=(props)=>{
    const {header, desc} = props
    if(!header){
        return null
    }
return(
    <div data-testid='headlineComponent'>
    <h1 data-testid='header' > {header}</h1> 
       <p data-testid='desc'>{desc}</p>
    </div>
)
}
Headline.propTypes = {
    header: PropTypes.string,
    desc: PropTypes.string,
    tempArr: PropTypes.arrayOf(PropTypes.shape({
        fName: PropTypes.string,
        lName: PropTypes.string,
        email: PropTypes.string,
        age: PropTypes.number,
        onlineStatus: PropTypes.bool
    }))
}

 
export default Headline
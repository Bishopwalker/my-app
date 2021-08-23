import React from 'react'

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
export default Headline
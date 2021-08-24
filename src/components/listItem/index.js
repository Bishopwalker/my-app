import React from 'react'
import PropTypes from 'prop-types'

const ListItem=(props)=>{
    const{title,desc}=props
    if(!title) return null;
return(
    <div data-testid='ListItemComponent'>
    <h2 data-testid='componentTitle'>{title}</h2>
    <div data-testid='componentDesc'>{desc}</div>

    </div>
)
}
ListItem.propTypes ={
    title: PropTypes.string,
    desc: PropTypes.string
}
export default ListItem
import React from 'react';
import img from '../../assets/yessir.png'

const Header=(props)=>{
    return(
        <header data-testid='header-component'>
          <div className="wrap">
              <div className='logo'>
                  <img   
                  data-testid='logo-img'
                  src={img}
                  alt='some bull shit'
                  width='600px'/>
              </div>
      
          
          </div>
        </header>
    )
}
export default Header
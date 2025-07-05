import React from 'react';
import './Header.css'
function Header(props){
    return(
        <>
           <div className='heading'> 
             <h1>{props.heading}</h1>
           </div> 

        </>
    )
} 
export default Header;
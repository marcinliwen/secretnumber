import React, {Component} from 'react';


function Corrects({counter, title}){
   
        return(
           
            <div className='contener correct'><p>correct {title}:</p><p>{counter}</p></div>
            
        )
    
}
export default Corrects;
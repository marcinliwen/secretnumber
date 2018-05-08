import React, { Component } from 'react';



function Youwin({num, count}){
    return(
        <div className='contener you-win'>
            <div className='contener'>
                <h2>You win in {count} moves!!!</h2>  
            </div>
            <div className='contener'>
                secret number is: {num}
            </div>
            
        </div>
    )
}
export default Youwin
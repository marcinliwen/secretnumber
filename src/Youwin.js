import React, { Component } from 'react';



function Youwin({num}){
    return(
        <div className='contener you-win'>
            <h2>You Win!!!</h2>
            <div className='contener'>
                secret number is: {num}
            </div>
        </div>
    )
}
export default Youwin
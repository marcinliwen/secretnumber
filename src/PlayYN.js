import React, {Component} from 'react';

function PlayYN (){
    return(
        <div className='contener'>
            <div className='contener'>
                <h1>Welcome in 3digits game</h1>
            </div>
            <div className='contener'>
                <h2>Will you play?</h2>
            </div>
            <div>
            <button id="playyes">yes</button>
            <button id="playno">no</button>
            </div>
        </div>
    );
}
export default PlayYN;
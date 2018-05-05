import React, {Component} from 'react';
import Instruction from './Instruction';

function PlayYN ({inst}){
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
            <details  className='contener' id="instruction">
                <summary>How to play</summary>
                <div className='contener'>
                    <p>{inst}</p>
                </div>
            </details>
        </div>
    );
}
export default PlayYN;
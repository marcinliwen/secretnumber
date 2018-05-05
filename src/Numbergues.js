import React, {Component} from 'react';
import PlayYN from './PlayYN';

const inst = "herer you will find information about how to play in this game";

function Numbergues ({name}) {
    
        return (
            <div>
            <h1>3-digits number gues game</h1>
            <h2> hello {name}, will you play?</h2>
            <PlayYN />
            </div>
        );
    }

export default Numbergues;
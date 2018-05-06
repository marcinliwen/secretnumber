import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input';
import Numbergues from './Numbergues';
import Nameask from './Nameask';
import PlayYN from './PlayYN';
import Nameform from './Nameform';

const inst = 'herer you will find information about how to play in this game';

class App extends Component {
  
  render() {
    return (
      <dialog open className='col'>
        <PlayYN />      
      </dialog>
    );
  }
  
}

export default App;

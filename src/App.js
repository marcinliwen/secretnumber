import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input';
import Numbergues from './Numbergues';
import Nameask from './Nameask';

class App extends Component {
  
  render() {
    return (
      <dialog open className='col'>
        <Nameask />
      </dialog>
    );
  }
  
}

export default App;

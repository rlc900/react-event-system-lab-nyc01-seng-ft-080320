// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {

  handleIsKeyUp = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <div>
       <input type='password' onKeyUp={this.handleIsKeyUp}/>
      </div>
    );
  }
}




export default Keypad;

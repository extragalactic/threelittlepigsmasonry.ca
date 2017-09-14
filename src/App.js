import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../public/tplogo.png';
import './App.css';

const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
  width: 100px;  
  height: 100px; 
  margin: auto;
}
  display: flex;
  justify-content: flex-end;
`;


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div
        
        >
      <Button />
      </div>
      </div>
    );
  }
}

export default App;

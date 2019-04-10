import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import ManageSessions from '../src/components/manageSessions/ManageSessions';

class App extends Component {

  render() {
    return (
      <div className="App">

         <header className="App-header">
           TO DO LIST
           <ManageSessions />
         </header>
        
      </div>
    );
  }
}

export default App;

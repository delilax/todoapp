import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import ManageSessions from './components/ManageSessions';
import ToDoList from './components/ToDoList';

class App extends Component {

  render() {
    return (
      <div className="App">

         <header className="App-header">
           TO DO LIST
           <ToDoList />
           <ManageSessions/>
         </header>
        
      </div>
    );
  }
}

export default App;

import * as React from 'react';
import './App.css';

import ManageSessions from './components/ManageSessions';
import ToDoList from './components/ToDoList';
import { any } from 'prop-types';


class App extends React.Component<any,any> {

  render() {
    return (
      <div className="App">
            <ToDoList />
            <ManageSessions />
      </div>
    );
  }
}

export default App;

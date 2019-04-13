import * as React from 'react';
import './App.css';

import ManageSessions from './components/ManageSessions';
import ToDoList from './components/ToDoList';
import { any } from 'prop-types';

interface props{
  ManageSessions?: IManageSessions
}

export interface IManageSessions {
}



class App extends React.Component<props,any> {

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

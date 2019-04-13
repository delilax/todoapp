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
         <header className="App-header">
           <ToDoList />
            <ManageSessions />

         </header>
        
      </div>
    );
  }
}

export default App;

import * as React from 'react';
import './App.css';

import ManageSessions from './components/ManageSessions';
import ToDoList from './components/ToDoList';

class App extends React.Component<any,any> {

  render() {
    return (
      <div className="App">
            <ManageSessions />
            <ToDoList />
      </div>
    );
  }
}

export default App;

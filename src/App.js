import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // return (
      // <div className="App">
      //   <h1>Hi, from React app</h1>
      // </div>
    // );
    return React.createElement('div', { className: App }, React.createElement('h1', null, 'Hi, from React app'))
  }
}

export default App;

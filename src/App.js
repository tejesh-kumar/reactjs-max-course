import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, from React app</h1>
        <p>This is really working</p>
        <Person name="Tejesh" age="25"></Person>
        <Person name="Nitesh" age="23">My hobbies: Racing</Person>
        <Person name="Madhu" age="26"></Person>
      </div>
    );
  }
}

export default App;




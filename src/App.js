import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Tejesh", age: 25 },
      { name: "Nitesh", age: 23 },
      { name: "Madhu", age: 26 }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, from React app</h1>
        <p>This is really working</p>
        <button>Switch Name</button>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    );
  }
}

export default App;




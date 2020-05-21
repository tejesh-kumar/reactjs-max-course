import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Tejesh", age: 25 },
      { name: "Nitesh", age: 23 },
      { name: "Madhu", age: 26 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    this.setState({
        persons: [
          { name: "Tejesh Kumar", age: 25 },
          { name: "Nitesh", age: 23 },
          { name: "Madhu", age: 27 }
        ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, from React app</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    );
  }
}

export default App;



// switchNameHandler - 'Handler' part of method name is a convention. This is a method we are not calling but active assigned to handle events.
// Methods & properties of class components are used in es6 syntax.
// Do not mutate the state directly, this.state.persons[0].name = 'Tejesh Kumar';


// Component Object has a setState() method is used to update the state. This method takes an object as argument & merges to the existing state.

  // switchNameHandler = () => {
  //   this.setState({
  //       persons: [
  //         { name: "Tejesh Kumar", age: 25 },
  //         { name: "Nitesh", age: 23 },
  //         { name: "Madhu", age: 27 }
  //       ]
  //   })
  // }
// setState only updates the 'persons' array values which are changed but 'otherState' property is not changed in the 'state' & is not discarded either.

// Hence, changes in 'state' or 'props' leads React to re-render the DOM.

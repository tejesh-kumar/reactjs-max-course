import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Tejesh", age: 25 },
      { name: "Nitesh", age: 23 },
      { name: "Madhu", age: 26 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    this.setState({
        persons: [
          { name: newName, age: 25 },
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
        <button onClick={() => this.switchNameHandler('Tejesh Kumar')}>Switch Name</button>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Tejesh Kumar B M')}>My hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    );
  }
}

export default App;



// Methods in one component can be passed as props(references) to other components, that function can be called in through props.refFuncName.
// In app component,
  // class App extends Component {
  //   state = {
  //     persons: [
  //       { name: "Tejesh", age: 25 },
  //       { name: "Nitesh", age: 23 },
  //       { name: "Madhu", age: 26 }
  //     ],
  //     otherState: 'some other value'
  //   }

  //   switchNameHandler = (newName) => {
  //     this.setState({
  //         persons: [
  //           { name: newName, age: 25 },
  //           { name: "Nitesh", age: 23 },
  //           { name: "Madhu", age: 27 }
  //         ]
  //     })
  //   }

  //   render() {
  //     return (
  //       <div className="App">
  //         <h1>Hi, from React app</h1>
  //         <p>This is really working</p>
  //         <button onClick={() => this.switchNameHandler('Tejesh Kumar')}>Switch Name</button>

  //         <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>

  //         <Person 
  //          name={this.state.persons[1].name} 
  //          age={this.state.persons[1].age} 
  //          click={this.switchNameHandler.bind(this, 'Tejesh Kumar B M')}>My hobbies: Racing
  //         </Person>

  //         <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
  //       </div>
  //     );
  //   }
  // }
  

// In person component,
  // const person = (props) => {
  //   return (
  //       <div>
  //           <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
  //           <p>{props.children}</p>
  //       </div>
  //   )
  // }



// Passing parameters to method using bind(this, 'tejesh');
// <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Tejesh Kumar B M')}>My hobbies: Racing</Person>

// Passing parameters to method using arrow functions, () => this.switchNameHandler('Tejesh Kumar')
// <button onClick={() => this.switchNameHandler('Tejesh Kumar')}>Switch Name</button>
// This is a bit inefficient way, as this leads react to re-render certain things too often.

// Stateful & Stateless components
// Stateful(container) components is a component that manages state (eg:- App component) & stateless(presentational) components are components that don't manage state (eg:- Person Component).
// Good practice - More stateless components & less stateful components.







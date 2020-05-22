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
    otherState: 'some other value',
    showPersons: false
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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Tejesh", age: 25 },
        { name: event.target.value, age: 23 },
        { name: "Madhu", age: 27 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person) => {
              return <Person name={person.name} age={person.age} />
            })
          }

          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
          <Person name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Tejesh Kumar B M')} 
          changed={this.nameChangedHandler}>My hobbies: Racing</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person> */}
        </div> 
      )
    }

    return (
      <div className="App">
        <h1>Hi, from React app</h1>
        <p>This is really working</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        { persons }
      </div>
    );
  }
}

export default App;








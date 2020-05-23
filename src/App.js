import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: "dfas1", name: "Tejesh", age: 25 },
      { id: "ghfdsd2", name: "Nitesh", age: 23 },
      { id: "ddewd3", name: "Madhu", age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
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

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    // console.log(person);

    this.setState({
      persons: persons
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
            this.state.persons.map((person, index) => {
              return <Person 
                id = {index} name={person.name} 
                age = {person.age} 
                click = {() => { this.deletePersonHandler(index)}} 
                key = {person.id} />
            })
          }
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








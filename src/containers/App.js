import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';

class App extends Component {
  constructor(props) {
    super(props);                  // Executes the constructor of extending 'Component'
    console.log('[App.js] constructor');

    // this.state = {
    //   persons: [
    //     { id: "dfas1", name: "Tejesh", age: 25 },
    //     { id: "ghfdsd2", name: "Nitesh", age: 23 },
    //     { id: "ddewd3", name: "Madhu", age: 26 }
    //   ],
    //   otherState: 'some other value',
    //   showPersons: false
    // }
  }

  state = {                 // More modern syntax in es6 where the state object is transformed & initialized inherantly behind the scenes, as above(this.state) by running constructor function by es6.
    persons: [
      { id: "dfas1", name: "Tejesh", age: 25 },
      { id: "ghfdsd2", name: "Nitesh", age: 23 },
      { id: "ddewd3", name: "Madhu", age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;                                     // return updated state
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[App.js] componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState((prevState, props) => {
      return { 
        persons: persons, 
        changeCounter: prevState.changeCounter + 1 
      }
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);

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
    console.log('[App.js] render');

    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHandler} />
    }

    return (
      // <WithClass classes={classes.App}>
      <Aux>
        <button onClick={() => {
          this.setState({showCockpit: false})
        }}>Remove Cockpit</button>

        { this.state.showCockpit === true ?
        <Cockpit title={this.props.appTitle} showPersons={this.state.showPersons} personsLength={this.state.persons.length} clicked={this.togglePersonsHandler}/> : null}
        { persons }
      </Aux>
      // </WithClass>
    );
  }
}

export default withClass(App, classes.App);







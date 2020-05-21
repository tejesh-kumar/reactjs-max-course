// import React, { Component } from 'react';
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

// class App extends Component {
//   state = {
//     persons: [
//       { name: "Tejesh", age: 25 },
//       { name: "Nitesh", age: 23 },
//       { name: "Madhu", age: 26 }
//     ],
//     otherState: 'some other value'
//   }

//   switchNameHandler = () => {
//     this.setState({
//         persons: [
//           { name: "Tejesh Kumar", age: 25 },
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
//         <button onClick={this.switchNameHandler}>Switch Name</button>

//         <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
//         <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing</Person>
//         <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
//       </div>
//     );
//   }
// }

// export default App;




const app = () => {

  const [ personsState, setPersonsState ] = useState({
                      persons: [
                        { name: "Tejesh", age: 25 },
                        { name: "Nitesh", age: 23 },
                        { name: "Madhu", age: 26 }
                      ]
                    })

                                          

  const [ otherState, setOtherState ] = useState({ otherState: 'some other value' })

  console.log(personsState, otherState);


  const switchNameHandler = () => {
    setPersonsState({
        persons: [
          { name: "Tejesh Kumar", age: 25 },
          { name: "Nitesh", age: 23 },
          { name: "Madhu", age: 27 }
        ]
    })
  }

    return (
      <div className="App">
        <h1>Hi, from React app</h1>
        <p>This is really working</p>
        <button onClick={switchNameHandler}>Switch Name</button>



        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}></Person>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: Racing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}></Person>
      </div>
    );
}

export default app;






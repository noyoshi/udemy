import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import ToggleView from './ToggleView/ToggleView'

class App extends Component {

  state = {
    persons: [
      {id: 0, name: 'Silver', age: 10},
      {id: 1, name: 'Dan', age: 20},
      {id: 2, name: 'Gold', age:20},
    ],
    showPersons: false,
  }

  // Event handler takes event and updates the state accordingly
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    console.log(personIndex);
    // Spread operator is also avaliable for objects!
    // TLDR we can get the copy of the object and its attributes :)
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    console.log(persons[personIndex]);
    this.setState({persons: persons});
  };

  showPersonsHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
    console.log("DERP");
  };

  deletePersonsHandler = (index) => {
    const persons = [...this.state.persons];
    // Deletes the person from the index
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
        persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person
                name={person.name}
                age={person.age}
                onChange={(event) => this.nameChangeHandler(event, person.id)}
                click={() => this.deletePersonsHandler(index)}
                key={person.id}
              />
            })}
          </div>
        )
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ToggleView click={this.showPersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;

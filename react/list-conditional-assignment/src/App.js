import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {

  state = {
    text: 'I am a teapot',
    minLen: 5,
    maxLen: 20,
  }

  textChangeHandler = (event) => {
    const text = event.target.value;
    this.setState({ text: text });
  }

  deleteCharHandler = (event, key) => {
    let textList = this.state.text.split('');
    console.log(key);
    textList.splice(key, 1);
    console.log(textList);
    const text = textList.join('');
    this.setState({ text: text });
  }

  render() {
    let charComponents = null;

    if (this.state.text.length > 0) {
      let charList = this.state.text.split('');
      charComponents = charList.map((c, index) => {
        return <CharComponent
          char={c}
          key={index}
          onClick={(event) => this.deleteCharHandler(event, index)}
        />;
      })
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input onChange={this.textChangeHandler} value={this.state.text}>
        </input>
        <p>
          The length of that is {this.state.text.length}
        </p>
        <ValidationComponent
          minLen={this.state.minLen}
          maxLen={this.state.maxLen}
          textLen={this.state.text.length}
          />
        {charComponents}
      </div>
    );
  }
}

export default App;

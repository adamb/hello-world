import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class AgeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {age: 50};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({age: event.target.value});
  }

  handleSubmit(event) {
	  var age = Math.abs(this.state.age);
	  var maxHR = 220 - age;
	  var target50 = Math.round(maxHR * 0.5);
	  var target85 = Math.round(maxHR * 0.85);
    alert('Max Heart Rate for ' + age + ' is ' + maxHR + '.\nTarget Range is '+ target50 + ' to ' + target85);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Age:
          <input type="number" value={this.state.age} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Max HR" />
      </form>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
		<AgeForm />
      </div>
    );
  }
}


export default App;

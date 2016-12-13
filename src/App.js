import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function TargetHR(props) {
    var age = Math.abs(props.age);
    var maxHR = 220 - age;  
    var target50 = Math.round(maxHR * 0.5);
    var target85 = Math.round(maxHR * 0.85);
	if (age > 110) age = 110;
	return <div>	
		<h1>Age: {age} </h1> <h1>Max heart rate: {maxHR} </h1> 	
		<h1> Target range: {target50} to {target85}</h1>
	</div>;
}

class AgeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {age: 50};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({age: event.target.value});
  var age = Math.abs(this.state.age);
  var maxHR = 220 - age;  
  var target50 = Math.round(maxHR * 0.5);
  var target85 = Math.round(maxHR * 0.85);
  this.setState({max: maxHR});
  this.setState({t50: target50});
  this.setState({t85: target85});
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
	<div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Age:
          <input type="number" value={this.state.age} onChange={this.handleChange} />
        </label>
      </form>
	  <TargetHR age={this.state.age} max={this.state.max} />
	</div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Enter your age to compute your target heart rate.</h2>
        </div>
		<p />
		<AgeForm />
      </div>
    );
  }
}


export default App;

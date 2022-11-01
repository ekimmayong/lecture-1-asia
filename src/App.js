import React, { Component } from "react";

// App: class based component
class App extends Component {
  //js object
  state = {
    name: 'alina',
    age: 20,
    designation: 'developer',
    arrOfObjects: [{}, {}, {}]
  }


  handleClick = () => {
    //to update a state
    this.setState({
      age: 25
    });
  }

  //
  render() {
    return (
      //jsx-> js syntx extension

      //this is referring to App
      <div>
        <h2>Hello</h2>
        <p>Hi</p>
        My name is {this.state.name} and age is {this.state.age}, working as a {this.state.designation}.
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}


export default App;

{/* <button onclick="">Click</button> */ }

// Diffing algo
// reconcilation process

//inheritance


//js objects
// var obj = {
//   name: 'alina',
//   age: 20,
//   designation: 'developer',
//   details: function () {

//   }
// }


// ES6 Features:
// let, const, arrow function, default function arguments, class, inheritance, spread operator, rest operator, array helper function(map, filter, find, forEach, some, every, reduce)
















// var person = {
//   name: 'alina'
// }


// function add() {

// }
import React, { Component } from "react";
import './App.css'

// App: class based component
class App extends Component {
  //js object
  state = {
    user: [
      { id: 1, name: 'Jose', position: 'IT', age: 30 },
      { id: 1, name: 'John', position: 'Manager', age: 20 },
      { id: 1, name: 'Erwin', position: 'Sales agent', age: 22 },
      { id: 1, name: 'Ray', position: 'CSR', age: 45 },
    ],
    total: 1
  }


  handleIncr = () => {
    //to update a state
    this.setState({
      total: this.state.total + 1
    });
  }

  handleDesc=()=> {
    this.setState({
      total: this.state.total - 1
    })
  }

  //
  render() {
    console.log(this.state.user)
    return (
      //jsx-> js syntx extension

      //this is referring to App
      <div className="container">
        <h2>List of Users</h2>
        <div>
          <ol>
            {
              this.state.user.map(function(data, i) {
                return <li key={i}>{data.name} - {data.position}</li>
              })
            }
          </ol>
        </div>
       

       <p>total value: <strong>{this.state.total}</strong></p> 
        <button onClick={this.handleIncr}>Increment</button>
        <button onClick={this.handleDesc}>Decrement</button>
      </div>
    )
  }
}


export default App;
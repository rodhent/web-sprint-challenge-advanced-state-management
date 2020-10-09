import React, { Component } from "react";
import "./App.css";
import SmurfForm from "./SmurfForm.jsx";
import SmurfList from "./SmurfList.jsx";


class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="navbar">SMURFS</div>
        <h1>Welcome to your state management version of Smurfs!</h1>
        

        <SmurfForm />
        <SmurfList />

      </div>
    );
  }
}

export default App;

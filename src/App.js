import React from "react";
import logo from "./logo.png";
import "./App.css";
import InputTestForm from "./components/InputTestForm";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>HELLO WORLD. AND HELLO EVANS</p>
          <InputTestForm />
        </header>
      </div>
    );
  }
}

export default App;

import React from "react";
import logo from "./logo.png";
import "./App.css";
import InputTestForm from "./components/InputTestForm";
import AdminSignIn from "./components/AdminSignIn";
import { Authenticator } from "@aws-amplify/ui-react";

class App extends React.Component {
  render() {
    return (
      <Authenticator>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>HELLO WORLD. AWS SUCKS.</p>
            <InputTestForm />

            <AdminSignIn />
          </header>
        </div>
      </Authenticator>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Stats from "./components/stats";

class App extends Component {
  render() {
    return (
      <div className="App app-background">
        <Header />
        <Stats />
      </div>
    );
  }
}

export default App;

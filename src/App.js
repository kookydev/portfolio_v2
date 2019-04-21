import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Stats from "./components/stats";
import Work from "./components/work";
import Contact from "./components/contact";
import Footer from "./components/footer";

class App extends Component {
  state = {
    active: 0
  };
  tabs = ["STATS", "WORK", "CONTACT"];
  tabClickHandler = index => {
    this.setState({ active: index });
  };

  bodyChooser = () => {
    switch (this.state.active) {
      case 0:
        return <Stats />;
      case 1:
        return <Work />;
      case 2:
        return <Contact />;
      default:
        console.log("Error");
        break;
    }
  };

  render() {
    return (
      <div className="App app-background">
        <Header
          active={this.state.active}
          clickFunc={this.tabClickHandler}
          tabs={this.tabs}
        />
        {this.bodyChooser()}
        <Footer />
      </div>
    );
  }
}

export default App;

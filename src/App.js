import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Stats from "./components/stats";
import Work from "./components/work";
import Contact from "./components/contact";
import Footer from "./components/footer";
import About from "./components/about";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";

library.add(fa - times - circle);

class App extends Component {
  state = {
    active: 0,
    modal: false
  };
  tabs = ["STATS", "WORK", "CONTACT"];
  tabClickHandler = index => {
    this.setState({ active: index });
  };

  modalHandler = status => {
    let tempState = this.state;
    console.log(this.state);
    tempState.modal = status;
    console.log(tempState);
    this.setState(tempState);
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
        <About modal={this.state.modal} />
        <Footer modalHandler={this.modalHandler} />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import WorkList from "./workList";
import WorkDetail from "./workDetail";
import "./work.css";

class Work extends Component {
  state = { current: 0 };
  workData = [
    {
      title: "Weather.io",
      imgUrl: "weather",
      description:
        "A Weather app using 3 RESTful API's to fetch a location, forecast and background image to match the weather.",
      techStack: ["HTML", "CSS", "Javascript", "React", "Node", "Express"],
      source: "https://github.com/kookydev/weather-fullstack",
      live: "https://protected-springs-37746.herokuapp.com/"
    },
    {
      title: "Todo List",
      imgUrl: "todo",
      description:
        "A todo app created in React with ability to add, delete and flag list items as complete.",
      techStack: ["HTML", "CSS", "Javascript", "React", "Node"],
      source: "http://github.com/kookydev",
      live: "http://kookydev.github.com"
    },

    {
      title: "React Calculator",
      imgUrl: "calculator",
      description:
        "A functioning calculator created using React.js components with Javascript for the logic and CSS for the styling.",
      techStack: ["HTML", "CSS", "Javascript", "React", "Node"],
      source: "http://github.com/kookydev",
      live: "http://kookydev.github.com"
    },
    {
      title: "Dice Game",
      imgUrl: "dice",
      description:
        "A multiplayer Dice Game for 1 to 10 players, incorporating a scoreboard, named players and turn-based gameplay.",
      techStack: ["HTML", "CSS", "Javascript"],
      source: "https://github.com/kookydev/DiceGame",
      live: "https://kookydev.github.io/DiceGame/"
    },
    {
      title: "Netflix Clone",
      imgUrl: "metflicks",
      description:
        "A fully responsive clone of the the Netflix landing page, using HTML CSS and Javascript.",
      techStack: ["HTML", "CSS", "Javascript"],
      source: "http://github.com/kookydev",
      live: "http://kookydev.github.com"
    },
    {
      title: "Drum Kit",
      imgUrl: "drumkit",
      description:
        "A drumkit which demonstrates DOM manipulation and event listeners in Javascript. Use keyboard or mouse / touch to play.",
      techStack: ["HTML", "CSS", "Javascript"],
      source: "http://github.com/kookydev",
      live: "http://kookydev.github.com"
    }
  ];
  clickHandler = index => {
    this.setState({ current: index });
  };
  render() {
    return (
      <div className="work-container">
        <WorkList
          current={this.state.current}
          data={this.workData}
          clickHandler={this.clickHandler}
        />
        <WorkDetail
          current={this.state.current}
          data={this.workData[this.state.current]}
        />
      </div>
    );
  }
}

export default Work;

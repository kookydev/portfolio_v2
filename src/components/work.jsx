import React, { Component } from "react";
import WorkList from "./workList";
import WorkDetail from "./workDetail";
import "./work.css";

class Work extends Component {
  state = { current: 0 };
  workData = [
    {
      title: "Dice Game",
      imgUrl: "../resources/screengrabs/DiceGame.png",
      description: "A multiplayer Dice Game",
      techStack: [
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "Node",
        "JQuery",
        "Express"
      ],
      source: "http://github.com/kookydev",
      live: "http://kookydev.github.com"
    },
    {
      title: "Dice Game2",
      imgUrl: "../resources/screengrabs/DiceGame.png",
      description: "A multiplayer Dice Game2",
      techStack: [
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "Node",
        "JQuery",
        "Express"
      ],
      source: "http://github.com/kookydev",
      live: "http://kookydev.github.com"
    },
    {
      title: "Dice Game3",
      imgUrl: "../resources/screengrabs/DiceGame.png",
      description: "A multiplayer Dice Game3",
      techStack: [
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "Node",
        "JQuery",
        "Express"
      ],
      source: "http://github.com/kookydev",
      live: "http://kookydev.github.com"
    },
    {
      title: "Dice Game4",
      imgUrl: "../resources/screengrabs/DiceGame.png",
      description: "A multiplayer Dice Game4",
      techStack: [
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "Node",
        "JQuery",
        "Express"
      ],
      source: "http://github.com/kookydev",
      live: "http://kookydev.github.com"
    },
    {
      title: "Dice Game5",
      imgUrl: "../resources/screengrabs/DiceGame.png",
      description: "A multiplayer Dice Game5",
      techStack: [
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "Node",
        "JQuery",
        "Express"
      ],
      source: "http://github.com/kookydev",
      live: "http://kookydev.github.com"
    },
    {
      title: "Dice Game6",
      imgUrl: "../resources/screengrabs/DiceGame.png",
      description: "A multiplayer Dice Game6",
      techStack: [
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "Node",
        "JQuery",
        "Express"
      ],
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

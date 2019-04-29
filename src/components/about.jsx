import React from "react";

const About = props => {
  return (
    <div
      className={props.modal ? "about-modal about-modal-open" : "about-modal"}
    >
      <div className="modal-close">
        <i
          class="fas fa-times-circle"
          onClick={() => {
            props.modalFunc(false);
          }}
        />
      </div>
      <div className="modal-content">
        <img
          src={require("../resources/RockDude.png")}
          alt=""
          className="avatar"
        />
        <div className="modal-text">
          Name: Kyle <br />
          Likes: Writing Code, Playing guitar, Singing, Learning new things,
          Pushing my limits, The occasional cookie... <br />
          Loves: My family <br />
          Dislikes: Negativity (is that ironic?), Admitting defeat... <br />
          About: I'm a Junior Full-stack Developer based in the Chester (UK)
          area. After years in a career which I was good at, but in which I
          never felt I belonged, I took the plunge into this wondrous coding
          adventure! I love creating awesome things with tech. Check out some of
          my work below and, if you like what you see, or want to hire me 😉,
          let me know.
        </div>
      </div>
    </div>
  );
};

export default About;

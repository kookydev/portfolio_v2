import React, { Component } from "react";
import "./header.css";

class HeaderLabel extends Component {
  state = { active: true };

  componentDidMount() {
    this.setState({ active: this.props.active });
  }

  clickHandler = () => {
    this.props.clickFunc(this.props.index);
  };

  componentDidUpdate(prevProps) {
    if (this.props.active !== this.state.active) {
      this.setState({ active: this.props.active });
    }
  }

  render() {
    return (
      <button
        className={
          this.state.active
            ? "header-label header-label-active"
            : "header-label"
        }
        onClick={this.clickHandler}
      >
        {this.props.title}
      </button>
    );
  }
}

export default HeaderLabel;

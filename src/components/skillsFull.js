import React, { Component } from 'react';

class SkillsFull extends Component {
  render() {
    return(
        <h6>{this.props.SkillsCategory}: {this.props.skillName}</h6>
    )
  }
}

export default SkillsFull;

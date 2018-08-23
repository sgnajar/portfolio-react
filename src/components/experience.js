import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return(
      <Grid>
        <Cell col={8}>
          <h5>{this.props.jobName} | {this.props.location}</h5>
          <p>{this.props.jobDescription}</p>
        </Cell>
        <Cell col={4}>
          <h5>{this.props.start} - {this.props.end}</h5>
        </Cell>
      </Grid>
    )
  }
}

export default Experience;

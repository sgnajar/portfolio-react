import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab:0 };

  }

  toggleCategories(){
    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
        {/* Project 1*/}
        <Card shadow={5} style={{width: '400px', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '200px', background:
          'url(https://cdn.auth0.com/blog/blog/React-logo.png) center / cover'}}>React Project</CardTitle>
          <CardText>
            test
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 2*/}
        <Card shadow={5} style={{width: '400px', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '200px', background:
          'url(https://cdn.auth0.com/blog/blog/React-logo.png) center / cover'}}>React Project #2</CardTitle>
          <CardText>
            test2
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>

      )
    } else if(this.state.activeTab ===1){
      return(
        <div><h1>this is java project</h1></div>

      )
    } else if(this.state.activeTab ===2){
      return(
        <div><h1>this is machine learning project</h1></div>

      )
    } else if(this.state.activeTab ===3){
      return(
        <div><h1>this is nlp project</h1></div>

      )
    }
  }


  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Python</Tab>
          <Tab>Java</Tab>
          <Tab>Machine Learning</Tab>
          <Tab>NLP</Tab>

        </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects
;

import React, { Component } from 'react';
import {Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}} >
        <Grid className ="landing-grid">
          <Cell col={12}>
          <img
           src="https://rapidboostmarketing.com/wp-content/uploads/2014/04/sam_avatar.png"
           alt="avatar"
           className="avatar-img"
           />

           <div className="banner-text">
            <h1>Bioinformatics Professional</h1>

            <hr/>
            <p> Data Wrangling | Python | React | MongoDB | Bioinformatics Pipelines | NGS Data </p>
           <div className="social-links">

           {/* linkedin */}
            <a href="https://www.linkedin.com/in/sgnajar" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin-square"  aria-hidden="true" />
            </a>

            {/* github */}
             <a href="https://github.com/sgnajar" rel="noopener noreferrer" target="_blank">
               <i className="fa fa-github-square"  aria-hidden="true" />
             </a>

           </div>
           </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default LandingPage;

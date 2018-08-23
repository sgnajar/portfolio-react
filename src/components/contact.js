import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
          <h2>Sasan Najar</h2>
          {/*<img
          src=""
          alt="avatar"
          style={{height: "250px"}}
          />*/}
          <p style={{ width: '75%', margin: 'auto', paddingTop: '10em'}}>My desire is to be part of a
          high-level team in an extremely challenging environment that can develop my technical skills,
          hands on experience, responsibility and efficiency in facilitating development of the organization.</p>
          </Cell>

          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent style={{fontSize: '27px',fontFamily: 'Anton'}}>
                <i className="fa fa-phone-square" aria-hidden="true"/>
                (980) 254-2199
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent style={{fontSize: '27px',fontFamily: 'Anton'}}>
                <i className="fa fa-envelope" aria-hidden="true"/>
                sasangnajar@gmail.com
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent style={{fontSize: '27px',fontFamily: 'Anton'}}>
                <i className="fa fa-skype" aria-hidden="true"/>
                sgnajar
                </ListItemContent>
              </ListItem>
            </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;

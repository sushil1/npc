import React from 'react';
import { Menu, Grid, Segment, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <Segment inverted vertical style={{ marginTop: '0px' }}>
    <Grid.Row>
      <Menu inverted={true}>
        <Menu.Item as={Link} to="/">
          <h4>Nepali Cow</h4>
        </Menu.Item>
        <Menu.Item as={Link} to="/products">
          Products
        </Menu.Item>
        <Menu.Item as={Link} to="/about">
          About
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item as={Link} target="_blank" to="https://www.facebook.com/">
            <Icon inverted name="facebook" size="large" />
          </Menu.Item>
          <Menu.Item />
        </Menu.Menu>
      </Menu>
    </Grid.Row>
    <br />

    <div style={{ width: '60%', textAlign: 'center', margin: 'auto' }}>
      <h4 className="ui inverted header">Nepali Cows</h4>
      <p>Contact Us</p>
      <p>Located at Pokhara.</p>
      <p>&copy;NepaliCows, 2018</p>
    </div>
  </Segment>
);

export default Footer;

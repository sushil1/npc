import React from 'react';
import { Menu, Dropdown, Image, Header } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';
import Gravatar from 'react-gravatar';

class TopNavigation extends React.Component {
  render() {
    return (
      <div className="ui fixed inverted menu">
        <div className="ui container">
          <Menu.Item as={NavLink} exact to="/">
            <Header inverted>Nepali Cows</Header>
          </Menu.Item>
          <Menu.Item as={NavLink} exact to="/products">
            Products
          </Menu.Item>
          <Menu.Item as={NavLink} exact to="/about">
            About Us
          </Menu.Item>

          <Menu.Menu position="right">
            <Dropdown
              trigger={
                <Image
                  avatar
                  style={{ marginTop: '10px', marginRight: '30px' }}
                >
                  {<Gravatar email="noemail@gmail.com" default="mm" />}
                </Image>
              }
            >
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/">
                  Logout
                </Dropdown.Item>
                <Dropdown.Item>Profile</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </div>
      </div>
    );
  }
}

export default TopNavigation;
